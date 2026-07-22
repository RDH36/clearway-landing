"use client";

import { useEffect, useRef } from "react";

// The exact fractal-noise smoke from the Clearway app (components/home/SmokeSkia.tsx),
// run here through real Skia — CanvasKit (WASM) — so the vapor reads identically on
// the web. The only change vs the app: a vertical dissipation term so the haze is
// dense at the top and clears downward — "the air clears from here".
//
// Uniforms are declared vec2-first so the flat Float32Array we hand CanvasKit needs
// no alignment padding: [resX, resY, time, density].
const SKSL = `
uniform float2 resolution;
uniform float time;
uniform float density;

float hash(float2 p){ p = fract(p * float2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(float2 p){
  float2 i = floor(p); float2 f = fract(p); float2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i); float b = hash(i + float2(1.0, 0.0));
  float c = hash(i + float2(0.0, 1.0)); float d = hash(i + float2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float fbm(float2 p){ float v = 0.0; float a = 0.5; for (int i = 0; i < 3; i++){ v += a * noise(p); p *= 2.0; a *= 0.5; } return v; }

half4 main(float2 xy) {
  float2 uv = xy / resolution.y;
  float t = time + 18.0;
  float2 q = uv * 2.2;
  q.y += t * 0.14;
  q.x += t * 0.03;
  float2 warp = float2(fbm(q + float2(0.0, t * 0.10)), fbm(q + float2(4.7, 1.3) - float2(0.0, t * 0.08)));
  float d = fbm(q + warp * 1.6);
  d = smoothstep(0.30, 0.90, d);
  // Vapor spans the whole viewport now (it's a full-screen fixed backdrop, no
  // longer clipped to the hero). Keep it top-weighted for readability but never
  // clear to zero — a density floor keeps a light haze across the entire screen.
  float yy = xy.y / resolution.y;
  float fade = mix(0.9, 0.32, smoothstep(0.0, 1.0, yy));
  half3 col = half3(0.63, 0.71, 0.71);
  float a = d * density * fade;
  return half4(col * a, a); // premultiplied, over the CSS atmosphere below
}`;

const FPS = 24;
const DENSITY = 0.75;

export default function Smoke() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let disposed = false;
    let raf = 0;
    const cleanups: Array<() => void> = [];

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    (async () => {
      let CanvasKitInit;
      try {
        CanvasKitInit = (await import("canvaskit-wasm")).default;
      } catch {
        return; // package unavailable — CSS atmosphere stays as the fallback
      }
      const ck = await CanvasKitInit({ locateFile: () => "/canvaskit.wasm" });
      if (disposed) return;

      const effect = ck.RuntimeEffect.Make(SKSL);
      if (!effect) return;
      const paint = new ck.Paint();

      // Size the backing buffer BEFORE building the GL surface — a WebGL surface
      // captures the canvas dimensions at creation, so it must be recreated on
      // resize rather than just resized.
      let surface: ReturnType<typeof ck.MakeWebGLCanvasSurface> = null;
      const setSize = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const rect = canvas.getBoundingClientRect();
        canvas.width = Math.max(1, Math.round(rect.width * dpr));
        canvas.height = Math.max(1, Math.round(rect.height * dpr));
      };
      const makeSurface = () => {
        surface?.delete();
        surface =
          ck.MakeWebGLCanvasSurface(canvas) ?? ck.MakeSWCanvasSurface(canvas);
      };

      setSize();
      makeSurface();
      if (!surface) return;

      const draw = (seconds: number) => {
        if (!surface) return;
        const uniforms = Float32Array.of(
          canvas.width,
          canvas.height,
          seconds,
          DENSITY,
        );
        const shader = effect.makeShader(uniforms);
        paint.setShader(shader);
        const skCanvas = surface.getCanvas();
        skCanvas.clear(ck.TRANSPARENT);
        skCanvas.drawPaint(paint);
        shader.delete();
        surface.flush();
      };

      const resize = () => {
        setSize();
        makeSurface();
      };
      window.addEventListener("resize", resize);
      cleanups.push(() => window.removeEventListener("resize", resize));

      // Fade the vapor in once the first frame is ready.
      canvas.style.opacity = "1";

      if (reduce) {
        draw(18); // one static, clarity-preserving frame
        return;
      }

      const step = 1000 / FPS;
      let last = -step;
      const loop = (now: number) => {
        if (disposed) return;
        if (now - last >= step) {
          last = now;
          draw(now / 1000);
        }
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    })();

    return () => {
      disposed = true;
      if (raf) cancelAnimationFrame(raf);
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-[1] h-full w-full opacity-0 transition-opacity duration-700"
    />
  );
}

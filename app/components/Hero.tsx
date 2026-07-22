import Image from "next/image";
import PlayBadge from "./PlayBadge";

// Product showcase — three real in-app captures fanned behind the pitch.
// Only the centre phone shows on mobile; the flanks fan out from sm: up.
const phones = [
  { src: "/screenshots/screen-craving.png", side: "left" as const },
  { src: "/screenshots/screen-home.png", side: "center" as const },
  { src: "/screenshots/screen-milestones.png", side: "right" as const },
];

const trust = ["Free to start", "No account needed", "Your data stays on device"];

const frameBySide = {
  center: "relative z-10 w-[228px] shrink-0 sm:w-[250px]",
  left: "hidden shrink-0 -mr-14 w-[184px] -rotate-[7deg] translate-y-9 opacity-95 sm:block",
  right: "hidden shrink-0 -ml-14 w-[184px] rotate-[7deg] translate-y-9 opacity-95 sm:block",
};

export default function Hero() {
  return (
    <section
      id="get"
      className="relative isolate overflow-hidden px-6 pt-10 text-center sm:pt-24"
    >
      {/* Breathing aqua orb — the app's "air" motif, same as the craving tool. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-4 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-clear/20 blur-3xl animate-breathe"
      />

      <div className="mx-auto max-w-3xl">
        <div className="animate-fade-up">
          <Image
            src="/clearway-icon.png"
            alt="Clearway"
            width={88}
            height={88}
            priority
            className="mx-auto rounded-[24px] glow-clear"
          />
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-muted animate-fade-up sm:text-sm">
          The quit-vaping companion
        </p>

        <h1 className="mt-3 font-display text-[3.25rem] font-bold leading-[0.95] tracking-tight animate-fade-up sm:mt-4 sm:text-8xl">
          <span className="bg-gradient-to-b from-ink to-clear bg-clip-text text-transparent">
            Clearway
          </span>
        </h1>

        <p className="mt-4 font-display text-xl font-semibold text-clear animate-fade-up sm:mt-6 sm:text-3xl [text-shadow:0_0_44px_rgba(91,224,198,0.4)]">
          The air clears from here.
        </p>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted animate-fade-up sm:mt-5 sm:text-lg">
          Quit vaping, one cleared breath at a time. No lectures. No shame.
        </p>

        <div className="mt-7 flex flex-col items-center gap-4 animate-fade-up sm:mt-9 sm:gap-5">
          <PlayBadge />
          <ul className="flex flex-wrap items-center justify-center gap-2.5 text-sm text-muted">
            {trust.map((t) => (
              <li
                key={t}
                className="rounded-full border border-line bg-surface/60 px-3.5 py-1.5"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Fanned phones — the product, front and centre. */}
      <div className="relative mx-auto mt-9 flex max-w-3xl items-end justify-center animate-fade-up sm:mt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-8 -z-10 mx-auto h-[460px] w-[460px] max-w-full rounded-full bg-clear/15 blur-[130px]"
        />
        {phones.map((p) => (
          <div key={p.src} className={frameBySide[p.side]}>
            <div className="overflow-hidden rounded-[32px] border border-line bg-surface p-2 shadow-[0_40px_100px_-28px_rgba(0,0,0,0.8)]">
              <div className="overflow-hidden rounded-[26px] bg-base">
                <Image
                  src={p.src}
                  alt=""
                  width={500}
                  height={1008}
                  className="h-auto w-full"
                  sizes="250px"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

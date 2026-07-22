import Image from "next/image";

// Real in-app captures (premium), portrait 1080×2178 PNGs in /public/screenshots.
// next/image handles sizing/optimization; the phone frame styling stays on-brand.
const shots = [
  { src: "/screenshots/screen-home.png", label: "Your streak, clearing" },
  { src: "/screenshots/screen-craving.png", label: "The craving orb" },
  { src: "/screenshots/screen-milestones.png", label: "Milestones ahead" },
  { src: "/screenshots/screen-recovery.png", label: "Your body, healing" },
];

export default function Screenshots() {
  return (
    <section id="screenshots" className="mx-auto max-w-content px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Built to open at the worst moments
        </h2>
        <p className="mt-4 text-lg text-muted">
          Designed dark-first for 2 a.m. cravings — calm, clear, and always on
          your side.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
        {shots.map((s) => (
          <figure key={s.src} className="flex flex-col items-center">
            <div className="relative w-full max-w-[240px] overflow-hidden rounded-[32px] border border-line bg-surface p-2 shadow-[0_34px_90px_-24px_rgba(0,0,0,0.7)]">
              <div className="overflow-hidden rounded-[26px] bg-base">
                <Image
                  src={s.src}
                  alt={s.label}
                  width={540}
                  height={1089}
                  className="h-auto w-full"
                  sizes="(max-width: 640px) 45vw, 240px"
                />
              </div>
            </div>
            <figcaption className="mt-4 text-sm text-muted">{s.label}</figcaption>
          </figure>
        ))}
      </div>

      {/* Home-screen widget — progress you never have to open the app for. */}
      <div className="mx-auto mt-20 max-w-3xl">
        <div className="mx-auto max-w-xl text-center">
          <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Your progress, without opening the app
          </h3>
          <p className="mt-3 text-lg text-muted">
            Drop the Clearway widget on your home screen — streak, money saved,
            and your next milestone, always in view.
          </p>
        </div>

        <figure className="mx-auto mt-10 max-w-[360px]">
          <div className="overflow-hidden rounded-[36px] border border-line bg-surface p-2 shadow-[0_34px_90px_-24px_rgba(0,0,0,0.7)]">
            <Image
              src="/screenshots/widget-home.png"
              alt="Clearway widget on an Android home screen: 9 days clear, $26 saved, and the next milestone"
              width={540}
              height={679}
              className="h-auto w-full rounded-[28px]"
              sizes="(max-width: 640px) 80vw, 360px"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}

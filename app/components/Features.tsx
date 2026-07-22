const features = [
  {
    title: "Watch the air clear",
    body: "A live streak sits inside a clearing atmosphere — the longer you stay vape-free, the more the haze lifts and the air deepens. Your progress, felt not lectured.",
    icon: (
      <>
        <circle cx="12" cy="12" r="7" />
        <path d="M12 5v2M12 17v2M5 12h2M17 12h2" />
      </>
    ),
  },
  {
    title: "See the money come back",
    body: "Every clean day adds up in real numbers. Watch what you're saving stack toward the things you'd rather spend it on.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v8M9.5 9.5a2.5 2 0 0 1 5 0c0 2.5-5 1.5-5 4a2.5 2 0 0 0 5 0" />
      </>
    ),
  },
  {
    title: "Somewhere to go when it hits",
    body: "A craving breathing tool — a slow 4-7-8 orb made of the same calm air. Open it at 2 a.m., breathe, and let the wave pass.",
    icon: (
      <>
        <path d="M12 3c4 4 6 6.5 6 10a6 6 0 0 1-12 0c0-3.5 2-6 6-10Z" />
      </>
    ),
  },
  {
    title: "Encouragement on your reasons",
    body: "A personalized daily nudge tied to the reasons you chose to quit. Calm, specific, always forward-looking — never a guilt trip.",
    icon: (
      <>
        <path d="M4 6h16v10H8l-4 4z" />
        <path d="M8 10h8M8 13h5" />
      </>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-content px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          A calm, capable friend — not a coach yelling
        </h2>
        <p className="mt-4 text-lg text-muted">
          Everything stays quiet so the one thing that matters lands: feeling
          your progress strongly enough to protect it.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-card border border-line bg-surface/70 p-7 transition-colors hover:border-clear/40"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-[13px] border border-line bg-base">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5BE0C6"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {f.icon}
              </svg>
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-ink">
              {f.title}
            </h3>
            <p className="mt-2.5 leading-relaxed text-muted">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

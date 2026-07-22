// Official-style "Get it on Google Play" badge, rebuilt inline as SVG so it
// stays crisp and self-contained (no external asset). Swap PLAY_STORE_URL for
// the real store listing after publishing.
const PLAY_STORE_URL = "#";

export default function PlayBadge() {
  return (
    <a
      href={PLAY_STORE_URL}
      aria-label="Get it on Google Play"
      className="inline-flex items-center gap-3 rounded-[14px] border border-line/80 bg-black px-5 py-3 transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clear"
    >
      <svg
        width="26"
        height="28"
        viewBox="0 0 512 512"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M47 24.3c-4.2 4.5-6.6 11.4-6.6 20.4v422.6c0 9 2.4 15.9 6.6 20.4l1.4 1.3 236.7-236.7v-5.6L48.4 23z"
          fill="#00D3FF"
        />
        <path
          d="M363.6 347.3l-78.9-79v-5.6l79-79 1.7 1 93.5 53.1c26.7 15.2 26.7 40 0 55.2l-93.5 53.2z"
          fill="#FFCE00"
        />
        <path
          d="M365.3 346.3l-80.6-80.6L47 503.3c8.8 9.3 23.3 10.5 39.7 1.2l278.6-158.2"
          fill="#FF3C4C"
        />
        <path
          d="M365.3 185.2L86.7 27C70.3 17.7 55.8 18.9 47 28.2l237.7 237.5z"
          fill="#00F076"
        />
      </svg>
      <span className="flex flex-col leading-none text-left">
        <span className="text-[10px] uppercase tracking-wide text-white/80">
          Get it on
        </span>
        <span className="font-body text-lg font-semibold text-white">
          Google Play
        </span>
      </span>
    </a>
  );
}

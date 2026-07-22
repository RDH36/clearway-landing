import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/60 bg-base/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/clearway-icon.png"
            alt="Clearway"
            width={32}
            height={32}
            className="rounded-lg"
            priority
          />
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            Clearway
          </span>
        </Link>
        <div className="flex items-center gap-6 text-sm text-muted">
          <a href="/#features" className="hidden transition-colors hover:text-ink sm:inline">
            Features
          </a>
          <a href="/#screenshots" className="hidden transition-colors hover:text-ink sm:inline">
            Screenshots
          </a>
          <a
            href="/#get"
            className="rounded-button bg-clear px-4 py-2 font-body font-semibold text-base transition-transform hover:scale-[1.03]"
          >
            Get the app
          </a>
        </div>
      </nav>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";
import PlayBadge from "./PlayBadge";

export default function Footer() {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto max-w-content px-6 py-16">
        <div className="rounded-card border border-line bg-surface/60 p-10 text-center">
          <h2 className="font-display text-3xl font-semibold text-ink">
            The air clears from here.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted">
            Start your first cleared breath today. Free to start, no account
            needed.
          </p>
          <div className="mt-8 flex justify-center">
            <PlayBadge />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/clearway-icon.png"
              alt="Clearway"
              width={28}
              height={28}
              className="rounded-lg"
            />
            <span className="font-display font-bold tracking-tight text-ink">
              Clearway
            </span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
            <Link href="/privacy" className="transition-colors hover:text-ink">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-ink">
              Terms of Service
            </Link>
            <a
              href="mailto:raymond.dzeryhago36@gmail.com"
              className="transition-colors hover:text-ink"
            >
              Contact
            </a>
          </nav>

          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Clearway
          </p>
        </div>
      </div>
    </footer>
  );
}

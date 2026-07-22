import Link from "next/link";
import Nav from "./Nav";
import Footer from "./Footer";

// Shared shell for /privacy and /terms — consistent prose styling in the
// Clearway voice: calm, plain, sentence case. Uses [&_*] selectors so pages
// can pass plain semantic HTML without repeating utility classes.
export default function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <Link href="/" className="text-sm text-clear hover:underline">
          ← Back to Clearway
        </Link>
        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink">
          {title}
        </h1>
        <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>

        <div
          className="mt-10 space-y-5 leading-relaxed text-muted
            [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-ink
            [&_h3]:mt-6 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-ink
            [&_a]:text-clear [&_a]:underline
            [&_strong]:text-ink [&_strong]:font-semibold
            [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6
            [&_li]:marker:text-clear"
        >
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}

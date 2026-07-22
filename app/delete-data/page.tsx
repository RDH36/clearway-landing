import type { Metadata } from "next";
import Image from "next/image";
import LegalShell from "../components/LegalShell";

export const metadata: Metadata = {
  title: "Delete your data",
  description:
    "How to permanently delete your Clearway data. Everything is stored on your device — you can wipe it in two taps from the app, or by uninstalling.",
  alternates: { canonical: "/delete-data" },
};

const shots = [
  {
    src: "/guide/delete-settings.png",
    alt: "Clearway settings, About section, with the Delete my data option at the bottom",
    caption: "Settings → About → Delete my data",
  },
  {
    src: "/guide/delete-confirm.png",
    alt: "Clearway confirmation sheet: Delete my data? Delete everything or Keep my data",
    caption: "Confirm with Delete everything",
  },
];

export default function DeleteDataPage() {
  return (
    <LegalShell title="Delete your data" updated="July 22, 2026">
      <p>
        Clearway keeps everything on your device — there are no accounts and no
        server holding a profile about you. That means <strong>you</strong> can
        erase your data at any time, directly from the app. Here&rsquo;s how.
      </p>

      <h2>Delete everything from inside the app</h2>
      <ol className="list-decimal space-y-3 pl-6 marker:font-semibold marker:text-clear">
        <li>Open the Clearway app.</li>
        <li>
          Tap the <strong>settings</strong> icon in the top-left corner of the
          home screen.
        </li>
        <li>
          Scroll to the bottom, to the <strong>About</strong> section.
        </li>
        <li>
          Tap <strong>Delete my data</strong>.
        </li>
        <li>
          Confirm by tapping <strong>Delete everything</strong>.
        </li>
      </ol>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:max-w-md">
        {shots.map((s) => (
          <figure key={s.src} className="flex flex-col items-center">
            <div className="overflow-hidden rounded-[24px] border border-line bg-surface p-1.5">
              <Image
                src={s.src}
                alt={s.alt}
                width={400}
                height={806}
                className="h-auto w-full rounded-[18px]"
                sizes="(max-width: 640px) 45vw, 220px"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-muted">
              {s.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <h2>What gets deleted</h2>
      <p>
        This permanently wipes your <strong>quit date</strong>, your{" "}
        <strong>streak record</strong>, your <strong>reasons</strong>, and your{" "}
        <strong>settings</strong> from the device.{" "}
        <strong>There is no undo</strong>, so only do this if you&rsquo;re sure.
      </p>

      <h2>Prefer to just uninstall?</h2>
      <p>
        Uninstalling Clearway also removes all of its on-device data. Once the
        app is gone, so is the local storage that held your progress — nothing is
        left behind on a server, because it was never there.
      </p>

      <h2>Analytics and purchase data</h2>
      <p>
        Beyond your on-device data, two providers process a limited amount of
        information on our behalf: <strong>PostHog</strong> (anonymous, aggregated
        usage events) and <strong>RevenueCat</strong> / <strong>Google Play</strong>{" "}
        (your subscription status and purchase records). This data isn&rsquo;t
        removed by the in-app delete. To request its deletion, email us at the
        address below and we&rsquo;ll take care of it.
      </p>

      <h2>Contact</h2>
      <p>
        Need help deleting your data, or want us to remove the analytics and
        purchase records tied to you? Email{" "}
        <a href="mailto:raymond.dzeryhago36@gmail.com">
          raymond.dzeryhago36@gmail.com
        </a>{" "}
        and we&rsquo;ll respond as soon as we can.
      </p>
    </LegalShell>
  );
}

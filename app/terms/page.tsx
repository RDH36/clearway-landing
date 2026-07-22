import type { Metadata } from "next";
import LegalShell from "../components/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms for using Clearway, a freemium quit-vaping app with optional subscriptions.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service" updated="July 22, 2026">
      <p>
        These terms are an agreement between you and Clearway (&ldquo;we,&rdquo;
        &ldquo;us&rdquo;) for your use of the Clearway mobile app (the
        &ldquo;App&rdquo;). By downloading or using the App, you agree to them. If
        you don&rsquo;t agree, please don&rsquo;t use the App.
      </p>

      <h2>What Clearway is</h2>
      <p>
        Clearway is a self-help tool that helps you quit vaping and nicotine by
        tracking your progress, showing money saved, and offering a craving
        breathing exercise. <strong>It is not medical advice</strong> and is not a
        substitute for professional care. If you have health concerns, talk to a
        qualified healthcare provider.
      </p>

      <h2>Using the App</h2>
      <p>
        You may use the App for your own personal, non-commercial use. You agree
        not to misuse it — for example, by attempting to reverse-engineer,
        disrupt, or copy it beyond what the law allows. The App works offline and
        stores your progress locally on your device.
      </p>

      <h2>Free and premium features</h2>
      <p>
        Clearway is free to start and includes a genuinely useful core. Some
        features are offered through an optional paid subscription
        (&ldquo;Premium&rdquo;).
      </p>

      <h2>Subscriptions, billing, and free trials</h2>
      <ul>
        <li>
          Premium is sold as an auto-renewing subscription (for example monthly
          or annual) and may also be offered as a one-time lifetime purchase.
        </li>
        <li>
          Purchases are processed through <strong>Google Play</strong> and managed
          via <strong>RevenueCat</strong>. Your Google Play account is charged at
          confirmation.
        </li>
        <li>
          If a <strong>free trial</strong> is offered, you won&rsquo;t be charged
          during the trial. It converts to a paid subscription unless you cancel
          before it ends.
        </li>
        <li>
          Subscriptions <strong>renew automatically</strong> at the then-current
          price unless you turn off auto-renew at least 24 hours before the period
          ends.
        </li>
        <li>
          You can manage or cancel your subscription any time in your Google Play
          account settings.
        </li>
      </ul>

      <h2>Refunds</h2>
      <p>
        Payments are handled by Google Play, so refunds are subject to{" "}
        <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noreferrer">
          Google Play&rsquo;s refund policy
        </a>
        . Where required by law, your statutory rights are not affected.
      </p>

      <h2>Your content</h2>
      <p>
        The reasons, notes, and settings you enter belong to you and stay on your
        device. You are responsible for the accuracy of what you enter (such as
        your quit date and weekly spend), which drives the numbers the App shows.
      </p>

      <h2>Feedback</h2>
      <p>
        If you send us feedback through the App, you grant us permission to store
        and use it to improve Clearway. Feedback messages are stored in our
        database, hosted by <strong>Supabase</strong>. Please don&rsquo;t include
        sensitive personal information in a feedback message.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The App, its design, name, and content are owned by us and protected by
        law. These terms don&rsquo;t grant you any rights to our trademarks or
        branding.
      </p>

      <h2>Disclaimers</h2>
      <p>
        The App is provided <strong>&ldquo;as is&rdquo;</strong> without
        warranties of any kind. We don&rsquo;t promise the App will be
        error-free, uninterrupted, or that it will achieve any particular result.
        Quitting is personal, and outcomes vary.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, we are not liable for any
        indirect, incidental, or consequential damages arising from your use of
        the App. Nothing in these terms limits liability that cannot be limited by
        law.
      </p>

      <h2>Changes and termination</h2>
      <p>
        We may update the App and these terms from time to time; we&rsquo;ll
        revise the date above when we do. We may also stop offering the App or
        certain features. You can stop using the App at any time by uninstalling
        it.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Email us at{" "}
        <a href="mailto:raymond.dzeryhago36@gmail.com">
          raymond.dzeryhago36@gmail.com
        </a>
        .
      </p>
    </LegalShell>
  );
}

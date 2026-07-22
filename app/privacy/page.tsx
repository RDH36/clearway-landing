import type { Metadata } from "next";
import LegalShell from "../components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Clearway handles your data: everything is stored locally on your device. No accounts, no server. GDPR-friendly.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="July 22, 2026">
      <p>
        Clearway is built around a simple promise: your journey is yours. This
        policy explains, in plain terms, what happens to your information when
        you use the Clearway mobile app (the &ldquo;App&rdquo;).
      </p>

      <h2>The short version</h2>
      <ul>
        <li>
          <strong>Everything you enter stays on your device.</strong> Your quit
          date, streak, weekly spend, reasons, and progress are stored locally.
        </li>
        <li>
          <strong>There are no accounts.</strong> You don&rsquo;t sign up, and we
          don&rsquo;t hold a profile about you on a server.
        </li>
        <li>
          <strong>We don&rsquo;t sell your data.</strong> Ever.
        </li>
      </ul>

      <h2>Data stored on your device</h2>
      <p>
        The information that makes the App work — the moment you stopped, your
        live streak, money saved, milestones, your personal reasons, and your
        settings — is saved only in the App&rsquo;s local storage on your phone.
        It never leaves your device through us, and we cannot see it. If you
        uninstall the App or use its &ldquo;delete my data&rdquo; option, this
        information is gone.
      </p>

      <h2>Analytics</h2>
      <p>
        To understand how the App is used and to improve it, we use{" "}
        <strong>PostHog</strong>, a product-analytics service. This collects
        anonymous, aggregated usage events — for example, which screens are
        opened or whether a feature is used — along with basic technical data
        such as app version, device type, and operating system. It is not tied
        to your identity, and we do not use it to build an advertising profile of
        you. You can learn more at{" "}
        <a href="https://posthog.com/privacy" target="_blank" rel="noreferrer">
          posthog.com/privacy
        </a>
        .
      </p>

      <h2>Feedback you send us</h2>
      <p>
        If you choose to send feedback from the app (Settings &rarr; Send
        feedback), the message you write — and any contact detail you decide to
        include — is sent to us and stored in our database, which is hosted by{" "}
        <strong>Supabase</strong>. We use it only to read your feedback and
        improve Clearway. This is the one piece of information that leaves your
        device, and only when you deliberately send it. See{" "}
        <a href="https://supabase.com/privacy" target="_blank" rel="noreferrer">
          Supabase&rsquo;s privacy policy
        </a>{" "}
        for how they process data on our behalf.
      </p>

      <h2>Purchases and subscriptions</h2>
      <p>
        Clearway offers optional premium features through a subscription. Payments
        are processed by <strong>Google Play Billing</strong>, and subscriptions
        are managed on our behalf by <strong>RevenueCat</strong>. When you buy or
        restore a purchase, these services process the information needed to
        complete and verify the transaction (such as a purchase token and your
        subscription status). We never receive or store your full payment card
        details. See{" "}
        <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noreferrer">
          RevenueCat&rsquo;s privacy policy
        </a>{" "}
        and{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
          Google&rsquo;s privacy policy
        </a>{" "}
        for details.
      </p>

      <h2>Notifications</h2>
      <p>
        If you allow them, the App sends local notifications (daily
        encouragement, milestone and streak nudges) directly from your device.
        You can turn these off any time in the App&rsquo;s settings or your
        phone&rsquo;s system settings.
      </p>

      <h2>Your rights (GDPR &amp; similar)</h2>
      <p>
        Because your personal progress data lives on your device, you are in
        control of it at all times — you can view, edit, or delete it from within
        the App. For the limited data processed by our analytics and billing
        providers, you have the right to access, correct, or request deletion of
        your information. To make a request, contact us at the email below and we
        will help.
      </p>

      <h2>Children</h2>
      <p>
        Clearway is intended for adults who are quitting vaping or nicotine. It is
        not directed at children under the age required to hold an account in your
        country, and we do not knowingly collect their data.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If we change how the App handles data, we&rsquo;ll update this page and
        revise the date above. Continued use of the App after a change means you
        accept the updated policy.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about privacy? Email us at{" "}
        <a href="mailto:raymond.dzeryhago36@gmail.com">
          raymond.dzeryhago36@gmail.com
        </a>
        .
      </p>
    </LegalShell>
  );
}

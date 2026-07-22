import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Smoke from "./components/atmosphere/Smoke";

// Fonts straight from the app: Bricolage Grotesque (display/headings),
// Hanken Grotesk (body/UI). Exposed as CSS variables for Tailwind.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://clearway.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Clearway — Quit vaping, one cleared breath at a time",
    template: "%s · Clearway",
  },
  description:
    "The air clears from here. Quit vaping with a live streak, money saved, and a craving breathing tool. No lectures. No shame. All data stays on your device.",
  keywords: [
    "quit vaping",
    "stop vaping",
    "quit nicotine",
    "vape free",
    "craving tool",
    "streak tracker",
  ],
  applicationName: "Clearway",
  authors: [{ name: "Clearway" }],
  alternates: { canonical: "/" },
  icons: {
    icon: "/clearway-icon.png",
    apple: "/clearway-icon.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Clearway",
    title: "Clearway — The air clears from here",
    description:
      "Quit vaping, one cleared breath at a time. Live streak, money saved, and a craving breathing tool. No lectures. No shame.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clearway — quit vaping app",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clearway — The air clears from here",
    description:
      "Quit vaping, one cleared breath at a time. No lectures. No shame.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0E1B1F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${hanken.variable}`}>
      <body>
        <div className="atmosphere" aria-hidden="true" />
        {/* Real Skia (CanvasKit/WASM) vapor — a full-screen fixed backdrop
            behind all content, above the CSS atmosphere. */}
        <Smoke />
        {children}
      </body>
    </html>
  );
}

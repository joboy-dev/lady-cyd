import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Cormorant_Garamond, Cinzel, DM_Sans, Great_Vibes } from "next/font/google";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cinzel-var",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cyd Alex-Emenike — Trauma-Informed Coach & Generational Restoration Guide",
  description:
    "Lady Cyd is a Trauma-Informed Certified Coach and Family Systems Strategist helping high-capacity women rebuild their identity, restore their family systems, and build generational legacies.",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    title: "Cyd Alex-Emenike — Trauma-Informed Coach & Generational Restoration Guide",
    description:
      "I guide high-capacity women through the sacred, structured work of identity restoration, trauma healing, and generational rebuilding.",
    url: "https://ladycyd.online",
    siteName: "Lady Cyd",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <html lang="en">
        <body
          className={`${cormorantGaramond.variable} ${cinzel.variable} ${dmSans.variable} ${greatVibes.variable} bg-background antialiased`}
          style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
        >
          {children}
        </body>
      </html>
    </>
  );
}

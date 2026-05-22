import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Cormorant_Garamond, Cinzel, DM_Sans, Great_Vibes } from "next/font/google";
import StructuredData from "@/components/shared/StructuredData";
import ThemeProvider from "@/components/shared/ThemeProvider";

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
  title: "Lady Cyd — Trauma-Informed Coach Nigeria | Christian Life Coach Africa",
  description:
    "Certified trauma-informed coach and family systems strategist helping high-capacity women in Nigeria and Africa break generational cycles, restore identity, and heal family trauma through Christian Kingdom coaching.",
  keywords: [
    "trauma-informed coach Nigeria",
    "Christian life coach Africa",
    "generational healing coach",
    "identity restoration coach",
    "family systems coach Africa",
    "trauma coach for women",
    "Kingdom coach for women",
    "soul restoration coach",
    "Lady Cyd coach",
    "Cyd Chioma Alex-Emenike",
  ],
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    title: "Lady Cyd — Trauma-Informed Coach Nigeria | Generational Healing & Identity Restoration",
    description:
      "Trauma-informed certified coach for women in Nigeria & Africa. Break generational cycles, restore identity, heal family systems through Christian coaching.",
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
      <html lang="en" suppressHydrationWarning>
        <head>
          <StructuredData />
          {/* Anti-flash: apply stored theme before first paint */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(){try{var p=JSON.parse(localStorage.getItem('lady-cyd-preferences'));var t=p&&p.state&&p.state.theme;document.documentElement.classList.toggle('dark',t!=='light')}catch(e){document.documentElement.classList.add('dark')}})()`,
            }}
          />
        </head>
        <body
          className={`${cormorantGaramond.variable} ${cinzel.variable} ${dmSans.variable} ${greatVibes.variable} bg-background antialiased`}
          style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
        >
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}

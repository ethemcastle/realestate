import type { Metadata } from "next";
import Script from "next/script";
import {
  Geist,
  Geist_Mono,
  Fraunces,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Meridian landing-page typography
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "real estate",
    "homes for sale",
    "homes for rent",
    "property listings",
    "luxury homes",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-slate-900">
        {children}
        {/* Ybug feedback widget (https://ybug.io) — lets visitors report bugs /
            leave feedback; each submission becomes a ticket on the Cadence board. */}
        <Script id="ybug-feedback" strategy="afterInteractive">
          {`(function () {
            window.ybug_settings = { id: "8m648avjdpy3zzvf7v67" };
            var ybug = document.createElement('script');
            ybug.type = 'text/javascript';
            ybug.async = true;
            ybug.src = 'https://widget.ybug.io/button/' + window.ybug_settings.id + '.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(ybug, s);
          })();`}
        </Script>
      </body>
    </html>
  );
}

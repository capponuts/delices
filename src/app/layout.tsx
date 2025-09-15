import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

function resolveMetadataBase(): URL {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined,
  ].filter(Boolean) as string[];

  for (const value of candidates) {
    const withScheme = value.startsWith("http") ? value : `https://${value}`;
    try {
      return new URL(withScheme);
    } catch {
      // try next candidate
    }
  }
  return new URL("https://delices-et-services.fr");
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: resolveMetadataBase(),
  title: {
    default: "Délices & Services — Livraison de repas à domicile",
    template: "%s | Délices & Services",
  },
  description:
    "Livraison de repas à domicile: menus équilibrés, flexibles et savoureux. Service rapide, fiable et humain dans votre ville.",
  keywords: [
    "livraison de repas",
    "repas à domicile",
    "portage de repas",
    "plats cuisinés",
    "traiteur",
    "repas seniors",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Délices & Services — Livraison de repas à domicile",
    description:
      "Livraison de repas à domicile: menus équilibrés, flexibles et savoureux.",
    url: "/",
    siteName: "Délices & Services",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Plateaux de repas colorés et équilibrés",
      },
    ],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Délices & Services",
    description:
      "Livraison de repas à domicile: menus équilibrés, flexibles et savoureux.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/Delices-et-services0.png",
    apple: "/Delices-et-services0.png",
    shortcut: "/Delices-et-services0.png",
  },
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

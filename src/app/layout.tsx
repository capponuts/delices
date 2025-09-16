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
        url: "/og-image.png",
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
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ||
    "https://delices-et-services.fr";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodDelivery",
    name: "Délices & Services",
    legalName: "EURL D&S Littoral",
    url: siteUrl,
    image: `${siteUrl}/og-image.png`,
    telephone: "+33251900116",
    email: "contact@delices-et-services.fr",
    address: {
      "@type": "PostalAddress",
      addressCountry: "FR",
      addressLocality: "Les Sables-d'Olonne",
      addressRegion: "Pays de la Loire",
    },
    areaServed: [
      { "@type": "City", name: "Les Sables-d'Olonne" },
      { "@type": "City", name: "Olonne-sur-Mer" },
      { "@type": "City", name: "Château-d'Olonne" },
      { "@type": "AdministrativeArea", name: "Pays des Olonnes" },
    ],
    sameAs: ["https://www.facebook.com/delices.services"],
    priceRange: "€€",
    slogan: "Portage de repas à domicile — Pays des Olonnes",
    foundingDate: "2014",
  };
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gustavomartinez.dev"),
  title: {
    default: "Gustavo Martinez — Desarrollador Web en Aguascalientes, México",
    template: "%s | Gustavo Martinez",
  },
  description:
    "Desarrollador web en Aguascalientes, México. Creo sitios rápidos, modernos y orientados a resultados. Desde landing pages hasta aplicaciones complejas.",
  keywords: [
    "desarrollador web",
    "Aguascalientes",
    "México",
    "sitios web",
    "landing pages",
    "desarrollo web",
  ],
  authors: [{ name: "Gustavo Martinez" }],
  creator: "Gustavo Martinez",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://gustavomartinez.dev",
    siteName: "Gustavo Martinez — Portafolio",
    title: "Gustavo Martinez — Desarrollador Web",
    description:
      "Desarrollador web en Aguascalientes, México. Sitios rápidos, modernos y orientados a resultados.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gustavo Martinez — Desarrollador Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gustavo Martinez — Desarrollador Web",
    description:
      "Desarrollador web en Aguascalientes, México. Sitios rápidos, modernos y orientados a resultados.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leśna Pracownia",
  description:
    "Własnoręcznie robione akcesoria z kamieni naturalnych i szlachetnych",
  applicationName: "Leśna Pracownia",
  keywords: [
    "biżuteria",
    "rękodzieło",
    "kamienie naturalne",
    "własnoręcznie robione",
    "bransoletki",
    "kamienie naturalne",
    "kamienie szlachetne",
  ],
  creator: "Dawid Strużyński",
  authors: [{ name: "Dawid Strużyński" }],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        rel: 'icon', 
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'theme-color': '#000000',
    'msapplication-TileColor': '#000000',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

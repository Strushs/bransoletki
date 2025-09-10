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

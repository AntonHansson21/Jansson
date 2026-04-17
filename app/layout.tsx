import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Regmyr & Jansson El AB – Elektriker i Dalarna",
  description:
    "Certifierade elektriker för hem och företag. Elinstallation, felsökning, belysning och mer. Ring oss idag.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${barlowCondensed.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased bg-charcoal text-white">
        {children}
      </body>
    </html>
  );
}

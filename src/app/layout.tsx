import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Crimson_Pro } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  fallback: ["system-ui", "sans-serif"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "UNSW Tabletop Games Society",
  description: "The Official Website for the UNSW Tabletop Games Society",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${crimsonPro.className} antialiased overflow-x-hidden text-lg`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

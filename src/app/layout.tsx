import type { Metadata } from "next";
import { Inter, DM_Serif_Text } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Cursor from "@/components/ui/Cursor";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSerifText = DM_Serif_Text({
  variable: "--font-dm-serif-text",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Nestick Tech College",
  description:
    "Official portfolio and academic overview of Nestick Tech College — shaping the next generation of innovators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSerifText.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-stone-50 text-stone-900 selection:bg-navy/10">
        <Cursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

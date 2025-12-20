import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David V Onquit - Solopreneur & Mobile App Developer",
  description: "Building complete mobile solutions from scratch. Started coding at 52, now 57 with 2 apps live on App Store.",
  keywords: ["mobile app developer", "React Native", "Expo", "Firebase", "solopreneur", "iOS", "Android"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


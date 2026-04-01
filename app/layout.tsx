import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import InteractiveBackground from "./components/layout/InteractiveBackground";
import { LanguageProvider } from "./components/providers/LanguageContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./globals.css";
import LenisProvider from "./components/providers/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MELBET MENA | Global partner network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative flex min-h-screen flex-col overflow-x-hidden text-white antialiased`}
      >
        <LenisProvider>
          <LanguageProvider>
            <InteractiveBackground />
            <Header />

            <main className="relative z-10 flex flex-1 flex-col">
              {children}
            </main>

            <Footer />
          </LanguageProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
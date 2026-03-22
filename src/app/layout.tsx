import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, Syne } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700", "800"],
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Vibe Coding Playground",
  description:
    "Интерактивный showcase: анимации, Three.js, glassmorphism и отзывчивый layout.",
  openGraph: {
    title: "Vibe Coding Playground",
    description: "Vibe Coding Playground — showcase на Next.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${space.className} ${space.variable} ${syne.variable} min-h-screen bg-bg-base text-text-primary antialiased`}
      >
        <AppProviders>
          <Navbar />
          <main>{children}</main>
        </AppProviders>
      </body>
    </html>
  );
}

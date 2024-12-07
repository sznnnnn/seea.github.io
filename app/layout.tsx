import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Portfolio",
  description: "Your portfolio description",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={syne.className}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
} 
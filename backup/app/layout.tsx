import "./globals.css";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({ subsets: ["latin"] });

export const metadata = {
  title: "Your Name - Frontend Developer",
  description: "Frontend Developer specializing in React and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={syne.className}>
      <body className="scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]">
        {children}
        <Analytics />
      </body>
    </html>
  );
} 
import "./globals.css";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Your Name — Frontend Developer",
  description: "Frontend Developer and Web Designer. Focused on creating beautiful and functional web experiences.",
  openGraph: {
    title: "Your Name — Frontend Developer",
    description: "Frontend Developer and Web Designer",
    url: "https://sznnnnn.github.io/seea.github.io/",
    siteName: "Your Portfolio",
    images: [
      {
        url: "your-og-image-url",
        width: 1200,
        height: 630,
        alt: "Your Name — Frontend Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

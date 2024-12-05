import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Seea Liu — Frontend Developer",
  description:
    "Frontend Developer and Web Designer. Focused on creating elegant and efficient web experiences.",
  generator: "Next.js",
  applicationName: "Seea Liu",
  keywords: [
    "freelance",
    "developer",
    "frontend",
    "react",
    "frontend developer",
    "creative",
    "creative developer",
    "tech",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Seea Liu — Frontend Developer",
    description:
      "Frontend Developer and Web Designer. Focused on creating elegant and efficient web experiences.",
    url: "https://sznnnnn.github.io/seea.github.io/",
    siteName: "Seea Liu Portfolio",
    images: [
      {
        url: "profile.jpg",
        width: 1200,
        height: 630,
        alt: "Seea Liu — Frontend Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seea Liu — Frontend Developer",
    description:
      "Frontend Developer and Web Designer. Focused on creating elegant and efficient web experiences.",
    creator: "SeeaXin",
    images: ["profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  charSet: 'utf-8',
  icons: {
    icon: '/favicon.ico',
  },
  other: {
    'x-content-type-options': 'nosniff',
    'content-security-policy': "default-src 'self'",
    'cache-control': 'public, max-age=31536000, immutable'
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="zh-CN">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </head>
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
      </body>
    </html>
  );
}

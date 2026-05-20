import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Иван Стальмахов — Freelance Fullstack Developer",
  description: "Freelance Fullstack разработчик. Python, Django, Next.js, Telegram-боты. Доступен для заказов.",
  metadataBase: new URL("https://stalmahov.ru"),
  openGraph: {
    title: "Иван Стальмахов — Freelance Fullstack Developer",
    description: "Freelance Fullstack разработчик. Python, Django, Next.js, Telegram-боты.",
    url: "https://stalmahov.ru",
    siteName: "Иван Стальмахов",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Иван Стальмахов — Freelance Fullstack Developer",
    description: "Freelance Fullstack разработчик. Python, Django, Next.js, Telegram-боты.",
    creator: "@erisuuu",
  },
  authors: [{ name: "Иван Стальмахов", url: "https://github.com/stalmahov" }],
  creator: "Иван Стальмахов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickExit from "@/components/QuickExit";
import CtaBar from "@/components/CtaBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://crimestoppersuk.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Crimestoppers – Independent UK charity taking crime information anonymously",
    template: "%s | Crimestoppers",
  },
  description:
    "Give information about crime 100% anonymously. Call 0800 555 111 or use our secure online form. We never ask your name and we never trace your call.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Crimestoppers",
    title: "Crimestoppers – Give information about crime anonymously",
    description:
      "Independent UK charity. Give information about crime 100% anonymously via phone or online. Call 0800 555 111.",
    url: siteUrl,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Crimestoppers – Fearless of crime, not of us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crimestoppers – Give information about crime anonymously",
    description:
      "Independent UK charity. 100% anonymous. Always. Call 0800 555 111 or use our secure online form.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased text-foreground bg-background">
        <Header />
        <main className="flex-1">{children}</main>
        <CtaBar />
        <Footer />
        <QuickExit />
      </body>
    </html>
  );
}

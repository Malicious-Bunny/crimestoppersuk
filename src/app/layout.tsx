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

export const metadata: Metadata = {
  title: "Crimestoppers - Independent UK charity taking crime information anonymously",
  description: "Give information about crime anonymously. 100% anonymous. Always. Call 0800 555 111.",
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

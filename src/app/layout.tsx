import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "CREAL Marketing Inc. | AI-Powered Marketing & Automation",
  description:
    "We help SMBs and startups grow with AI-powered marketing, automation, and lead generation. Based in Vancouver, BC.",
  openGraph: {
    title: "CREAL Marketing Inc.",
    description: "AI-Powered Marketing & Automation",
    url: "https://crealwork.com",
    siteName: "CREAL Marketing",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <Nav />
        <main className="pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

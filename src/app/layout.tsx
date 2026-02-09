import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sri Gnanodaya Schools | Excellence in Education",
  description: "Premier educational institution in Kanuru, offering world-class education from Pre-School to 7th Grade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} ${sourceSans.variable}`}>
      <body className="antialiased bg-white text-charcoal">
        {children}
      </body>
    </html>
  );
}

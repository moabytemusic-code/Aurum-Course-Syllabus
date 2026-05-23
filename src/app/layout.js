import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Aurum: Automated Wealth Engine Course Syllabus",
  description: "A comprehensive, high-yield guide to the Aurum platform: AI Bots, Staking, Arbitrage, and Gold RWA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased font-sans bg-background text-text-primary">
        {children}
      </body>
    </html>
  );
}

import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atul Portfolio",
  description: "All About me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="relative w-full flex items-center justify-center">
        <Navbar />
        </div>
        {children}
        <Analytics />
        </body>
    </html>
  );
}

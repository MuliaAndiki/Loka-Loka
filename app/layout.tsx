import type { Metadata } from "next";
import "./globals.css";
import LayoutClient from "./core/providers/clientProvinder";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Loka-loka",
  description: "Pusat Pembelian Tiket Event Terbesar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased bg-background text-foreground`}
      >
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}

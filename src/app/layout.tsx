import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "@/providers/auth";

const poppins = Poppins({ subsets: ["latin"], weight: ['400','500','600','700','800','900',] });

export const metadata: Metadata = {
  title: "Trips",
  description: "Sistema de reserva de viagens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}

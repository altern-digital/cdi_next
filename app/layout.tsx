import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer_section";
import { gotham } from "./fonts";

export const metadata: Metadata = {
  title: "Cahaya Desain Indonesia",
  description: "Welcoming a Smart, Beautiful, and Bright City",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gotham.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

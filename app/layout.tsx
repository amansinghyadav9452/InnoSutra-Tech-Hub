import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";
import SiteFooter from "@/components/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InnoSutra Tech Hub",
  description: "Learn. Build. Become.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppShell>{children}</AppShell>
        <SiteFooter />
      </body>
    </html>
  );
}

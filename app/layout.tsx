import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jake1.net",
  description: "User Experience Designer and Web Developer",
};

export default function Layout({ children }: { children: any }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-900 dark:text-white">
          <Header />
          <main className="flex-1 pt-20 pr-1 md:pr-0">
            <div className="container mx-auto p-4">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

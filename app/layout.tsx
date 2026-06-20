import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import BottomNav from "@/components/sidebar/BottomNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "LearnOS",
  description: "Your intelligent learning dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable} antialiased h-full`}>
      <body className="bg-learnos-background text-learnos-text h-full flex flex-col md:flex-row overflow-x-hidden">
        <Sidebar />
        <main className="flex-1 w-full flex flex-col pb-16 md:pb-0 min-h-screen">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}

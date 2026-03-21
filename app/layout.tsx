import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "bstatiker | Statik Hesaplarda Dijital Güç",
  description: "TBDY 2018 ve TS500 Uyumlu Mühendislik Çözümleri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* --- NAVBAR --- */}
        <nav className="bg-slate-900 text-white p-4 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-blue-400 tracking-tighter">
              bstatiker
            </Link>
            <div className="space-x-4 text-sm font-medium">
              <Link href="/" className="hover:text-blue-400 transition">ANA SAYFA</Link>
              <Link href="/metraj" className="hover:text-blue-400 transition">METRAJ HESAPLA</Link>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}

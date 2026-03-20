import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link"; // Sayfalar arası geçiş için şart

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "bstatiker | Statik Hesaplarda Dijital Güç",
  description: "TBDY 2018 ve TS500 uyumlu mühendislik çözümleri",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        {/* --- PROFESYONEL NAVBAR --- */}
        <nav className="bg-slate-900 text-white p-4 sticky top-0 z-50 shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-blue-400">
              bstatiker
            </Link>
            <div className="space-x-6 text-sm font-medium">
              <Link href="/" className="hover:text-blue-400 transition">ANA SAYFA</Link>
              <Link href="/metraj" className="hover:text-blue-400 transition">METRAJ HESAPLA</Link>
              <Link href="/projeler" className="hover:text-blue-400 transition">PROJELER</Link>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}

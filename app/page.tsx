"use client";
import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white font-sans">
      {/* --- KAHRAMAN BÖLÜMÜ --- */}
      <section className="relative flex flex-col items-center justify-center py-32 px-6 text-center overflow-hidden">
        {/* Arka Plan Izgarası */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div 
            className="absolute inset-0" 
            style={{ 
              backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', 
              backgroundSize: '40px 40px' 
            }}
          ></div>
        </div>

        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            bstatiker
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-12 italic text-slate-300">
            "Statik Hesaplarda Dijital Güç"
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link href="/metraj" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-105">
              Donatı Cetvelini Aç
            </Link>
            <Link href="/projeler" className="bg-transparent border-2 border-slate-700 hover:border-blue-400 text-slate-300 hover:text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all">
              Proje Portfolyosu
            </Link>
          </div>
        </div>
      </section>

      {/* --- AKTİF TEKNİK KARTLAR --- */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* TBDY 2018 Kartı */}
        <Link href="/projeler" className="group p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all hover:-translate-y-2">
          <div className="text-blue-400 text-3xl mb-4 group-hover:scale-110 transition">🏗️</div>
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400">TBDY 2018</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Türkiye Bina Deprem Yönetmeliği standartlarına uygun statik analiz süreçleri. Projeleri incelemek için tıklayın.
          </p>
        </Link>

        {/* Hızlı Metraj Kartı (Şimdi Çalışıyor!) */}
        <Link href="/metraj" className="group p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 transition-all hover:-translate-y-2 shadow-lg">
          <div className="text-emerald-400 text-3xl mb-4 group-hover:scale-110 transition">📊</div>
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400">Hızlı Metraj</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Donatı metraj cetvellerini dijital ortamda saniyeler içinde oluşturun. Hesaplayıcıya gitmek için tıklayın.
          </p>
        </Link>

        {/* Dijital Çözümler Kartı */}
        <div className="p-8 rounded-3xl bg-slate-800/50 border border-slate-700 opacity-80">
          <div className="text-slate-400 text-3xl mb-4">💻</div>
          <h3 className="text-xl font-bold mb-3 text-white text-slate-300">Dijital Mühendislik</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            Statik hesapları modernize ederek projelerinizi daha güvenilir kılıyoruz. Yakında yeni araçlar eklenecek.
          </p>
        </div>

      </section>

      {/* --- FOOTER --- */}
      <footer className="py-10 text-center text-slate-500 text-sm border-t border-slate-800">
        © 2026 bstatiker | Tüm Hakları Saklıdır.
      </footer>
    </main>
  );
}

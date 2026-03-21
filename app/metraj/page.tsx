"use client";
import React, { useState } from 'react';

const birimAgirliklar: Record<string, number> = {
  "8": 0.395, "10": 0.617, "12": 0.888, "14": 1.208, "16": 1.578, "18": 1.998, "20": 2.466, "22": 2.984, "25": 3.853, "28": 4.834, "32": 6.313
};

export default function DonatiCetveli() {
  const [cap, setCap] = useState("12");
  const [boy, setBoy] = useState("");
  const [adet, setAdet] = useState("");
  const [liste, setListe] = useState<{ id: number, cap: string, toplamMetre: number, toplamKg: number }[]>([]);

  const ekle = () => {
    if (!boy || !adet) return;
    const tMetre = parseFloat(boy) * parseInt(adet);
    const tKg = tMetre * birimAgirliklar[cap];
    setListe([...liste, { id: Date.now(), cap, toplamMetre: tMetre, toplamKg: tKg }]);
    setBoy(""); setAdet("");
  };

  const temizle = () => setListe([]);
  const toplamTonaj = liste.reduce((acc, item) => acc + item.toplamKg, 0) / 1000;

  return (
    <div className="min-h-screen p-6 md:p-12 max-w-5xl mx-auto">
      <div className="mb-10 border-l-4 border-blue-600 pl-6">
        <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tight">Donatı Cetveli</h1>
        <p className="text-slate-500 font-medium italic">Statik Proje Tonaj ve Metraj Analiz Paneli</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Veri Giriş Alanı */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 h-fit">
          <h3 className="font-bold text-slate-700 mb-6 flex items-center gap-2">
            <span>📝</span> Yeni Poz Ekle
          </h3>
          <div className="space-y-5">
            <div>
              <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Donatı Çapı (Φ)</label>
              <select value={cap} onChange={(e) => setCap(e.target.value)} className="w-full p-3 bg-slate-50 border-2 border-slate-100 rounded-xl mt-2 font-bold focus:border-blue-500 outline-none">
                {Object.keys(birimAgirliklar).map(d => <option key={d} value={d}>Φ{d}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Boy (m)</label>
                <input type="number" value={boy} onChange={(e) => setBoy(e.target.value)} className="w-full p-3 bg-slate-50 border-2 border-slate-100 rounded-xl mt-2 font-bold focus:border-blue-500 outline-none" placeholder="12.00" />
              </div>
              <div>
                <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Adet</label>
                <input type="number" value={adet} onChange={(e) => setAdet(e.target.value)} className="w-full p-3 bg-slate-50 border-2 border-slate-100 rounded-xl mt-2 font-bold focus:border-blue-500 outline-none" placeholder="1" />
              </div>
            </div>
            <button onClick={ekle} className="w-full bg-blue-600 text-white font-black py-4 rounded-2xl hover:bg-blue-700 transition-all shadow-blue-200 shadow-lg active:scale-95">
              LİSTEYE EKLE
            </button>
          </div>
        </div>

        {/* Sonuç Tablosu */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-5 text-xs font-bold uppercase tracking-widest">Donatı</th>
                  <th className="p-5 text-xs font-bold uppercase tracking-widest text-center">Toplam Metraj</th>
                  <th className="p-5 text-xs font-bold uppercase tracking-widest text-right">Ağırlık (kg)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {liste.length === 0 ? (
                  <tr><td colSpan={3} className="p-20 text-center text-slate-400 italic">Henüz donatı girişi yapılmadı.</td></tr>
                ) : (
                  liste.map(item => (
                    <tr key={item.id} className="hover:bg-blue-50 transition-colors">
                      <td className="p-5 font-black text-slate-800 text-lg">Φ{item.cap}</td>
                      <td className="p-5 text-slate-600 text-center font-medium">{item.toplamMetre.toFixed(2)} m</td>
                      <td className="p-5 text-right font-black text-blue-600 text-lg">{item.toplamKg.toFixed(2)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Özet Paneli */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl text-white shadow-xl">
              <p className="text-blue-200 text-xs font-black uppercase tracking-widest mb-2">Toplam Tonaj</p>
              <h2 className="text-5xl font-black">{toplamTonaj.toFixed(4)} <span className="text-xl font-light">TON</span></h2>
            </div>
            <div className="bg-slate-800 p-8 rounded-3xl text-white flex flex-col justify-between shadow-xl">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">Toplam Kg</p>
                  <h3 className="text-2xl font-bold">{(toplamTonaj * 1000).toFixed(1)} kg</h3>
                </div>
                <button onClick={temizle} className="text-[10px] bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white px-3 py-1 rounded-full border border-red-500/20 transition-all font-bold">TEMİZLE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useState } from 'react';

// TS500 Standart Birim Ağırlıkları (kg/m)
const birimAgirliklar: Record<string, number> = {
  "8": 0.395, "10": 0.617, "12": 0.888, "14": 1.208, 
  "16": 1.578, "18": 1.998, "20": 2.466, "22": 2.984, 
  "25": 3.853, "28": 4.834, "32": 6.313
};

export default function MetrajSayfasi() {
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
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Donatı Metraj Cetveli</h1>
          <p className="text-slate-500 italic">Hızlı hesaplama ve tonaj takibi</p>
        </div>

        {/* Veri Giriş Kartı */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Çap (Φ)</label>
            <select value={cap} onChange={(e) => setCap(e.target.value)} className="w-full p-2 border rounded-lg bg-slate-50">
              {Object.keys(birimAgirliklar).map(d => <option key={d} value={d}>Φ{d}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Boy (m)</label>
            <input type="number" value={boy} onChange={(e) => setBoy(e.target.value)} className="w-full p-2 border rounded-lg" placeholder="12" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Adet</label>
            <input type="number" value={adet} onChange={(e) => setAdet(e.target.value)} className="w-full p-2 border rounded-lg" placeholder="1" />
          </div>
          <button onClick={ekle} className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition shadow-md">Ekle</button>
        </div>

        {/* Tablo */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="p-4 text-sm font-medium">Donatı Çapı</th>
                <th className="p-4 text-sm font-medium">Toplam Uzunluk</th>
                <th className="p-4 text-sm font-medium">Ağırlık (kg)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {liste.length === 0 ? (
                <tr><td colSpan={3} className="p-8 text-center text-slate-400">Veri girişi bekleniyor...</td></tr>
              ) : (
                liste.map(item => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-700">Φ{item.cap}</td>
                    <td className="p-4 text-slate-600">{item.toplamMetre.toFixed(2)} m</td>
                    <td className="p-4 font-semibold text-blue-600">{item.toplamKg.toFixed(2)} kg</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Sonuç Özeti */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-600 p-6 rounded-2xl text-white shadow-lg">
            <p className="text-blue-100 text-xs font-bold uppercase mb-1">Toplam Tonaj</p>
            <h2 className="text-4xl font-black">{toplamTonaj.toFixed(4)} TON</h2>
          </div>
          <div className="bg-slate-800 p-6 rounded-2xl text-white shadow-lg flex justify-between items-center">
            <div>
              <p className="text-slate-400 text-xs font-bold uppercase mb-1">Toplam Ağırlık</p>
              <h2 className="text-2xl font-bold">{(toplamTonaj * 1000).toFixed(1)} kg</h2>
            </div>
            <button onClick={temizle} className="text-xs bg-red-500/20 hover:bg-red-500 text-red-200 px-3 py-1 rounded transition border border-red-500/50">Listeyi Sıfırla</button>
          </div>
        </div>
      </div>
    </div>
  );
}

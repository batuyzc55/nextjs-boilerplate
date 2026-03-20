"use client";
import React, { useState } from 'react';

// TS500 Standart Birim Ağırlıkları (kg/m)
const birimAgirliklar: Record<string, number> = {
  "8": 0.395,
  "10": 0.617,
  "12": 0.888,
  "14": 1.208,
  "16": 1.578,
  "18": 1.998,
  "20": 2.466,
  "22": 2.984,
  "25": 3.853,
  "28": 4.834,
  "32": 6.313
};

export default function MetrajHesapla() {
  const [cap, setCap] = useState("12");
  const [boy, setBoy] = useState("");
  const [adet, setAdet] = useState("");
  const [liste, setListe] = useState<{ id: number, cap: string, toplamMetre: number, toplamKg: number }[]>([]);

  const ekle = () => {
    if (!boy || !adet) return;
    const toplamMetre = parseFloat(boy) * parseInt(adet);
    const toplamKg = toplamMetre * birimAgirliklar[cap];
    
    setListe([...liste, { id: Date.now(), cap, toplamMetre, toplamKg }]);
    setBoy(""); setAdet("");
  };

  const toplamTonaj = liste.reduce((acc, item) => acc + item.toplamKg, 0) / 1000;

  return (
    <div className="p-8 max-w-4xl mx-auto bg-slate-50 rounded-xl shadow-lg border border-slate-200">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">bstatiker</h1>
      <p className="text-slate-600 mb-8 italic">"Statik Hesaplarda Dijital Güç"</p>

      {/* Giriş Alanı */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 p-6 bg-white rounded-lg border border-slate-200">
        <div>
          <label className="block text-sm font-semibold text-slate-700">Demir Çapı (Φ)</label>
          <select value={cap} onChange={(e) => setCap(e.target.value)} className="w-full p-2 border rounded mt-1">
            {Object.keys(birimAgirliklar).map(d => <option key={d} value={d}>Φ{d}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700">Boy (m)</label>
          <input type="number" value={boy} onChange={(e) => setBoy(e.target.value)} className="w-full p-2 border rounded mt-1" placeholder="Örn: 12" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700">Adet</label>
          <input type="number" value={adet} onChange={(e) => setAdet(e.target.value)} className="w-full p-2 border rounded mt-1" placeholder="Örn: 10" />
        </div>
        <button onClick={ekle} className="bg-blue-600 text-white font-bold py-2 px-4 rounded self-end hover:bg-blue-700 transition">Listeye Ekle</button>
      </div>

      {/* Tablo */}
      <table className="w-full text-left bg-white rounded-lg overflow-hidden shadow">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="p-4">Çap</th>
            <th className="p-4">Toplam Metraj</th>
            <th className="p-4">Ağırlık (kg)</th>
          </tr>
        </thead>
        <tbody>
          {liste.map(item => (
            <tr key={item.id} className="border-b hover:bg-slate-50">
              <td className="p-4 font-bold">Φ{item.cap}</td>
              <td className="p-4">{item.toplamMetre.toFixed(2)} m</td>
              <td className="p-4 text-blue-600 font-semibold">{item.toplamKg.toFixed(2)} kg</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Özet */}
      <div className="mt-8 p-6 bg-slate-900 text-white rounded-lg flex justify-between items-center">
        <span className="text-xl font-medium">Toplam Metraj Tonajı:</span>
        <span className="text-3xl font-bold text-green-400">{toplamTonaj.toFixed(4)} TON</span>
      </div>
    </div>
  );
}

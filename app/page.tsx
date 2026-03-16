import React from 'react';

export default function BStatikerHome() {
  return (
    <div style={{
      backgroundColor: '#0a0a0a',
      color: '#fff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      {/* Header / Logo Alanı */}
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: 'bold', 
          letterSpacing: '-1px',
          margin: '0' 
        }}>
          b<span style={{ color: '#00d1b2' }}>statiker</span>
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#888', 
          marginTop: '10px',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          Statik Hesaplarda Dijital Güç
        </p>
      </header>

      {/* Ana Mesaj Bölümü */}
      <main style={{
        maxWidth: '600px',
        border: '1px solid #333',
        padding: '40px',
        borderRadius: '12px',
        backgroundColor: '#111'
      }}>
        <h2 style={{ color: '#00d1b2', marginBottom: '20px' }}>Çok Yakında Yayındayız</h2>
        <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
          Mühendislik hesaplarını dijitalle buluşturuyoruz. 
          Donatı metrajından statik rapor analizine kadar her şey parmaklarınızın ucunda olacak.
        </p>
        
        {/* Örnek Donatı Verisi (Sana Özel) */}
        <div style={{
          marginTop: '30px',
          padding: '15px',
          backgroundColor: '#1a1a1a',
          borderRadius: '8px',
          fontSize: '0.9rem',
          color: '#00d1b2',
          borderLeft: '4px solid #00d1b2'
        }}>
          Son Hesaplama: <strong>84.5 kg Donatı Metrajı</strong> (Sistem Testi Tamamlandı)
        </div>
      </main>

      {/* Footer */}
      <footer style={{ marginTop: '50px', color: '#444', fontSize: '0.8rem' }}>
        &copy; 2026 bstatiker.com.tr | Mühendislik ve Teknoloji
      </footer>
    </div>
  );
}
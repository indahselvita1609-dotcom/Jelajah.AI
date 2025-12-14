import React from 'react';

export const FAQPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-8 pb-12">
      {/* Header / Search */}
      <div className="@container">
        <div className="@[480px]:p-4">
          <div 
            className="flex min-h-[300px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 text-center" 
            style={{ backgroundImage: 'linear-gradient(rgba(16, 34, 17, 0.4) 0%, rgba(16, 34, 17, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDavSuOxJccPp42A3kmozymJzca1i9VXt76vmg5l06QMOrMYzER6tgmnpRZcBDNRLGxgHFibqsMT804lDM3ywv9Sehtn3Z-AE_75AFX_ZvzsnAiHdF8yvYFkXqaBJhsyhqJkeKtp8EswEqTwqWs3vjw2Sauy70CYtdTcIaBiAMIQx3shgNq2Sv3WYfipvYXiQdl__fD2Cf99OSwfSb5RQhJwMc9pY2P_jpYxagVWNiKBGidOIXDkHVrv5sSx2rvmoA4s-yPgsyJzgu1")' }}
          >
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">FAQ & Bantuan</h1>
              <h2 className="text-white/90 text-sm font-normal leading-normal @[480px]:text-base">
                Temukan jawaban untuk pertanyaan Anda tentang merencanakan petualangan berikutnya bersama Jelajah.AI.
              </h2>
            </div>
            <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="flex border border-r-0 border-white/20 bg-white items-center justify-center pl-[15px] rounded-l-lg text-text-light/60">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input 
                  className="w-full h-full bg-white border-y border-white/20 px-2 text-text-light placeholder:text-text-light/50 focus:outline-none" 
                  placeholder="Cari jawaban..." 
                />
                <div className="flex items-center justify-center rounded-r-lg border-l-0 border border-white/20 bg-white pr-[7px]">
                  <button className="flex items-center justify-center rounded-md h-10 px-4 bg-primary-alt text-white font-bold hover:bg-opacity-90 transition-colors">
                    Cari
                  </button>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-3 px-4 flex-wrap max-w-5xl mx-auto w-full">
        {['Tentang Jelajah.AI', 'AI & Personalisasi', 'Pemesanan & Tagihan', 'Keamanan', 'Platform'].map((cat, idx) => (
          <button key={idx} className={`flex h-8 items-center justify-center gap-x-2 rounded-lg px-4 text-sm font-medium transition-colors ${idx === 0 ? 'bg-primary text-white' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Questions */}
      <div className="flex flex-col px-4 max-w-5xl mx-auto w-full">
        {[
          { q: 'Apa yang membedakan Jelajah.AI dari ChatGPT biasa?', a: 'Jelajah.AI adalah layanan khusus yang berfokus pada perjalanan alam anti-mainstream yang unik. Platform kami menggunakan data eksklusif dan ketersediaan waktu-nyata dari mitra lokal terverifikasi.' },
          { q: 'Seberapa akurat informasi dan rekomendasi yang diberikan?', a: 'Rekomendasi kami didasarkan pada data real-time dari mitra terpercaya, termasuk ketersediaan dan harga.' },
          { q: 'Bagaimana Jelajah.AI menjamin keamanan selama perjalanan?', a: 'Kami melakukan verifikasi menyeluruh terhadap semua mitra lokal kami untuk memastikan mereka memenuhi standar keamanan yang ketat.' },
          { q: 'Apakah data pribadi saya aman?', a: 'Tentu saja. Kami menggunakan enkripsi standar industri dan praktik keamanan terbaik.' },
          { q: 'Bagaimana cara membuat rencana perjalanan baru?', a: 'Cukup buka halaman "Buat Itinerari" dan jawab beberapa pertanyaan tentang preferensi Anda.' }
        ].map((item, idx) => (
          <details key={idx} className="flex flex-col border-t border-primary/10 py-2 group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-2">
              <p className="text-sm font-medium leading-normal text-text-light dark:text-text-dark">{item.q}</p>
              <div className="group-open:rotate-180 transition-transform duration-200 text-text-light/60 dark:text-text-dark/60">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <p className="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal pb-2">
              {item.a}
            </p>
          </details>
        ))}
      </div>

      {/* Still need help */}
      <div className="px-4 py-8 w-full max-w-5xl mx-auto">
        <div className="bg-primary/5 dark:bg-white/5 border border-primary/10 rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="flex-1 flex flex-col gap-2 z-10">
            <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-text-light dark:text-text-dark">Masih punya pertanyaan?</h2>
            <p className="text-text-light/70 dark:text-text-dark/70 text-sm">Tim kami siap membantu Anda merencanakan petualangan berikutnya.</p>
          </div>
          <div className="flex items-center gap-4 z-10">
            <button className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-white dark:bg-surface-dark border border-primary/20 text-sm font-medium hover:bg-primary/5 transition-colors">
              <span className="material-symbols-outlined text-base">mail</span> Email Kami
            </button>
            <button className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-primary-alt text-white text-sm font-bold hover:bg-opacity-90 transition-colors">
              <span className="material-symbols-outlined text-base">chat_bubble</span> Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
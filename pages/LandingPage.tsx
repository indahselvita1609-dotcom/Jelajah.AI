import React from 'react';
import { Screen } from '../types';

interface LandingPageProps {
  onNavigate: (screen: Screen) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <main className="flex flex-col items-center">
      <div className="layout-content-container flex flex-col max-w-screen-xl w-full px-4 sm:px-10 py-5">
        
        {/* Hero Section */}
        <div className="@container w-full">
          <div className="p-0 @[480px]:p-4">
            <div 
              className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 text-center rounded-xl overflow-hidden" 
              style={{ backgroundImage: 'linear-gradient(rgba(10, 20, 30, 0.2) 0%, rgba(10, 20, 30, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3y4tmRlQRe7EPvPMpWTJCGkQvpMPhPoedFKahdPDj8tpLLXnZmzZvhTQz8nv8V-4NvbILWyLGpNPh5lBKJf5YKgH8Dez-BHInEV7_ku32JMMPWX8WAu4ODrBzoakE8ByHTeLFqQ6zzTP_X0Qk1aJSsy8Gnv40TTQbf0_r6Ds6Dg6Rap99cfSE5Y0OsaXMuVB-PQGK7PGWznScFVI1pR4hdBW1xMPXXepF4N8jb05n7eVrc_QmBzRA69TbLG0kJ1D8caTLeFMI8PoI")' }}
            >
              <div className="flex flex-col gap-2 max-w-2xl">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                  Temukan Surga Tersembunyi di Indonesia dengan AI
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base">
                  Rencanakan perjalanan anti-mainstream yang unik, disesuaikan dengan minat dan anggaran Anda.
                </h2>
              </div>
              <button 
                onClick={() => onNavigate(Screen.PLANNER)}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-primary-alt text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-80 transition-colors"
              >
                <span className="truncate">Buat Itinerari Saya Sekarang!</span>
              </button>
            </div>
          </div>
        </div>

        {/* Value Props */}
        <div className="flex flex-col items-center gap-10 px-4 py-16 sm:py-24 @container">
          <div className="text-center">
            <h2 className="text-text-light dark:text-text-dark text-3xl font-bold leading-tight tracking-[-0.015em]">
              Perencanaan Perjalanan Seringkali Rumit
            </h2>
            <p className="text-text-light/70 dark:text-text-dark/70 text-base font-normal leading-normal max-w-2xl mt-2">
              AI kami menganalisis preferensi Anda untuk membuat rencana perjalanan yang sempurna, sehingga Anda bisa fokus menikmati petualangan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[
              { icon: 'explore', title: 'Bingung Cari Tempat?', desc: 'AI kami merekomendasikan destinasi unik yang sesuai dengan minat Anda.' },
              { icon: 'event_note', title: 'Ribet Susun Itinerari?', desc: 'Dapatkan jadwal perjalanan yang terorganisir secara otomatis dalam hitungan menit.' },
              { icon: 'account_balance_wallet', title: 'Takut Over Budget?', desc: 'Rencanakan perjalanan impian Anda tanpa khawatir melebihi anggaran.' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-1 gap-4 rounded-xl border border-primary/10 bg-white dark:bg-surface-dark p-6 flex-col items-center text-center shadow-sm">
                <div className="text-primary-alt">
                  <span className="material-symbols-outlined !text-4xl">{item.icon}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight">{item.title}</h2>
                  <p className="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How it works / Video */}
        <div className="flex flex-col items-center gap-12 px-4 py-16 sm:py-24 w-full">
          <div className="text-center max-w-3xl">
            <h2 className="text-text-light dark:text-text-dark text-3xl font-bold leading-tight tracking-[-0.015em]">
              Lihat Cara Kerjanya dalam 60 Detik
            </h2>
            <p className="text-text-light/70 dark:text-text-dark/70 text-base font-normal leading-normal mt-2">
              Rencanakan petualangan impian Anda hanya dengan tiga langkah mudah.
            </p>
          </div>
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl shadow-primary/10 dark:shadow-primary/5 border-2 border-primary/20">
              <img alt="Video thumbnail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9SpIq0mYQ0ijPRGuZUTQ59ziKxXYLK9yIk8CGU5NF2vtIIiJN7gCFYoGxcf5ZbXoT-x2fTn2m228S7OD4b1cTHiFT620vbmvqDSPZIXmLsvfrE7iMBu7vMPE6yxh0qyzuUsTLVzZCqX_rWFGjbe98aVkh3DjgUwN_3JpfOv_iUgSyI9xEho5ooyiJvuet4L7PuCiqucBcGc31FWbFm7_IIOTiHVanJcmBncRmy8X7Zok1l8_NJLGKs3accMh_gTbc-M8nAXORFp90" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button className="bg-white/20 backdrop-blur-sm text-white rounded-full p-4 hover:bg-white/30 transition-colors">
                  <span className="material-symbols-outlined filled !text-5xl">play_arrow</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-4">
             {[
                { icon: 'edit_document', title: '1. Beri Tahu Kami', desc: 'Isi preferensi perjalanan Anda: minat, anggaran, dan gaya liburan.' },
                { icon: 'auto_awesome', title: '2. AI Bekerja', desc: 'Sistem cerdas kami menganalisis jutaan data untuk membuat rute unik.' },
                { icon: 'travel_explore', title: '3. Jelajahi!', desc: 'Dapatkan itinerari lengkap dalam sekejap, siap untuk berpetualang.' }
             ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center gap-3">
                  <div className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary">
                    <span className="material-symbols-outlined !text-3xl">{step.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-light dark:text-text-dark">{step.title}</h3>
                    <p className="text-sm text-text-light/70 dark:text-text-dark/70">{step.desc}</p>
                  </div>
                </div>
             ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="flex flex-col items-center gap-10 px-4 py-16 sm:py-24">
          <div className="text-center px-4">
            <h2 className="text-text-light dark:text-text-dark text-3xl font-bold leading-tight tracking-[-0.015em]">
              Pilih Paket Petualangan Anda
            </h2>
            <p className="text-text-light/70 dark:text-text-dark/70 text-base font-normal leading-normal max-w-2xl mt-2">
              Mulai perjalanan impian Anda hari ini.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
            {/* Free */}
            <div className="flex flex-col gap-6 rounded-xl border border-primary/20 bg-white dark:bg-surface-dark p-8">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark">Dasar</h3>
                <p className="text-4xl font-bold text-text-light dark:text-text-dark">Rp 0</p>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Coba gratis untuk 1 kali perjalanan.</p>
              </div>
              <ul className="flex flex-col gap-3 text-sm">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> 1 Itinerari AI</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Rekomendasi Destinasi</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Estimasi Anggaran Dasar</li>
              </ul>
              <button 
                onClick={() => onNavigate(Screen.PLANNER)}
                className="w-full mt-auto flex items-center justify-center rounded-xl h-12 bg-primary/10 text-primary dark:bg-primary/20 font-bold hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
              >
                Mulai Gratis
              </button>
            </div>

            {/* Premium */}
            <div className="relative flex flex-col gap-6 rounded-xl border-2 border-primary-alt bg-white dark:bg-surface-dark p-8 transform scale-105 shadow-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-alt text-white text-xs font-bold px-3 py-1 rounded-full">PALING POPULER</div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-primary-alt">Premium</h3>
                <p className="text-4xl font-bold text-text-light dark:text-text-dark">Rp 149rb</p>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Per bulan, untuk petualang sejati.</p>
              </div>
              <ul className="flex flex-col gap-3 text-sm">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Itinerari AI Tanpa Batas</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Kustomisasi Minat Lanjutan</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Estimasi Anggaran Detail</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Dukungan Prioritas</li>
              </ul>
              <button 
                onClick={() => onNavigate(Screen.PLANNER)}
                className="w-full mt-auto flex items-center justify-center rounded-xl h-12 bg-primary-alt text-white font-bold hover:bg-opacity-90 transition-colors"
              >
                Pilih Premium
              </button>
            </div>

            {/* Team */}
            <div className="flex flex-col gap-6 rounded-xl border border-primary/20 bg-white dark:bg-surface-dark p-8">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark">Tim</h3>
                <p className="text-4xl font-bold text-text-light dark:text-text-dark">Rp 499rb</p>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Untuk grup atau perjalanan keluarga.</p>
              </div>
              <ul className="flex flex-col gap-3 text-sm">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Semua Fitur Premium</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Itinerari Kolaboratif</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Asisten Booking</li>
              </ul>
              <button 
                onClick={() => onNavigate(Screen.PLANNER)}
                className="w-full mt-auto flex items-center justify-center rounded-xl h-12 bg-primary/10 text-primary dark:bg-primary/20 font-bold hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
              >
                Pilih Tim
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
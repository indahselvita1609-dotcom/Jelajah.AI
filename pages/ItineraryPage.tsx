
import React from 'react';
import { Screen, TripData } from '../types';

interface ItineraryPageProps {
  onNavigate: (screen: Screen) => void;
  tripData: TripData | null;
}

export const ItineraryPage: React.FC<ItineraryPageProps> = ({ onNavigate, tripData }) => {
  // Use tripData if available, otherwise fallback to defaults (or empty strings)
  const displayTitle = tripData?.destination ? `Eksplorasi ${tripData.destination}` : "Eksplorasi Permata Komodo & Flores";
  const displayDuration = tripData?.duration ? `${tripData.duration} Hari` : "7 Hari 6 Malam";
  
  // Format budget currency if possible
  const displayBudget = tripData?.budget 
    ? new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(Number(tripData.budget))
    : "Rp 19.500.000";

  const displayStyle = tripData?.travelStyle || "Petualangan & Santai";

  // Dynamic Itinerary Generation Logic
  const generateItinerary = () => {
    const duration = tripData?.duration ? parseInt(tripData.duration) : 3;
    const safeDuration = isNaN(duration) || duration < 1 ? 3 : duration;
    const destination = tripData?.destination || "Destinasi Pilihan";
    const interests = tripData?.interests || "Wisata Umum";
    const accommodation = tripData?.accommodation || "Hotel Pilihan";

    const generatedDays = [];

    for (let i = 1; i <= safeDuration; i++) {
      let title = "";
      let activities = [];

      if (i === 1) {
        // First Day: Arrival
        title = "Kedatangan & Check-in";
        activities = [
          { time: "14:00", title: "Check-in Akomodasi", icon: "hotel", desc: `Tiba dan check-in di ${accommodation} yang nyaman.` },
          { time: "16:30", title: "Eksplorasi Santai", icon: "explore", desc: "Berjalan-jalan santai di area sekitar untuk adaptasi suasana." },
          { time: "19:00", title: "Makan Malam Selamat Datang", icon: "restaurant", desc: "Menikmati hidangan lokal pertama yang menggugah selera." }
        ];
      } else if (i === safeDuration) {
        // Last Day: Departure
        title = "Belanja Oleh-oleh & Kepulangan";
        activities = [
          { time: "09:00", title: "Pusat Oleh-oleh", icon: "shopping_bag", desc: `Mencari buah tangan khas ${destination}.` },
          { time: "11:00", title: "Check-out & Persiapan", icon: "luggage", desc: "Persiapan dokumen dan barang bawaan." },
          { time: "13:00", title: "Menuju Bandara/Pelabuhan", icon: "flight_takeoff", desc: "Terima kasih telah menjelajah bersama kami!" }
        ];
      } else {
        // Middle Days: Rotate patterns based on index
        const pattern = i % 3;
        
        if (pattern === 2) { // Day 2, 5, 8...
           title = "Eksplorasi Alam & Ikonik";
           activities = [
             { time: "08:00", title: `Jelajah Landmark ${destination}`, icon: "photo_camera", desc: "Mengunjungi spot foto paling ikonik dan bersejarah." },
             { time: "12:00", title: "Makan Siang Piknik", icon: "park", desc: "Makan siang santai sambil menikmati pemandangan alam." },
             { time: "14:00", title: "Petualangan Alam", icon: "hiking", desc: "Trekking ringan atau aktivitas outdoor menikmati udara segar." }
           ];
        } else if (pattern === 0) { // Day 3, 6, 9...
           title = `Fokus Minat: ${interests}`;
           activities = [
             { time: "09:00", title: "Aktivitas Khusus", icon: "local_activity", desc: `Sesi mendalam sesuai minat Anda: ${interests}.` },
             { time: "13:00", title: "Kafe & Relaksasi", icon: "coffee", desc: "Bersantai di tempat hits lokal." },
             { time: "16:00", title: "Sunset Point", icon: "wb_twilight", desc: "Menutup hari dengan pemandangan matahari terbenam terbaik." }
           ];
        } else { // Day 4, 7, 10...
           title = "Budaya & Kearifan Lokal";
           activities = [
             { time: "08:30", title: "Kunjungan Desa Wisata", icon: "groups", desc: "Berinteraksi langsung dengan warga lokal." },
             { time: "12:00", title: "Kuliner Tradisional", icon: "restaurant_menu", desc: "Mencicipi masakan otentik warisan leluhur." },
             { time: "15:00", title: "Workshop / Kerajinan", icon: "brush", desc: "Melihat atau mencoba membuat kerajinan tangan lokal." }
           ];
        }
      }

      generatedDays.push({ day: i, title, activities });
    }

    return generatedDays;
  };

  const days = generateItinerary();

  return (
    <div className="flex-1 bg-background-light dark:bg-background-dark min-h-screen">
      {/* Hero Header */}
      <div className="relative h-[300px] md:h-[400px] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB52hTygleySdPBtIZCDVblvBdGXXY-LtpgZqHU0FI4AiaA3WfW_PTig7PZ4JcbmAiQZpUM12WqcxCiZwSPiwBoYXy_1tZE9P3rxQKR3KszdT2P7aYEL3x_L7ogSea-amhSAhtnGsl_uC_A6WblmEFdpZNMLqc2Rt3GmvJg5sFll7DBcytTZ8FaBaLaGMuL1HcPqMcS2nlXoaVMqeB7wAj8FPLuXVtM_KbLUln1CAH934SmI_MpAZYZCn1twM00GgKqiPaE7ZkbHKnG")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 max-w-screen-xl mx-auto">
          <button 
            onClick={() => onNavigate(Screen.HOME)}
            className="mb-4 flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Kembali ke Beranda
          </button>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-2">{displayTitle}</h1>
          <div className="flex flex-wrap gap-4 text-white/90 text-sm md:text-base font-medium">
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">calendar_month</span> Fleksibel</span>
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">schedule</span> {displayDuration}</span>
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">group</span> 2 Dewasa</span>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-10 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Itinerary Timeline */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-text-light dark:text-text-dark">Rencana Perjalanan</h2>
            <button className="flex items-center gap-2 text-primary font-bold text-sm hover:underline" onClick={() => onNavigate(Screen.PLANNER)}>
              <span className="material-symbols-outlined text-lg">edit</span>
              Edit Rencana
            </button>
          </div>

          <div className="space-y-6">
            {days.map((day, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                {/* Timeline Line (Desktop) */}
                <div className="hidden md:block absolute left-[19px] top-0 bottom-0 w-0.5 bg-primary/20 last:bottom-auto last:h-full"></div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Day Badge */}
                  <div className="flex-shrink-0 z-10">
                     <div className="flex items-center justify-center size-10 rounded-full bg-primary text-white font-bold text-lg shadow-lg border-4 border-white dark:border-surface-dark">
                       {day.day}
                     </div>
                  </div>

                  {/* Day Content */}
                  <div className="flex-grow space-y-4">
                    <h3 className="text-xl font-bold text-text-light dark:text-text-dark pt-1">Hari {day.day}: {day.title}</h3>
                    
                    <div className="bg-white dark:bg-surface-dark rounded-xl border border-primary/10 shadow-sm overflow-hidden">
                      {day.activities.map((activity, idx) => (
                        <div key={idx} className={`p-4 flex gap-4 ${idx !== day.activities.length - 1 ? 'border-b border-primary/5' : ''}`}>
                          <div className="text-sm font-medium text-text-light/60 dark:text-text-dark/60 w-12 pt-0.5">{activity.time}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="material-symbols-outlined text-primary text-lg">{activity.icon}</span>
                              <h4 className="font-bold text-text-light dark:text-text-dark">{activity.title}</h4>
                            </div>
                            <p className="text-sm text-text-light/70 dark:text-text-dark/70">{activity.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Details & Actions */}
        <div className="space-y-6">
          {/* Actions Card */}
          <div className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-primary/10 shadow-sm sticky top-24">
             <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-4">Aksi Cepat</h3>
             <div className="space-y-3">
               <button className="w-full flex items-center justify-center gap-2 h-12 rounded-lg bg-primary text-white font-bold hover:bg-opacity-90 transition-colors shadow-md">
                 <span className="material-symbols-outlined">download</span>
                 Unduh PDF Itinerari
               </button>
               <button className="w-full flex items-center justify-center gap-2 h-12 rounded-lg bg-white dark:bg-surface-dark border border-primary/20 text-primary font-bold hover:bg-primary/5 transition-colors">
                 <span className="material-symbols-outlined">share</span>
                 Bagikan Rencana
               </button>
               <button className="w-full flex items-center justify-center gap-2 h-12 rounded-lg bg-white dark:bg-surface-dark border border-primary/20 text-text-light dark:text-text-dark font-medium hover:bg-primary/5 transition-colors">
                 <span className="material-symbols-outlined">calendar_add_on</span>
                 Tambahkan ke Kalender
               </button>
             </div>

             <div className="mt-8 pt-6 border-t border-primary/10">
               <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-4">Ringkasan Biaya</h3>
               <div className="space-y-2 text-sm">
                 <div className="flex justify-between text-text-light/70 dark:text-text-dark/70">
                   <span>Akomodasi</span>
                   <span>-</span>
                 </div>
                 <div className="flex justify-between text-text-light/70 dark:text-text-dark/70">
                   <span>Transportasi & Aktivitas</span>
                   <span>-</span>
                 </div>
                 <div className="flex justify-between text-text-light/70 dark:text-text-dark/70">
                   <span>Biaya Layanan AI</span>
                   <span>Rp 50.000</span>
                 </div>
                 <div className="flex justify-between font-bold text-text-light dark:text-text-dark text-base pt-2 border-t border-dashed border-primary/20 mt-2">
                   <span>Estimasi Total</span>
                   <span className="text-primary">{displayBudget}</span>
                 </div>
               </div>
             </div>
          </div>
          
          {/* Weather Widget Placeholder */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium opacity-90">Cuaca di {tripData?.destination || 'Tujuan'}</p>
                <h3 className="text-3xl font-bold mt-1">29°C</h3>
                <p className="text-sm opacity-90 mt-1">Cerah Berawan</p>
              </div>
              <span className="material-symbols-outlined text-5xl opacity-80">partly_cloudy_day</span>
            </div>
            <div className="mt-6 flex justify-between text-sm opacity-90">
              <div className="flex flex-col items-center">
                <span>Sen</span>
                <span className="material-symbols-outlined my-1">sunny</span>
                <span>30°</span>
              </div>
              <div className="flex flex-col items-center">
                <span>Sel</span>
                <span className="material-symbols-outlined my-1">sunny</span>
                <span>31°</span>
              </div>
              <div className="flex flex-col items-center">
                <span>Rab</span>
                <span className="material-symbols-outlined my-1">cloud</span>
                <span>28°</span>
              </div>
              <div className="flex flex-col items-center">
                <span>Kam</span>
                <span className="material-symbols-outlined my-1">partly_cloudy_day</span>
                <span>29°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

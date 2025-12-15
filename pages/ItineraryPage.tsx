
import React, { useEffect, useState } from 'react';
import { Screen, TripData } from '../types';
import { GoogleGenAI, Type } from "@google/genai";

interface ItineraryPageProps {
  onNavigate: (screen: Screen) => void;
  tripData: TripData | null;
}

interface Activity {
  time: string;
  title: string;
  desc: string;
  icon: string;
}

interface ItineraryDay {
  day: number;
  title: string;
  activities: Activity[];
}

export const ItineraryPage: React.FC<ItineraryPageProps> = ({ onNavigate, tripData }) => {
  const [itinerary, setItinerary] = useState<ItineraryDay[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Determine requested duration, defaulting to 7 if missing
  const requestedDuration = tripData?.duration ? parseInt(tripData.duration) : 7;
  
  // Use tripData if available, otherwise fallback to defaults
  const displayTitle = tripData?.destination ? `Eksplorasi ${tripData.destination}` : "Eksplorasi Permata Komodo & Flores";
  
  // Display duration matches the generated itinerary length if available, otherwise the requested duration
  const displayDuration = itinerary.length > 0 ? `${itinerary.length} Hari` : `${requestedDuration} Hari`;
  
  // Format budget currency
  const displayBudget = tripData?.budget 
    ? new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(Number(tripData.budget))
    : "Rp 19.500.000";

  // Fallback Logic (Local Generator) - Used when API Key is missing or API fails
  const generateFallbackItinerary = (): ItineraryDay[] => {
    const safeDuration = isNaN(requestedDuration) || requestedDuration < 1 ? 7 : requestedDuration;
    const destination = tripData?.destination || "Destinasi Pilihan";
    const interests = tripData?.interests || "Wisata Umum";
    const accommodation = tripData?.accommodation || "Hotel Pilihan";

    const generatedDays: ItineraryDay[] = [];

    for (let i = 1; i <= safeDuration; i++) {
      let title = "";
      let activities: Activity[] = [];

      if (i === 1) {
        title = "Kedatangan & Check-in";
        activities = [
          { time: "14:00", title: "Check-in Akomodasi", icon: "hotel", desc: `Tiba dan check-in di ${accommodation} yang nyaman.` },
          { time: "16:30", title: "Eksplorasi Santai", icon: "explore", desc: "Berjalan-jalan santai di area sekitar untuk adaptasi suasana." },
          { time: "19:00", title: "Makan Malam Selamat Datang", icon: "restaurant", desc: "Menikmati hidangan lokal pertama yang menggugah selera." }
        ];
      } else if (i === safeDuration) {
        title = "Belanja Oleh-oleh & Kepulangan";
        activities = [
          { time: "09:00", title: "Pusat Oleh-oleh", icon: "shopping_bag", desc: `Mencari buah tangan khas ${destination}.` },
          { time: "11:00", title: "Check-out & Persiapan", icon: "luggage", desc: "Persiapan dokumen dan barang bawaan." },
          { time: "13:00", title: "Menuju Bandara/Pelabuhan", icon: "flight_takeoff", desc: "Terima kasih telah menjelajah bersama kami!" }
        ];
      } else {
        const pattern = i % 3;
        if (pattern === 2) {
           title = "Eksplorasi Alam & Ikonik";
           activities = [
             { time: "08:00", title: `Jelajah Landmark ${destination}`, icon: "photo_camera", desc: "Mengunjungi spot foto paling ikonik dan bersejarah." },
             { time: "12:00", title: "Makan Siang Piknik", icon: "park", desc: "Makan siang santai sambil menikmati pemandangan alam." },
             { time: "14:00", title: "Petualangan Alam", icon: "hiking", desc: "Trekking ringan atau aktivitas outdoor menikmati udara segar." }
           ];
        } else if (pattern === 0) {
           title = `Fokus Minat: ${interests}`;
           activities = [
             { time: "09:00", title: "Aktivitas Khusus", icon: "local_activity", desc: `Sesi mendalam sesuai minat Anda: ${interests}.` },
             { time: "13:00", title: "Kafe & Relaksasi", icon: "coffee", desc: "Bersantai di tempat hits lokal." },
             { time: "16:00", title: "Sunset Point", icon: "wb_twilight", desc: "Menutup hari dengan pemandangan matahari terbenam terbaik." }
           ];
        } else {
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

  useEffect(() => {
    const fetchItinerary = async () => {
      setIsLoading(true);
      
      const apiKey = process.env.API_KEY;

      if (!apiKey || !tripData) {
        setItinerary(generateFallbackItinerary());
        setIsLoading(false);
        return;
      }

      try {
        const ai = new GoogleGenAI({ apiKey });
        
        const prompt = `
          Peran: Anda adalah Travel Planner ahli untuk destinasi Indonesia.
          Tugas: Buatkan itinerary perjalanan liburan harian yang detail ke ${tripData.destination}.
          
          Parameter:
          - Durasi: ${requestedDuration} hari (WAJIB: Output harus memuat tepat ${requestedDuration} item hari).
          - Budget: ${tripData.budget} IDR.
          - Gaya Perjalanan: ${tripData.travelStyle}.
          - Akomodasi: ${tripData.accommodation}.
          - Minat: ${tripData.interests}.
          - Catatan: ${tripData.notes}.
          - Bahasa: Indonesia.
          
          Format Output: JSON Array dari Object Day.
        `;

        const responseSchema = {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              day: { type: Type.INTEGER },
              title: { type: Type.STRING },
              activities: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    time: { type: Type.STRING },
                    title: { type: Type.STRING },
                    desc: { type: Type.STRING },
                    icon: { type: Type.STRING },
                  },
                  required: ["time", "title", "desc", "icon"],
                },
              },
            },
            required: ["day", "title", "activities"],
          },
        };

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
          config: {
            responseMimeType: "application/json",
            responseSchema: responseSchema,
          }
        });

        const text = response.text;
        if (text) {
          try {
            const data = JSON.parse(text);
            if (Array.isArray(data)) {
               setItinerary(data);
            } else {
               setItinerary(generateFallbackItinerary());
            }
          } catch (e) {
             console.error("JSON Parse error", e);
             setItinerary(generateFallbackItinerary());
          }
        } else {
           setItinerary(generateFallbackItinerary());
        }
      } catch (error) {
        console.error("Gemini API Error:", error);
        setItinerary(generateFallbackItinerary());
      } finally {
        setIsLoading(false);
      }
    };

    fetchItinerary();
  }, [tripData, requestedDuration]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD84jWk_Q2J121D5oV1C3k5uKzH32Wf8kZ9X9z7y4Q3L4p0Y7X5M2u1Z8I0P9N2r6A4D7E3B5C8G1H9J0K2L4M6N8O_P1Q3R5S7T9U0V2W4X6Y8Z0a1b2c3d4e5")' }}
        >
           <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 max-w-screen-xl mx-auto w-full">
           <button 
             onClick={() => onNavigate(Screen.HOME)}
             className="absolute top-6 left-6 sm:left-10 flex items-center gap-2 text-white/80 hover:text-white transition-colors"
           >
             <span className="material-symbols-outlined">arrow_back</span>
             <span className="text-sm font-bold">Kembali</span>
           </button>
           <div className="text-white">
             <p className="text-sm font-bold tracking-wider text-primary-alt mb-2 uppercase">Itinerari Personal</p>
             <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4">{displayTitle}</h1>
             <div className="flex flex-wrap gap-4 text-sm font-medium">
               <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                 <span className="material-symbols-outlined text-lg">calendar_month</span>
                 {displayDuration}
               </div>
               <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                 <span className="material-symbols-outlined text-lg">payments</span>
                 {displayBudget}
               </div>
               <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                 <span className="material-symbols-outlined text-lg">person</span>
                 {tripData?.travelStyle || "Petualangan"}
               </div>
             </div>
           </div>
        </div>
      </div>

      <div className="flex-1 bg-background-light dark:bg-background-dark">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-10 py-10">
          
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-6">
              <div className="relative size-16">
                 <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
                 <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
              </div>
              <p className="text-text-light dark:text-text-dark text-lg font-medium animate-pulse">Sedang menyusun petualangan impian Anda...</p>
            </div>
          ) : (
            <div className="flex flex-col gap-8">
               {itinerary.map((dayItem) => (
                 <div key={dayItem.day} className="flex flex-col md:flex-row gap-6 md:gap-10">
                    <div className="flex md:flex-col items-center md:items-start gap-4 md:w-32 shrink-0">
                       <div className="flex items-center justify-center size-12 rounded-full bg-primary text-white font-bold text-xl shadow-lg shadow-primary/20">
                         {dayItem.day}
                       </div>
                       <div className="flex flex-col">
                         <span className="text-xs font-bold text-primary uppercase tracking-wider">HARI KE-{dayItem.day}</span>
                         <span className="text-sm font-medium text-text-light/60 dark:text-text-dark/60 md:hidden"> - {dayItem.title}</span>
                       </div>
                    </div>
                    
                    <div className="flex-1 flex flex-col gap-6 pt-2 pb-10 border-l-2 border-primary/10 pl-6 md:pl-10 relative">
                       <div className="absolute left-[-1px] top-4 size-2 rounded-full bg-primary md:hidden"></div>
                       <h3 className="text-xl font-bold text-text-light dark:text-text-dark hidden md:block">{dayItem.title}</h3>
                       
                       <div className="grid gap-4">
                          {dayItem.activities.map((activity, idx) => (
                             <div key={idx} className="group flex gap-4 p-4 rounded-xl bg-white dark:bg-surface-dark border border-primary/10 hover:border-primary/30 transition-all hover:shadow-md">
                                <div className="flex flex-col items-center gap-2 min-w-[60px]">
                                   <span className="text-xs font-bold text-text-light/50 dark:text-text-dark/50">{activity.time}</span>
                                   <div className="flex items-center justify-center size-10 rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                      <span className="material-symbols-outlined text-xl">{activity.icon || 'circle'}</span>
                                   </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                   <h4 className="text-base font-bold text-text-light dark:text-text-dark">{activity.title}</h4>
                                   <p className="text-sm text-text-light/70 dark:text-text-dark/70 leading-relaxed">{activity.desc}</p>
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>
                 </div>
               ))}
            </div>
          )}

          {!isLoading && (
            <div className="mt-12 flex flex-col items-center justify-center gap-4 py-8 border-t border-primary/10">
               <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Sudah siap berangkat?</h3>
               <div className="flex gap-4">
                  <button className="flex items-center justify-center gap-2 h-10 px-6 rounded-xl border border-primary/20 hover:bg-primary/5 transition-colors text-sm font-bold text-text-light dark:text-text-dark">
                    <span className="material-symbols-outlined">share</span> Bagikan
                  </button>
                  <button className="flex items-center justify-center gap-2 h-10 px-6 rounded-xl bg-primary-alt text-white hover:bg-opacity-90 transition-colors text-sm font-bold shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined">download</span> Unduh PDF
                  </button>
               </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

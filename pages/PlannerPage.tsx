
import React from 'react';
import { Screen, TripData } from '../types';

interface PlannerPageProps {
  onNavigate: (screen: Screen) => void;
  onSubmit: (data: TripData) => void;
}

export const PlannerPage: React.FC<PlannerPageProps> = ({ onNavigate, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const data: TripData = {
      destination: formData.get('destinasi') as string,
      duration: formData.get('durasi') as string,
      budget: formData.get('anggaran') as string,
      travelStyle: formData.get('gaya_perjalanan') as string,
      accommodation: formData.get('preferensi_akomodasi') as string,
      interests: formData.get('aktivitas') as string,
      diet: formData.get('batasan_diet') as string,
      notes: formData.get('minat_khusus') as string,
    };

    onSubmit(data);
    onNavigate(Screen.PAYMENT);
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-8 sm:py-12 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQJMEMEpOT2hCAmGRqd2nChep25qRNELBdz_acWcfjNsEUsBSpTcswpFHm4m8u3WfRvEYnSJzFlVOoZIEEYr72XUUjaxRtmr_SH_dSqZ1C-3-IrlAgpi7l86ZZgGBL2PwJQO95uSuB6ATx2bx73CBSxfJ0xQQ_I-C-H0bog9ryK62iJPbhphdngkeXhKbTrXcxSoJDG-WzRgZ_Zd5xuF0hrPr5OFuy0EZb92VupSFqMIhQvp7O40jqLF37FJxl1sSQub3Va5qo2FiD")'}}>
       {/* Overlay for readability if image is too bright, though the container has bg-surface */}
       <div className="absolute inset-0 bg-background-light/90 dark:bg-background-dark/90 -z-10" />

      <div className="w-full max-w-2xl rounded-xl bg-surface-light/90 p-8 shadow-xl backdrop-blur-md dark:bg-surface-dark/90 border border-primary/20">
        <div className="mb-8">
          <div className="mb-4">
            <p className="text-sm font-semibold text-primary">Langkah 1 dari 3</p>
            <div className="mt-1 flex items-center gap-2">
              <div className="h-2 w-full flex-1 rounded-full bg-primary/20">
                <div className="h-2 w-1/3 rounded-full bg-primary"></div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-light dark:text-text-dark">
              Detail Preferensi Perjalananmu
            </h1>
            <p className="mt-2 text-text-light/70 dark:text-text-dark/70">
              Semakin detail, semakin personal. Biarkan AI kami menyusun itinerary unik untuk Anda.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium leading-6 text-text-light dark:text-text-dark" htmlFor="destinasi">Destinasi</label>
            <div className="mt-2">
              <input 
                className="block w-full rounded-lg border-primary/20 bg-white/50 p-3 text-text-light placeholder:text-text-light/50 focus:border-primary focus:ring-primary/50 dark:border-white/10 dark:bg-black/20 dark:text-text-dark"
                id="destinasi" name="destinasi" placeholder="Contoh: Raja Ampat, atau danau di pegunungan" type="text" required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium leading-6 text-text-light dark:text-text-dark" htmlFor="durasi">Durasi (hari)</label>
              <div className="mt-2">
                <input 
                  className="block w-full rounded-lg border-primary/20 bg-white/50 p-3 text-text-light placeholder:text-text-light/50 focus:border-primary focus:ring-primary/50 dark:border-white/10 dark:bg-black/20 dark:text-text-dark"
                  id="durasi" name="durasi" placeholder="Contoh: 7" type="number" required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-text-light dark:text-text-dark" htmlFor="anggaran">Anggaran (IDR)</label>
              <div className="mt-2">
                <input 
                   className="block w-full rounded-lg border-primary/20 bg-white/50 p-3 text-text-light placeholder:text-text-light/50 focus:border-primary focus:ring-primary/50 dark:border-white/10 dark:bg-black/20 dark:text-text-dark"
                  id="anggaran" name="anggaran" placeholder="Contoh: 5000000" type="number" required
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium leading-6 text-text-light dark:text-text-dark" htmlFor="gaya_perjalanan">Gaya Perjalanan</label>
              <div className="mt-2">
                <select 
                   className="block w-full rounded-lg border-primary/20 bg-white/50 p-3 text-text-light focus:border-primary focus:ring-primary/50 dark:border-white/10 dark:bg-black/20 dark:text-text-dark"
                  id="gaya_perjalanan" name="gaya_perjalanan"
                >
                  <option value="Petualangan">Petualangan</option>
                  <option value="Relaksasi">Relaksasi</option>
                  <option value="Imersi Budaya">Imersi Budaya</option>
                  <option value="Healing">Healing</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-text-light dark:text-text-dark" htmlFor="preferensi_akomodasi">Preferensi Akomodasi</label>
              <div className="mt-2">
                <select 
                   className="block w-full rounded-lg border-primary/20 bg-white/50 p-3 text-text-light focus:border-primary focus:ring-primary/50 dark:border-white/10 dark:bg-black/20 dark:text-text-dark"
                  id="preferensi_akomodasi" name="preferensi_akomodasi"
                >
                  <option value="Budget">Budget</option>
                  <option value="Homestay">Homestay</option>
                  <option value="Hotel Butik">Hotel Butik</option>
                  <option value="Mewah">Mewah</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-text-light dark:text-text-dark" htmlFor="aktivitas">Aktivitas yang Disukai</label>
            <div className="mt-2">
              <input 
                 className="block w-full rounded-lg border-primary/20 bg-white/50 p-3 text-text-light placeholder:text-text-light/50 focus:border-primary focus:ring-primary/50 dark:border-white/10 dark:bg-black/20 dark:text-text-dark"
                id="aktivitas" name="aktivitas" placeholder="Contoh: hiking, wisata kuliner, snorkeling, fotografi" type="text"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-text-light dark:text-text-dark" htmlFor="batasan_diet">Batasan Diet & Alergi</label>
            <div className="mt-2">
              <textarea 
                 className="block w-full rounded-lg border-primary/20 bg-white/50 p-3 text-text-light placeholder:text-text-light/50 focus:border-primary focus:ring-primary/50 dark:border-white/10 dark:bg-black/20 dark:text-text-dark"
                id="batasan_diet" name="batasan_diet" placeholder="Contoh: vegetarian, alergi kacang, pantangan makanan tertentu" rows={2}
              ></textarea>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-text-light dark:text-text-dark" htmlFor="minat_khusus">Minat atau Tema Spesifik</label>
            <div className="mt-2">
              <textarea 
                 className="block w-full rounded-lg border-primary/20 bg-white/50 p-3 text-text-light placeholder:text-text-light/50 focus:border-primary focus:ring-primary/50 dark:border-white/10 dark:bg-black/20 dark:text-text-dark"
                id="minat_khusus" name="minat_khusus" placeholder="Ada hal lain yang perlu kami tahu? Contoh: ingin fokus pada kopi lokal, mencari spot sunrise terbaik..." rows={3}
              ></textarea>
            </div>
          </div>

          <div className="pt-4">
            <button 
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-alt px-4 py-3 text-base font-bold text-white shadow-sm transition-transform hover:scale-[1.02] hover:bg-opacity-90"
              type="submit"
            >
              Buat Rencana Perjalanan
              <span className="material-symbols-outlined">auto_awesome</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


import React from 'react';
import { Screen, TripData } from '../types';

interface PaymentPageProps {
  onNavigate: (screen: Screen) => void;
  tripData: TripData | null;
}

export const PaymentPage: React.FC<PaymentPageProps> = ({ onNavigate, tripData }) => {
  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate(Screen.CONFIRMATION);
  };

  const displayBudget = tripData?.budget 
    ? new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(Number(tripData.budget))
    : 'Belum ditentukan';

  return (
    <div className="flex-1 px-4 sm:px-8 lg:px-20 py-10 bg-background-light dark:bg-background-dark">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-between gap-3 mb-8">
          <p className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
            Satu Langkah Terakhir
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Review Section */}
          <div className="lg:col-span-3">
            <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Preferensi Perjalanan Anda
            </h2>
            <div className="p-4 border border-primary/10 rounded-xl bg-white dark:bg-surface-dark shadow-sm">
              {[
                { label: 'Destinasi', value: tripData?.destination || '-' },
                { label: 'Gaya Perjalanan', value: tripData?.travelStyle || '-' },
                { label: 'Anggaran', value: displayBudget },
                { label: 'Minat Utama', value: tripData?.interests || '-' },
                { label: 'Durasi', value: tripData?.duration ? `${tripData.duration} Hari` : '-' },
              ].map((item, idx) => (
                <div key={idx} className={`flex justify-between gap-x-6 py-3 ${idx !== 4 ? 'border-b border-primary/5' : ''}`}>
                  <div>
                    <p className="text-text-light/60 dark:text-text-dark/60 text-sm font-normal leading-normal">{item.label}</p>
                    <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal mt-1">{item.value}</p>
                  </div>
                  <button className="text-primary text-sm font-bold hover:underline" onClick={() => onNavigate(Screen.PLANNER)}>Ubah</button>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Form */}
          <div className="lg:col-span-2">
            <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Selesaikan Pembelian Anda
            </h2>
            <div className="p-6 border border-primary/50 dark:border-primary/40 rounded-xl bg-white dark:bg-surface-dark shadow-lg shadow-primary/5">
              <div className="flex justify-between items-center pb-4 border-b border-primary/10">
                <p className="text-text-light dark:text-text-dark font-medium">Itinerari AI Personal</p>
                <p className="text-text-light dark:text-text-dark text-xl font-bold">Rp 50.000</p>
              </div>
              <p className="text-xs text-text-light/60 dark:text-text-dark/60 mt-4">
                Anda akan menerima rencana perjalanan yang dibuat khusus di kotak masuk Anda dalam beberapa menit.
              </p>
              
              <form onSubmit={handlePay} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">Nomor Kartu</label>
                  <div className="relative">
                    <input className="w-full h-12 px-4 rounded-lg border border-primary/20 bg-background-light dark:bg-black/20 text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="0000 0000 0000 0000" type="text" />
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-text-light/40">credit_card</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">Kedaluwarsa</label>
                    <input className="w-full h-12 px-4 rounded-lg border border-primary/20 bg-background-light dark:bg-black/20 text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="BB/TT" type="text" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">CVC</label>
                    <input className="w-full h-12 px-4 rounded-lg border border-primary/20 bg-background-light dark:bg-black/20 text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="123" type="text" />
                  </div>
                </div>

                <div className="flex justify-center items-center gap-2 pt-2 opacity-70 grayscale hover:grayscale-0 transition-all">
                  <img alt="Visa" className="h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU5WXu9VAT9IYFsSvlHkJembwtXZKEVW8t0RZEvn0z2clXNeI1ZSEvBinL-ylg3LFPKhAdB9pd3ougtwGQl6k4zzZOK73mNeox7Sxe9cNopoKS7CNKsJrMamsMdYGCUkSl20WX6et5vWI7-tFmYdOohce367mc_C6Hg3nGhJsRWb4zXGDh9DGYImQMdyeWmEpRK6C67DLiAmlMUFByQTwfOkcRO8X5tPswFW_h6NyiiqVZCU9iVaTino73AhZhz5N_DpyRdM6OUWm7"/>
                  <img alt="Mastercard" className="h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7QZL-999MbeAsq8Jx0jdPSqfznLgChC9bwaz8xSyWG4mXqRELHkD7ay0ozjq7Hs-WZjOrRnY8j5-j6CI2E_nLr93jJhg0kiR4BNknWikG90q4q9-lvGsgNGIf2R-bZ7Kft0piaPZbp24-0vF3gTLN_xsj4dCd2wWqSpNiTyocdDuyjWQuMzg4N_593fqNzm-k-ziUL5JOZ7J4EP1MlgSIbxfZRVLrhg8HZu-sPjZtbGKXTzRGpN271tFi2b93UdD2_STA_JWe4MWP"/>
                </div>

                <button 
                  type="submit"
                  className="w-full flex items-center justify-center rounded-xl h-12 px-4 bg-primary text-white text-base font-bold hover:bg-primary/90 transition-colors duration-200 shadow-md"
                >
                  Bayar Rp 50.000 & Dapatkan Itinerari
                </button>
              </form>
              
              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-text-light/60 dark:text-text-dark/60">
                <span className="material-symbols-outlined text-sm">lock</span>
                <span>Pembayaran Aman dengan SSL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

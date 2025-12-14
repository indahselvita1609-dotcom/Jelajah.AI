
import React from 'react';
import { Screen, TripData } from '../types';

interface ConfirmationPageProps {
  onNavigate: (screen: Screen) => void;
  tripData: TripData | null;
}

export const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ onNavigate, tripData }) => {
  return (
    <div className="flex flex-1 justify-center py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex w-full max-w-4xl flex-col items-center gap-8">
        
        {/* Success Hero */}
        <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:gap-12">
          <div className="w-full max-w-md flex-1">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark shadow-lg">
              <div 
                className="h-full w-full bg-cover bg-center bg-no-repeat" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB52hTygleySdPBtIZCDVblvBdGXXY-LtpgZqHU0FI4AiaA3WfW_PTig7PZ4JcbmAiQZpUM12WqcxCiZwSPiwBoYXy_1tZE9P3rxQKR3KszdT2P7aYEL3x_L7ogSea-amhSAhtnGsl_uC_A6WblmEFdpZNMLqc2Rt3GmvJg5sFll7DBcytTZ8FaBaLaGMuL1HcPqMcS2nlXoaVMqeB7wAj8FPLuXVtM_KbLUln1CAH934SmI_MpAZYZCn1twM00GgKqiPaE7ZkbHKnG")' }}
              ></div>
            </div>
          </div>
          <div className="flex w-full max-w-md flex-1 flex-col items-start text-left">
            <div className="flex flex-col gap-4">
              <p className="text-primary-alt font-bold text-lg">Pembayaran Berhasil!</p>
              <p className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl">
                Terima Kasih! Petualangan Anda Menanti.
              </p>
              <p className="text-text-light/70 dark:text-text-dark/70 text-base font-normal leading-normal sm:text-lg">
                Pembayaran Anda untuk perjalanan unik ke <strong>{tripData?.destination || 'Destinasi Impian'}</strong> telah berhasil. AI kami sekarang sedang menyusun rencana perjalanan pribadi Anda.
              </p>
            </div>
          </div>
        </div>

        {/* Status Cards */}
        <div className="w-full border-t border-primary/10 pt-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: 'mark_email_read', title: 'Cek email Anda', desc: 'Itinerari premium Anda akan tiba dalam 5-10 menit.' },
              { icon: 'receipt_long', title: 'Pesanan #JLH-84620', desc: 'Pembayaran sebesar Rp50.000 terkonfirmasi.' },
              { icon: 'support_agent', title: 'Butuh Bantuan?', desc: 'Hubungi tim dukungan kami jika ada masalah.' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 rounded-xl bg-white dark:bg-surface-dark p-4 border border-primary/10 shadow-sm">
                <div className="text-primary flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">{item.title}</p>
                  <p className="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full max-w-xs pt-4">
          <button 
            onClick={() => onNavigate(Screen.ITINERARY)}
            className="flex h-14 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary-alt px-5 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            <span className="truncate">Lihat Perjalanan Saya</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

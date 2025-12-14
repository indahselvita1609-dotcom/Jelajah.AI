import React from 'react';
import { Screen, Testimonial } from '../types';

interface TestimonialsPageProps {
  onNavigate: (screen: Screen) => void;
}

const testimonials: Testimonial[] = [
  { name: 'Andi S.', role: 'dari Jakarta', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgjZV-DbxDDNLw9AeY-GzTFq6x8POUoNlM0da4YPxb33xu9lkAOcpc6QVQaB2SX7f2MFu-_DUo4PikD0vEd2CRjfV1BGsNBWbsVjGbrEoZaTe_6kU6IbBX6fe1IEPLKxMoanMJ1LeJ9zvVWS8CL4JF-BqU_glmy85VhaRhdV7g5w-LbBT5kmn3FOqrabLz2r-RpBqBoa5KtKFRoTZ4wyzv1kams3rtpnj8dB9Ij9fbc49Pz26jmXQ9uAVXAceo1eBV4Io958KsO1C2', text: 'Perjalanan melihat matahari terbit di Bromo sangat menakjubkan! Jelajah.AI merencanakan semuanya dengan sempurna, dari transportasi hingga pemandu lokal.', rating: 5, trip: 'Trekking Matahari Terbit Bromo' },
  { name: 'Budi P.', role: 'dari Bandung', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDh40rPHw8JS25JXuZpf8i0dL7oLw9y_rliPYgHQE4jXdBF-MyJMOoABdgojrQUJR2Z0i9tgx0LaDxvGpjlA13vCxrBs5ntycsL4qiqQ2glTNiasdJwiOJe0qEDzCfqvD4qIzon16XRQ9giVBde0qLBZ1I4bqcC3t84QU6eXqkhN8HZK8-229-mXRLz7ZM5sHMKdEmoNMDbJPBXQvO7en8jzqw0hfDlfRNa1msqftUEn-tz0PxATa2L9gq2I7wjdg0SI2ZCsVeZlA_i', text: 'Perjalanan menyelam yang tak terlupakan di Raja Ampat. Rekomendasi AI untuk lokasi menyelam sangat tepat.', rating: 5, trip: 'Menyelam di Raja Ampat' },
  { name: 'Citra L.', role: 'dari Surabaya', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoF7vf90pQ6EPD2O7PaUSVKyfZCy5LTwXNf6R1x7Wgs7ArhRJx5g9eRHb6mZ5oy2ZovaCtW8oW5X1ihnYt1XPl7OnNIIFzapmEzqAlVhDx0kfVh_FNRjz83NBnjoo38DZs11TjEP_37zunUkLNjmM8KgUgqz4XyuFiDfXz2fivzPFU5i89qK8EGX_yjuRuwDbXVoPrmbPMsTqDTtSWfl_BGFvW90BF5iJ-WYywiA2BeXtZ1I4_d-LyFNW3EU1uAE4tz1mu5JudT3P6', text: 'Menjelajahi hutan Kalimantan adalah mimpi yang menjadi kenyataan. Jelajah.AI menghubungkan kami dengan komunitas lokal yang luar biasa.', rating: 5, trip: 'Tur Hutan Kalimantan' },
  { name: 'Dewi K.', role: 'dari Yogyakarta', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxjz0lJozdL123FMVvHGZDgpNLsfoi1RN0kEru4YyFKHxYpg4j8owQLTeRT1_GEmYlyMk8fX1-U-aND8phZmLLCpamBoPxkcoe_r6po3X72ZJEHrOyv8R1pVB0diDzB05saKmM5ynVh7-Jd73-4a5engZcAsI2Y1NXm8YylQzq2e5qMn3gubIqab1VfMz8PgaMsRd-3qM1n2LDY6Cc9ToP9AonZaWk-2r2KgHHcJMzwZDVnWI9iqjULUVZ-qLNw9ckJhM6PSLIAEBy', text: 'Tur desa budaya sangat berwawasan. Saya belajar banyak tentang tradisi lokal, dan homestay-nya fantastis.', rating: 5, trip: 'Menginap di Desa Budaya' },
  { name: 'Eka W.', role: 'dari Bali', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4rjhE3FFZM9Z07pw4c8UdkAgGVl77faFBew10cURf9iFMybUV8dnho-paaHbjsN3eoojQcHna76CqrUUbTbvm9eHsJ74qKOs2jBX1GCocId8C-mAgEk7YeIkzwC0GWn-fuw9li37x4_s3rCh-6sqFxjhXpAl0zmdf3ZlRjELIu3cBH5ebL5nj4Rbq8aPSwjzTuqLdsYFFu4Pul85ymaB0GkLt8OsdTPy-mZoAOHdplsNn9s8PCathZtnKyUJJVK1jj93kyF4kbHuI', text: 'Saya tidak pernah tahu ada pantai terpencil seperti ini di Indonesia. Terima kasih, Jelajah.AI, untuk pelarian yang sempurna.', rating: 5, trip: 'Jelajah Pantai Terpencil' },
  { name: 'Fajar H.', role: 'dari Medan', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-0_Q8ls1xA5qoGDFIH3mekFNAqWlmdXQz5CvUim7SbXSXu8c_nfi-awohYWx2uQI3GssgsgfLxRYQIDUQNQuM5pr-xDXDaDQCyH0gfV3tbnK2anUHg7F0gSbD7zg_2R2Hfs2cW80K5zPavoY36vEg8DkKxGmM48PLwY90BEZiwJzso0Gb2zTZiyQ2nEMoBPcJMDcarr71qmg5wVfB7KcvrxvCY8uJEz97owReJUEIDPipholHJ67ICVmYbjrwynRyvTOVmQGkUeWj', text: 'Dari perencanaan hingga perjalanan sebenarnya, semuanya mulus. AI memahami minat saya pada satwa liar dan menciptakan ekspedisi hutan Sumatra.', rating: 5, trip: 'Ekspedisi Hutan Sumatra' }
];

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Hero */}
      <section className="container mx-auto px-4 py-8">
        <div className="@container">
          <div className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 text-center" 
             style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6axIuGEO12GXOgc5J-iMdhSBJlKt6fyN5ZS2URVP3oHTuaJFu2oWRnYdBw0p5Eesz40nZTZG5m3LjyA6YQIY1chs1pPS4iUXvEDRj9ZAgySxLL4Gk0Vnd-jwICXHb1rZe5aF4_tTIJbVKfKVamF-otM34hHGg4XmaGC433f38nKgS0q79r6JuDBK8eU7oubHd1DC9K-PdR2nk9e9J1C2v-AgHcnDbJbvPuf_Ardk3ffql-lSS64Aze7ZNAy5oGijUQOrkUJ-d8Fz1")' }}
          >
            <div className="flex flex-col gap-4 max-w-3xl">
              <h1 className="text-white text-4xl font-black leading-tight tracking-tight md:text-5xl">Lihat Mengapa Para Petualang Menyukai Jelajah.AI</h1>
              <p className="text-white/90 text-base font-normal leading-normal md:text-lg">Temukan perjalanan alam otentik dan anti-mainstream yang disesuaikan dengan anggaran dan minat Anda.</p>
            </div>
            <button 
              onClick={() => onNavigate(Screen.PLANNER)}
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary-alt text-white text-base font-bold tracking-wide hover:opacity-90 transition-opacity"
            >
              Rencanakan Petualangan Anda
            </button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 className="text-text-light dark:text-text-dark text-2xl font-bold leading-tight tracking-tight md:text-3xl">Dengar dari Para Petualang Kami</h2>
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-text-light/60 dark:text-text-dark/60">Urutkan:</label>
            <select className="rounded-lg border-primary/20 bg-white dark:bg-surface-dark text-sm focus:ring-primary focus:border-primary">
              <option>Terbaru</option>
              <option>Peringkat Tertinggi</option>
            </select>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-3 pb-8 flex-wrap">
          {['Semua', 'Pegunungan', 'Pantai', 'Hutan', 'Desa Budaya', 'Menyelam'].map((filter, idx) => (
             <button key={idx} className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-colors ${idx === 0 ? 'bg-primary text-white' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}>
               <p className="text-sm font-bold">{filter}</p>
             </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="flex flex-col gap-4 rounded-xl p-6 bg-white dark:bg-surface-dark border border-primary/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <img className="size-12 rounded-full object-cover" src={t.image} alt={t.name} />
                <div>
                  <p className="font-bold text-text-light dark:text-text-dark">{t.name}</p>
                  <p className="text-sm text-text-light/60 dark:text-text-dark/60">{t.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-secondary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined filled text-base">star</span>
                ))}
              </div>
              <p className="text-base leading-relaxed text-text-light/80 dark:text-text-dark/80">"{t.text}"</p>
              {t.trip && <p className="text-sm font-bold text-primary">{t.trip}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white dark:bg-surface-dark rounded-xl p-8 md:p-16 text-center border border-primary/10 shadow-lg">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-text-light dark:text-text-dark">Siap Menciptakan Kisah Anda Sendiri?</h2>
            <p className="text-text-light/70 dark:text-text-dark/70 text-lg">Biarkan AI kami merancang petualangan unik hanya untuk Anda.</p>
            <button 
              onClick={() => onNavigate(Screen.PLANNER)}
              className="flex min-w-[84px] mt-4 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary-alt text-white text-base font-bold tracking-wide hover:opacity-90 transition-opacity"
            >
              Mulai Sekarang
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
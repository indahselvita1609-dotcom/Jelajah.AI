# Jelajah.AI 🌏✈️

**Jelajah.AI** adalah aplikasi perencana perjalanan berbasis web yang memanfaatkan kecerdasan buatan (AI) untuk menyusun itinerari liburan yang unik, personal, dan anti-mainstream, khusus untuk destinasi di Indonesia.

Aplikasi ini dirancang untuk membantu wisatawan menemukan "surga tersembunyi" dan menyusun jadwal perjalanan lengkap berdasarkan anggaran, minat, dan gaya perjalanan mereka dalam hitungan menit.

---

## ✨ Fitur Utama

*   **Smart Trip Planner**: Formulir interaktif untuk menangkap preferensi detail pengguna (Destinasi, Budget, Durasi, Gaya Perjalanan, Minat Khusus, Diet).
*   **Dynamic Itinerary Generator**: Secara otomatis membuat jadwal perjalanan hari demi hari yang logis berdasarkan input durasi dan minat pengguna.
*   **Cost Estimation**: Kalkulasi estimasi biaya perjalanan agar sesuai dengan anggaran pengguna.
*   **Responsive UI/UX**: Desain modern yang responsif (Mobile & Desktop) dengan dukungan **Dark Mode**.
*   **Mock Payment Gateway**: Simulasi alur pembayaran layanan premium.

---

## 🚀 Use Cases (Skenario Penggunaan)

Berikut adalah beberapa contoh bagaimana pengguna dapat memanfaatkan Jelajah.AI:

### 1. Si "Sibuk yang Butuh Healing" 💼
**Profil**: Seorang profesional di Jakarta yang penat bekerja dan ingin liburan singkat (3 hari) untuk relaksasi, tapi tidak punya waktu untuk riset tempat.
*   **Input Aplikasi**:
    *   **Tujuan**: "Pantai tenang dekat Jawa"
    *   **Gaya**: "Relaksasi" & "Healing"
    *   **Budget**: "Rp 5.000.000"
    *   **Minat**: "Spa, Yoga, Seafood"
*   **Hasil**: Itinerari 3 hari yang berisi rekomendasi resort privat, jadwal pijat/spa, dan daftar restoran seafood tepi pantai tanpa perlu pusing mengatur jadwal.

### 2. Si "Petualang Budget" 🎒
**Profil**: Mahasiswa atau backpacker yang ingin mengeksplorasi alam liar dengan dana terbatas.
*   **Input Aplikasi**:
    *   **Tujuan**: "Taman Nasional Baluran"
    *   **Gaya**: "Petualangan"
    *   **Akomodasi**: "Homestay/Camping"
    *   **Budget**: "Rp 1.500.000"
*   **Hasil**: Rencana perjalanan yang memprioritaskan trekking, spot foto savana, informasi transportasi umum/sewa motor murah, dan penginapan hemat biaya.

### 3. Si "Pencari Budaya Otentik" 🎭
**Profil**: Wisatawan mancanegara atau lokal yang ingin merasakan kehidupan warga lokal, bukan sekadar tempat wisata turis biasa.
*   **Input Aplikasi**:
    *   **Tujuan**: "Toraja" atau "Desa Adat Flores"
    *   **Gaya**: "Imersi Budaya"
    *   **Minat**: "Tenun, Upacara Adat, Kuliner Tradisional"
*   **Hasil**: Itinerari yang mencakup kunjungan ke rumah ketua adat, workshop pembuatan kain tenun, dan jadwal pasar tradisional lokal.

### 4. Keluarga dengan Kebutuhan Khusus 👨‍👩‍👧‍👦
**Profil**: Keluarga yang membawa anak kecil dan memiliki pantangan makanan tertentu.
*   **Input Aplikasi**:
    *   **Catatan**: "Ramah anak, stroller friendly"
    *   **Diet**: "Alergi kacang, Halal"
*   **Hasil**: Rekomendasi tempat wisata yang aman untuk anak-anak dan daftar restoran yang terverifikasi aman untuk kebutuhan diet mereka.

---

## 🛠 Teknologi yang Digunakan

*   **Frontend**: React 19, TypeScript
*   **Styling**: Tailwind CSS
*   **Icons**: Material Symbols Outlined (Google)
*   **Fonts**: Plus Jakarta Sans
*   **Build Tool**: (Asumsi: Vite/CRA/Parcel sesuai environment)

---

## 📂 Struktur Halaman

1.  **Landing Page**: Halaman muka dengan Hero section, Value proposition, dan Pricing.
2.  **Planner Page**: Form input data perjalanan.
3.  **Payment Page**: Ringkasan pesanan dan simulasi pembayaran kartu kredit.
4.  **Confirmation Page**: Halaman sukses setelah pembayaran.
5.  **Itinerary Page**: Halaman utama hasil generate jadwal perjalanan, peta, dan detail aktivitas.
6.  **FAQ & Testimonials**: Halaman pendukung informasi.

---

## Cara Menjalankan

1.  Pastikan Node.js terinstal.
2.  Install dependencies: `npm install`
3.  Jalankan development server: `npm start` atau `npm run dev`

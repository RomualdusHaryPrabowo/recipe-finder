**📖 Aplikasi Pencari Resep (Recipe Finder)**

Sebuah proyek sederhana sebagai proyek Ujian Tengah Semester (UTS) mata kuliah Pengembangan Aplikasi Web - Institut Teknologi Sumatera (ITERA)

👨‍💻 Data Mahasiswa

Nama: Romualdus Hary Prabowo

NIM: 123140083

📝 Tentang Aplikasi

Recipe Finder adalah aplikasi web berbasis React.js yang memungkinkan user melakukan pencarian berbagai resep makanan. Aplikasi ini terhubung ke TheMealDB API sebagai sumber datanya.

Aplikasi ini memiliki alur pengguna yang dimulai dari halaman login "Simulasi" (tidak memerlukan registrasi) sebelum pengguna dapat mengakses fitur utama.

Fitur Utama

Sistem Login: Halaman login untuk simulasi alur pengguna (menggunakan React Router). Pengguna bebas memasukan username dan password apapun.

Pencarian Resep: Pengguna dapat mencari resep.

Filter Kategori & Negara: Pengguna dapat memfilter resep berdasarkan kategori (misal: "Seafood") atau Negara (misal: "Italian").

Resep Acak: Tombol untuk menemukan resep acak bagi pengguna yang mencari inspirasi.

Tampilan Detail: Pengguna dapat mengklik kartu resep untuk melihat detail lengkap, termasuk bahan-bahan, instruksi memasak, hingga video tutorial.

🛠️ Teknologi yang Digunakan

React.js: Library JavaScript utama untuk membangun UI.

React Router: Untuk menangani navigasi antar halaman (Login & Halaman Utama).

CSS Murni: Untuk styling kustom semua komponen.

TheMealDB API: Sebagai REST API eksternal untuk mengambil data resep.

Git & GitHub: Untuk manajemen versi dan hosting kode.

Vercel: Untuk deploy 

📸 Tampilan Aplikasi

Berikut adalah beberapa tangkapan layar (screenshot) dari aplikasi:
[](public/images/login.png)
[](public/images/tampilan1.png)
[](public/images/recipeCard.png)

**Link Website** [http://recipe-finder-flame-delta.vercel.app]

🚀 Cara Penggunaan / Instalasi

Untuk menjalankan proyek ini di komputer lokal Anda, ikuti langkah-langkah berikut:

Clone repositori ini:

git clone [https://github.com/RomualdusHaryPrabowo/recipe-finder.git]


Masuk ke direktori proyek:

cd recipe-finder


Install semua dependensi yang diperlukan:

npm install


Install React Router (jika belum ter-install):

npm install react-router-dom


Jalankan aplikasi:

npm start


Buka http://localhost:3000 di browser Anda untuk melihat aplikasi berjalan.
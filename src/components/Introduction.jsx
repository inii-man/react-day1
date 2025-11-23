import React from 'react'
import './Section.css'

function Introduction() {
  return (
    <div className="section">
      <h1>📚 Pengenalan React</h1>
      
      <div className="content-block">
        <h2>🎯 Apa itu React?</h2>
        <p>
          React adalah <strong>library JavaScript</strong> yang dibuat oleh Facebook untuk membangun 
          antarmuka pengguna (UI) yang interaktif dan dinamis. React memungkinkan kita membuat 
          aplikasi web yang cepat dan responsif dengan cara yang mudah dipahami.
        </p>
      </div>

      <div className="content-block">
        <h2>✨ Mengapa Belajar React?</h2>
        <ul className="feature-list">
          <li>🚀 <strong>Populer & Banyak Digunakan</strong> - Banyak perusahaan besar menggunakan React</li>
          <li>🧩 <strong>Component-Based</strong> - Kode dapat digunakan kembali dan mudah dirawat</li>
          <li>⚡ <strong>Fast & Efficient</strong> - Virtual DOM membuat aplikasi lebih cepat</li>
          <li>📚 <strong>Komunitas Besar</strong> - Banyak sumber belajar dan dukungan</li>
          <li>🛠️ <strong>Ekosistem Kaya</strong> - Banyak tools dan library pendukung</li>
        </ul>
      </div>

      <div className="content-block">
        <h2>🔑 Konsep Dasar React</h2>
        <div className="concept-grid">
          <div className="concept-card">
            <h3>🧩 Components</h3>
            <p>Blok bangunan utama React. Seperti fungsi yang mengembalikan elemen UI.</p>
          </div>
          <div className="concept-card">
            <h3>⚛️ JSX</h3>
            <p>Sintaks khusus yang memungkinkan menulis HTML di dalam JavaScript.</p>
          </div>
          <div className="concept-card">
            <h3>📦 Props</h3>
            <p>Cara untuk mengirim data dari komponen parent ke komponen child.</p>
          </div>
          <div className="concept-card">
            <h3>🔄 State</h3>
            <p>Data yang dapat berubah dalam komponen dan memicu re-render.</p>
          </div>
        </div>
      </div>

      <div className="content-block">
        <h2>📖 Struktur Belajar di Playground Ini</h2>
        <ol className="learning-path">
          <li><strong>JSX</strong> - Pelajari sintaks dasar untuk menulis UI</li>
          <li><strong>Components</strong> - Buat komponen pertama Anda</li>
          <li><strong>Props</strong> - Kirim data antar komponen</li>
          <li><strong>State</strong> - Kelola data yang berubah</li>
          <li><strong>Events</strong> - Tangani interaksi pengguna</li>
          <li><strong>Conditional</strong> - Render berdasarkan kondisi</li>
          <li><strong>Lists</strong> - Render daftar data</li>
        </ol>
      </div>

      <div className="content-block highlight">
        <h2>💡 Tips untuk Pemula</h2>
        <ul>
          <li>Jangan terburu-buru! Pahami setiap konsep sebelum lanjut</li>
          <li>Coba modifikasi setiap contoh yang diberikan</li>
          <li>Baca kode dengan teliti dan pahami alur eksekusinya</li>
          <li>Praktikkan dengan membuat proyek kecil sendiri</li>
          <li>Jangan takut membuat kesalahan - itu bagian dari belajar!</li>
        </ul>
      </div>

      <div className="content-block">
        <h2>🚀 Siap Memulai?</h2>
        <p>
          Klik menu <strong>JSX</strong> di sidebar untuk memulai perjalanan belajar React Anda! 
          Setiap section memiliki penjelasan lengkap, contoh kode, dan playground interaktif 
          yang bisa Anda coba langsung.
        </p>
      </div>
    </div>
  )
}

export default Introduction


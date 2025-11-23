import React, { useState } from 'react'
import './Section.css'
import Tabs from './Tabs'

function Conditional() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState('guest')
  const [score, setScore] = useState(75)
  const [showDetails, setShowDetails] = useState(false)
  const [theme, setTheme] = useState('light')

  const getGrade = (score) => {
    if (score >= 90) return 'A'
    if (score >= 80) return 'B'
    if (score >= 70) return 'C'
    if (score >= 60) return 'D'
    return 'E'
  }

  const getGradeColor = (score) => {
    if (score >= 90) return '#4caf50'
    if (score >= 80) return '#8bc34a'
    if (score >= 70) return '#ffc107'
    if (score >= 60) return '#ff9800'
    return '#f44336'
  }

  return (
    <div className="section">
      <h1>🔀 Conditional Rendering</h1>

      <div className="content-block">
        <h2>🎯 Apa itu Conditional Rendering?</h2>
        <p>
          <strong>Conditional Rendering</strong> adalah teknik untuk menampilkan konten berbeda 
          berdasarkan kondisi tertentu. Di React, kita bisa menggunakan if/else, ternary operator, 
          atau logical && operator untuk conditional rendering.
        </p>
        <p>
          Conditional rendering membuat UI menjadi dinamis dan responsif terhadap state aplikasi.
        </p>
      </div>

      <div className="content-block">
        <h2>💻 Cara Conditional Rendering</h2>
        <div className="code-example">
          <span className="comment">// 1. Menggunakan if/else</span><br/>
          <span className="keyword">if</span> (isLoggedIn) {'{'}<br/>
          &nbsp;&nbsp;<span className="keyword">return</span> &lt;h1&gt;Welcome!&lt;/h1&gt;;<br/>
          {'}'} <span className="keyword">else</span> {'{'}<br/>
          &nbsp;&nbsp;<span className="keyword">return</span> &lt;h1&gt;Please Login&lt;/h1&gt;;<br/>
          {'}'}<br/><br/>
          <span className="comment">// 2. Menggunakan ternary operator</span><br/>
          {'{'}<span className="function">isLoggedIn</span> ? (<br/>
          &nbsp;&nbsp;&lt;h1&gt;Welcome!&lt;/h1&gt;<br/>
          ) : (<br/>
          &nbsp;&nbsp;&lt;h1&gt;Please Login&lt;/h1&gt;<br/>
          ){'}'}<br/><br/>
          <span className="comment">// 3. Menggunakan logical &&</span><br/>
          {'{'}<span className="function">isLoggedIn</span> && &lt;h1&gt;Welcome!&lt;/h1&gt;{'}'}
        </div>
      </div>

      <div className="playground">
        <h3>🎮 Contoh 1: Login Status</h3>
        <Tabs>
          <div className="demo-area">
            <button 
              className="button" 
              onClick={() => setIsLoggedIn(!isLoggedIn)}
            >
              {isLoggedIn ? '🚪 Logout' : '🔐 Login'}
            </button>
            <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: '#f0f0f0', borderRadius: '8px' }}>
              {isLoggedIn ? (
                <div>
                  <h3 style={{ color: '#4caf50' }}>✅ Selamat Datang!</h3>
                  <p>Anda sudah login. Nikmati fitur-fitur yang tersedia.</p>
                </div>
              ) : (
                <div>
                  <h3 style={{ color: '#f44336' }}>❌ Silakan Login</h3>
                  <p>Anda perlu login untuk mengakses konten ini.</p>
                </div>
              )}
          </div>
          </div>
          <div className="code-example">
            <span className="keyword">const</span> [<span className="function">isLoggedIn</span>, <span className="function">setIsLoggedIn</span>] = <span className="function">useState</span>(<span className="string">false</span>);<br/><br/>
            <span className="comment">// Menggunakan ternary operator</span><br/>
            {'{isLoggedIn ? ('}<br/>
            &nbsp;&nbsp;{'<h1>Selamat Datang!</h1>'}<br/>
            ) : (<br/>
            &nbsp;&nbsp;{'<h1>Silakan Login</h1>'}<br/>
            {')}'}
          </div>
        </Tabs>
      </div>

      <div className="playground">
        <h3>🎮 Contoh 2: User Role</h3>
        <p>Pilih role untuk melihat konten berbeda:</p>
        <div className="demo-area">
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Pilih Role:
            </label>
            <select
              className="input"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
              style={{ width: '100%' }}
            >
              <option value="guest">Guest</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div style={{ padding: '1.5rem', background: '#e3f2fd', borderRadius: '8px' }}>
            {userRole === 'admin' && (
              <div>
                <h3 style={{ color: '#1976d2' }}>👑 Admin Dashboard</h3>
                <ul>
                  <li>Kelola semua user</li>
                  <li>Akses ke semua fitur</li>
                  <li>Lihat semua data</li>
                </ul>
              </div>
            )}
            {userRole === 'user' && (
              <div>
                <h3 style={{ color: '#1976d2' }}>👤 User Dashboard</h3>
                <ul>
                  <li>Lihat profil sendiri</li>
                  <li>Edit data pribadi</li>
                  <li>Akses fitur terbatas</li>
                </ul>
              </div>
            )}
            {userRole === 'guest' && (
              <div>
                <h3 style={{ color: '#1976d2' }}>👋 Guest View</h3>
                <p>Silakan login untuk melihat konten lebih banyak.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="playground">
        <h3>🎮 Contoh 3: Score dengan Grade</h3>
        <p>Ubah score untuk melihat grade yang berbeda:</p>
        <div className="demo-area">
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Score: {score}
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={score}
              onChange={(e) => setScore(Number(e.target.value))}
              style={{ width: '100%' }}
            />
          </div>
          <div style={{
            padding: '2rem',
            background: getGradeColor(score),
            color: 'white',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
              {getGrade(score)}
            </h2>
            <p style={{ fontSize: '1.2rem' }}>
              {score >= 90 && 'Excellent! 🌟'}
              {score >= 80 && score < 90 && 'Good Job! 👍'}
              {score >= 70 && score < 80 && 'Not Bad! 😊'}
              {score >= 60 && score < 70 && 'Need Improvement 📚'}
              {score < 60 && 'Keep Learning! 💪'}
            </p>
          </div>
        </div>
      </div>

      <div className="playground">
        <h3>🎮 Contoh 4: Toggle Details</h3>
        <p>Gunakan logical && untuk menampilkan/menyembunyikan konten:</p>
        <div className="demo-area">
          <button 
            className="button" 
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? '🙈 Sembunyikan' : '👁️ Tampilkan'} Detail
          </button>
          {showDetails && (
            <div style={{
              marginTop: '1rem',
              padding: '1.5rem',
              background: '#f0f0f0',
              borderRadius: '8px',
              border: '2px solid #667eea'
            }}>
              <h4>Detail Informasi:</h4>
              <ul>
                <li>Ini adalah contoh penggunaan logical && operator</li>
                <li>Konten ini hanya muncul jika showDetails = true</li>
                <li>Sangat berguna untuk toggle visibility</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="playground">
        <h3>🎮 Contoh 5: Theme Switcher</h3>
        <p>Ubah theme untuk melihat conditional styling:</p>
        <div className="demo-area">
          <div style={{ marginBottom: '1rem' }}>
            <button
              className="button"
              onClick={() => setTheme('light')}
              style={{ 
                background: theme === 'light' ? '#667eea' : '#ccc',
                marginRight: '0.5rem'
              }}
            >
              ☀️ Light
            </button>
            <button
              className="button"
              onClick={() => setTheme('dark')}
              style={{ 
                background: theme === 'dark' ? '#667eea' : '#ccc'
              }}
            >
              🌙 Dark
            </button>
          </div>
          <div style={{
            padding: '2rem',
            background: theme === 'dark' ? '#2d2d2d' : '#ffffff',
            color: theme === 'dark' ? '#ffffff' : '#000000',
            borderRadius: '10px',
            border: `2px solid ${theme === 'dark' ? '#667eea' : '#ccc'}`
          }}>
            <h3>Theme: {theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}</h3>
            <p>Ini adalah contoh conditional styling berdasarkan state.</p>
          </div>
        </div>
      </div>

      <div className="content-block">
        <h2>📋 Kapan Menggunakan Masing-Masing?</h2>
        <div className="concept-grid">
          <div className="concept-card">
            <h3>if/else</h3>
            <p>Untuk logic kompleks atau ketika perlu return berbeda di awal component</p>
          </div>
          <div className="concept-card">
            <h3>Ternary (? :)</h3>
            <p>Untuk pilihan antara dua opsi, lebih ringkas dan inline</p>
          </div>
          <div className="concept-card">
            <h3>Logical &&</h3>
            <p>Untuk menampilkan sesuatu jika kondisi true, atau tidak menampilkan apa-apa</p>
          </div>
        </div>
      </div>

      <div className="content-block highlight">
        <h2>💡 Tips Penting</h2>
        <ul>
          <li>Gunakan <strong>ternary</strong> untuk pilihan antara 2 opsi</li>
          <li>Gunakan <strong>logical &&</strong> untuk conditional rendering sederhana</li>
          <li>Gunakan <strong>if/else</strong> untuk logic yang kompleks</li>
          <li>Hindari nested ternary yang terlalu dalam - buat component terpisah</li>
          <li>Conditional rendering membuat UI lebih interaktif dan dinamis</li>
        </ul>
      </div>
    </div>
  )
}

export default Conditional


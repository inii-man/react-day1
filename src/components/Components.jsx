import React from 'react'
import './Section.css'

// Contoh Functional Component
function Welcome() {
  return <h2>Selamat Datang di React! 🎉</h2>
}

// Component dengan props
function UserCard({ name, role }) {
  return (
    <div style={{ 
      background: '#f0f0f0', 
      padding: '1rem', 
      borderRadius: '8px',
      margin: '0.5rem 0'
    }}>
      <strong>{name}</strong> - {role}
    </div>
  )
}

// Component dengan styling inline
function StyledBox() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '2rem',
      borderRadius: '10px',
      textAlign: 'center',
      margin: '1rem 0'
    }}>
      <h3>Ini adalah Styled Component</h3>
      <p>Menggunakan inline styles</p>
    </div>
  )
}

function Components() {
  return (
    <div className="section">
      <h1>🧩 Components</h1>

      <div className="content-block">
        <h2>🎯 Apa itu Component?</h2>
        <p>
          <strong>Component</strong> adalah blok bangunan utama React. Component seperti fungsi JavaScript 
          yang mengembalikan elemen UI (JSX). Component memungkinkan kita membagi UI menjadi bagian-bagian 
          yang independen, dapat digunakan kembali, dan mudah dirawat.
        </p>
      </div>

      <div className="content-block">
        <h2>📝 Jenis Component</h2>
        <div className="concept-grid">
          <div className="concept-card">
            <h3>Functional Component</h3>
            <p>Component yang ditulis sebagai fungsi JavaScript. Ini adalah cara modern dan direkomendasikan.</p>
          </div>
          <div className="concept-card">
            <h3>Class Component</h3>
            <p>Component yang ditulis sebagai class ES6. Masih didukung tapi jarang digunakan sekarang.</p>
          </div>
        </div>
      </div>

      <div className="content-block">
        <h2>💻 Membuat Functional Component</h2>
        <div className="code-example">
          <span className="comment">// Functional Component sederhana</span><br/>
          <span className="keyword">function</span> <span className="function">MyComponent</span>() {'{'}<br/>
          &nbsp;&nbsp;<span className="keyword">return</span> (<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello from Component!&lt;/h1&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &nbsp;&nbsp;);<br/>
          {'}'}<br/><br/>
          <span className="comment">// Menggunakan component</span><br/>
          &lt;<span className="function">MyComponent</span> /&gt;
        </div>
      </div>

      <div className="playground">
        <h3>🎮 Contoh Component - Live Demo</h3>
        <p>Berikut adalah beberapa contoh component yang sudah dibuat:</p>
        <div className="demo-area">
          <Welcome />
          <UserCard name="Ahmad" role="Frontend Developer" />
          <UserCard name="Siti" role="UI/UX Designer" />
          <UserCard name="Budi" role="Backend Developer" />
          <StyledBox />
        </div>
      </div>

      <div className="content-block">
        <h2>🔧 Kode Component yang Digunakan</h2>
        <div className="code-example">
          <span className="comment">// Component Welcome</span><br/>
          <span className="keyword">function</span> <span className="function">Welcome</span>() {'{'}<br/>
          &nbsp;&nbsp;<span className="keyword">return</span> &lt;h2&gt;Selamat Datang di React! 🎉&lt;/h2&gt;<br/>
          {'}'}<br/><br/>
          <span className="comment">// Component dengan props</span><br/>
          <span className="keyword">function</span> <span className="function">UserCard</span>({'{'}<span className="function">name</span>, <span className="function">role</span>{'}'}) {'{'}<br/>
          &nbsp;&nbsp;<span className="keyword">return</span> (<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;strong&gt;{'{'}<span className="function">name</span>{'}'}&lt;/strong&gt; - {'{'}<span className="function">role</span>{'}'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &nbsp;&nbsp;);<br/>
          {'}'}
        </div>
      </div>

      <div className="content-block">
        <h2>✨ Keuntungan Menggunakan Component</h2>
        <ul className="feature-list">
          <li>♻️ <strong>Reusable</strong> - Bisa digunakan berkali-kali di tempat berbeda</li>
          <li>🧩 <strong>Modular</strong> - Kode terorganisir dan mudah dirawat</li>
          <li>🔍 <strong>Isolated</strong> - Setiap component independen dan terisolasi</li>
          <li>🧪 <strong>Testable</strong> - Mudah diuji secara terpisah</li>
          <li>👥 <strong>Collaborative</strong> - Tim bisa bekerja pada component berbeda</li>
        </ul>
      </div>

      <div className="content-block highlight">
        <h2>💡 Best Practices</h2>
        <ul>
          <li>Beri nama component dengan <strong>PascalCase</strong> (MyComponent, bukan myComponent)</li>
          <li>Buat component kecil dan fokus pada satu tugas</li>
          <li>Gunakan component untuk menghindari duplikasi kode</li>
          <li>Simpan component di file terpisah untuk proyek besar</li>
          <li>Component harus mengembalikan JSX yang valid</li>
        </ul>
      </div>
    </div>
  )
}

export default Components


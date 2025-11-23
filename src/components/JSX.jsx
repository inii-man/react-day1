import React from 'react'
import './Section.css'

function JSX() {
  const name = "React Developer"
  const age = 25
  const isActive = true

  return (
    <div className="section">
      <h1>⚛️ JSX (JavaScript XML)</h1>

      <div className="content-block">
        <h2>🎯 Apa itu JSX?</h2>
        <p>
          JSX adalah <strong>sintaks khusus</strong> yang memungkinkan kita menulis HTML di dalam JavaScript. 
          JSX membuat kode React lebih mudah dibaca dan ditulis. Meskipun terlihat seperti HTML, 
          JSX sebenarnya adalah JavaScript yang dikompilasi menjadi JavaScript biasa.
        </p>
      </div>

      <div className="content-block">
        <h2>📝 Aturan Dasar JSX</h2>
        <ul className="feature-list">
          <li>✅ <strong>Return Single Element</strong> - Harus mengembalikan satu elemen parent</li>
          <li>✅ <strong>Self-Closing Tags</strong> - Tag kosong harus ditutup dengan <code>/&gt;</code></li>
          <li>✅ <strong>className, bukan class</strong> - Gunakan <code>className</code> untuk CSS class</li>
          <li>✅ <strong>JavaScript Expression</strong> - Gunakan <code>{'{ }'}</code> untuk JavaScript</li>
          <li>✅ <strong>camelCase</strong> - Atribut HTML menggunakan camelCase (onClick, onChange)</li>
        </ul>
      </div>

      <div className="content-block">
        <h2>💻 Contoh Kode JSX</h2>
        <div className="code-example">
          <span className="comment">// Contoh JSX sederhana</span><br/>
          <span className="keyword">function</span> <span className="function">Greeting</span>() {'{'}<br/>
          &nbsp;&nbsp;<span className="keyword">return</span> (<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;div className=<span className="string">"container"</span>&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Halo, React!&lt;/h1&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Ini adalah contoh JSX&lt;/p&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &nbsp;&nbsp;);<br/>
          {'}'}
        </div>
      </div>

      <div className="content-block">
        <h2>🔤 Menyisipkan JavaScript di JSX</h2>
        <p>
          Kita bisa menyisipkan ekspresi JavaScript di dalam JSX menggunakan kurung kurawal <code>{'{ }'}</code>.
          Ini memungkinkan kita menampilkan variabel, melakukan perhitungan, atau memanggil fungsi.
        </p>
        
        <div className="code-example">
          <span className="keyword">const</span> name = <span className="string">"John"</span>;<br/>
          <span className="keyword">const</span> age = <span className="string">25</span>;<br/><br/>
          <span className="keyword">return</span> (<br/>
          &nbsp;&nbsp;&lt;div&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Nama: {'{'}<span className="function">name</span>{'}'}&lt;/p&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Umur: {'{'}<span className="function">age</span>{'}'}&lt;/p&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Tahun lahir: {'{'}<span className="function">2024</span> - age{'}'}&lt;/p&gt;<br/>
          &nbsp;&nbsp;&lt;/div&gt;<br/>
          );
        </div>
      </div>

      <div className="playground">
        <h3>🎮 Coba Sendiri - Live Demo</h3>
        <p>Lihat bagaimana JSX menampilkan data JavaScript:</p>
        <div className="demo-area">
          <h3>Halo, {name}! 👋</h3>
          <p>Umur Anda: <strong>{age}</strong> tahun</p>
          <p>Status: <strong>{isActive ? 'Aktif' : 'Tidak Aktif'}</strong></p>
          <p>Perhitungan: {age} × 2 = <strong>{age * 2}</strong></p>
          <p>Tanggal hari ini: <strong>{new Date().toLocaleDateString('id-ID')}</strong></p>
        </div>
      </div>

      <div className="content-block">
        <h2>⚠️ Kesalahan Umum</h2>
        <div className="explanation">
          <strong>❌ SALAH:</strong>
          <div className="code-example">
            <span className="keyword">return</span> (<br/>
            &nbsp;&nbsp;&lt;h1&gt;Judul&lt;/h1&gt;<br/>
            &nbsp;&nbsp;&lt;p&gt;Paragraf&lt;/p&gt;<br/>
            ); <span className="comment">// Error! Multiple elements</span>
          </div>
        </div>

        <div className="explanation">
          <strong>✅ BENAR:</strong>
          <div className="code-example">
            <span className="keyword">return</span> (<br/>
            &nbsp;&nbsp;&lt;div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Judul&lt;/h1&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Paragraf&lt;/p&gt;<br/>
            &nbsp;&nbsp;&lt;/div&gt;<br/>
            ); <span className="comment">// OK! Single parent element</span>
          </div>
        </div>
      </div>

      <div className="content-block highlight">
        <h2>💡 Tips Penting</h2>
        <ul>
          <li>JSX harus dikembalikan dalam satu elemen parent (bisa div, fragment, atau elemen lain)</li>
          <li>Gunakan <code>{'{ }'}</code> untuk JavaScript, bukan untuk string biasa</li>
          <li>Atribut HTML seperti <code>class</code> menjadi <code>className</code> di JSX</li>
          <li>Tag yang tidak memiliki children harus self-closing: <code>&lt;img /&gt;</code></li>
        </ul>
      </div>
    </div>
  )
}

export default JSX


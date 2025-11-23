import React, { useState } from 'react'
import './Section.css'
import Tabs from './Tabs'

function State() {
  // State untuk counter
  const [count, setCount] = useState(0)
  
  // State untuk input text
  const [name, setName] = useState('')
  const [greeting, setGreeting] = useState('')
  
  // State untuk toggle
  const [isVisible, setIsVisible] = useState(true)
  
  // State untuk form
  const [formData, setFormData] = useState({
    email: '',
    age: ''
  })

  const handleShowGreeting = () => {
    if (name.trim()) {
      setGreeting(`Halo, ${name}! Selamat belajar React! 🎉`)
    } else {
      setGreeting('')
    }
  }

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="section">
      <h1>🔄 State</h1>

      <div className="content-block">
        <h2>🎯 Apa itu State?</h2>
        <p>
          <strong>State</strong> adalah data yang dapat berubah dalam komponen React. Ketika state berubah, 
          React akan secara otomatis me-render ulang komponen untuk menampilkan data terbaru. 
          State membuat UI menjadi <strong>interaktif dan dinamis</strong>.
        </p>
        <p>
          State berbeda dengan props: <strong>props</strong> adalah data yang dikirim dari parent, 
          sedangkan <strong>state</strong> adalah data internal komponen yang dapat berubah.
        </p>
      </div>

      <div className="content-block">
        <h2>💻 Menggunakan useState Hook</h2>
        <p>
          <code>useState</code> adalah React Hook yang memungkinkan kita menambahkan state ke functional component.
        </p>
        <div className="code-example">
          <span className="comment">// Import useState</span><br/>
          <span className="keyword">import</span> {'{'} <span className="function">useState</span> {'}'} <span className="keyword">from</span> <span className="string">'react'</span>;<br/><br/>
          <span className="comment">// Deklarasi state</span><br/>
          <span className="keyword">const</span> [<span className="function">count</span>, <span className="function">setCount</span>] = <span className="function">useState</span>(<span className="string">0</span>);<br/><br/>
          <span className="comment">// count = nilai state saat ini</span><br/>
          <span className="comment">// setCount = fungsi untuk mengubah state</span><br/>
          <span className="comment">// 0 = nilai awal state</span>
        </div>
      </div>

      <div className="playground">
        <h3>🎮 Contoh 1: Counter</h3>
        <Tabs>
          <div className="demo-area">
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <h2 style={{ fontSize: '3rem', color: '#667eea', marginBottom: '1rem' }}>
                {count}
              </h2>
              <div>
                <button className="button" onClick={() => setCount(count - 1)}>
                  ➖ Kurangi
                </button>
                <button className="button" onClick={() => setCount(0)}>
                  🔄 Reset
                </button>
                <button className="button" onClick={() => setCount(count + 1)}>
                  ➕ Tambah
                </button>
              </div>
              <p style={{ marginTop: '1rem', color: '#666' }}>
                State saat ini: <strong>{count}</strong>
              </p>
            </div>
          </div>
          <div className="code-example">
            <span className="keyword">const</span> [<span className="function">count</span>, <span className="function">setCount</span>] = <span className="function">useState</span>(<span className="string">0</span>);<br/><br/>
            {'<button onClick={() => setCount(count + 1)}>'}<br/>
            &nbsp;&nbsp;Tambah<br/>
            {'</button>'}
          </div>
        </Tabs>
      </div>

      <div className="playground">
        <h3>🎮 Contoh 2: Input Text</h3>
        <Tabs>
          <div className="demo-area">
            <input
              className="input"
              type="text"
              placeholder="Masukkan nama Anda"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: '300px', marginBottom: '1rem' }}
            />
            <button className="button" onClick={handleShowGreeting}>
              Tampilkan Greeting
            </button>
            {greeting && (
              <div style={{
                marginTop: '1rem',
                padding: '1rem',
                background: '#e3f2fd',
                borderRadius: '8px',
                color: '#1976d2'
              }}>
                {greeting}
              </div>
            )}
            <p style={{ marginTop: '1rem', color: '#666' }}>
              Nama yang diketik: <strong>{name || '(kosong)'}</strong>
            </p>
          </div>
          <div className="code-example">
            <span className="keyword">const</span> [<span className="function">name</span>, <span className="function">setName</span>] = <span className="function">useState</span>(<span className="string">''</span>);<br/><br/>
            {'<input'}<br/>
            &nbsp;&nbsp;type=<span className="string">"text"</span><br/>
            &nbsp;&nbsp;value={'{'}<span className="function">name</span>{'}'}<br/>
            &nbsp;&nbsp;onChange={'{(e) => setName(e.target.value)}'}<br/>
            {'/>'}
          </div>
        </Tabs>
      </div>

      <div className="playground">
        <h3>🎮 Contoh 3: Toggle Visibility</h3>
        <Tabs>
          <div className="demo-area">
            <button className="button" onClick={() => setIsVisible(!isVisible)}>
              {isVisible ? '🙈 Sembunyikan' : '👁️ Tampilkan'}
            </button>
            {isVisible && (
              <div style={{
                marginTop: '1rem',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                borderRadius: '10px'
              }}>
                <h3>Konten yang Bisa Disembunyikan! 🎉</h3>
                <p>State isVisible: <strong>{isVisible.toString()}</strong></p>
              </div>
            )}
          </div>
          <div className="code-example">
            <span className="keyword">const</span> [<span className="function">isVisible</span>, <span className="function">setIsVisible</span>] = <span className="function">useState</span>(<span className="string">true</span>);<br/><br/>
            {'<button onClick={() => setIsVisible(!isVisible)}>'}<br/>
            &nbsp;&nbsp;{'{isVisible ? "Sembunyikan" : "Tampilkan"}'}<br/>
            {'</button>'}<br/><br/>
            {'{isVisible && ('}<br/>
            &nbsp;&nbsp;{'<div>Konten tersembunyi</div>'}<br/>
            {')}'}
          </div>
        </Tabs>
      </div>

      <div className="playground">
        <h3>🎮 Contoh 4: Form dengan Multiple Fields</h3>
        <Tabs>
          <div className="demo-area">
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Email:
              </label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleFormChange}
                style={{ width: '100%' }}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Umur:
              </label>
              <input
                className="input"
                type="number"
                name="age"
                placeholder="25"
                value={formData.age}
                onChange={handleFormChange}
                style={{ width: '100%' }}
              />
            </div>
            <div style={{
              padding: '1rem',
              background: '#f0f0f0',
              borderRadius: '8px',
              marginTop: '1rem'
            }}>
              <strong>Data Form:</strong>
              <pre style={{ marginTop: '0.5rem' }}>
                {JSON.stringify(formData, null, 2)}
              </pre>
            </div>
          </div>
          <div className="code-example">
            <span className="keyword">const</span> [<span className="function">formData</span>, <span className="function">setFormData</span>] = <span className="function">useState</span>({'{'}<br/>
            &nbsp;&nbsp;email: <span className="string">''</span>,<br/>
            &nbsp;&nbsp;age: <span className="string">''</span><br/>
            {'}'});<br/><br/>
            <span className="keyword">const</span> <span className="function">handleFormChange</span> = {'(e) => {'}<br/>
            &nbsp;&nbsp;<span className="function">setFormData</span>({'{'}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;...<span className="function">formData</span>,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;[<span className="function">e</span>.<span className="function">target</span>.<span className="function">name</span>]: <span className="function">e</span>.<span className="function">target</span>.<span className="function">value</span><br/>
            &nbsp;&nbsp;{'}'});<br/>
            {'}'};
          </div>
        </Tabs>
      </div>

      <div className="content-block">
        <h2>📋 Aturan Penting State</h2>
        <ul className="feature-list">
          <li>⚠️ <strong>Jangan Ubah State Langsung</strong> - Selalu gunakan setter function</li>
          <li>🔄 <strong>State Update adalah Async</strong> - Perubahan tidak langsung terjadi</li>
          <li>📦 <strong>State untuk Object/Array</strong> - Buat copy baru, jangan mutate langsung</li>
          <li>🎯 <strong>Lift State Up</strong> - Jika beberapa component butuh state yang sama</li>
          <li>⚡ <strong>Initial State</strong> - Hanya dievaluasi sekali saat pertama render</li>
        </ul>
      </div>

      <div className="content-block highlight">
        <h2>💡 Tips Penting</h2>
        <ul>
          <li>Gunakan <code>useState</code> untuk data yang bisa berubah dan mempengaruhi UI</li>
          <li>Jangan set state di dalam render - akan menyebabkan infinite loop</li>
          <li>Untuk object/array, selalu buat copy baru: <code>setData({'{'}...data, newValue{'}'})</code></li>
            <li>State update bisa menggunakan function: <code>{'setCount(prev => prev + 1)'}</code></li>
          <li>Setiap component memiliki state sendiri - state terisolasi per component</li>
        </ul>
      </div>
    </div>
  )
}

export default State


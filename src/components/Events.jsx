import React, { useState } from 'react'
import './Section.css'
import Tabs from './Tabs'

function Events() {
  const [message, setMessage] = useState('Klik tombol untuk melihat event!')
  const [clickCount, setClickCount] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [inputValue, setInputValue] = useState('')
  const [selectedColor, setSelectedColor] = useState('#667eea')
  const [formData, setFormData] = useState({ name: '', email: '' })

  const handleClick = () => {
    setMessage('Tombol diklik! 🎉')
    setClickCount(clickCount + 1)
  }

  const handleDoubleClick = () => {
    setMessage('Double click terdeteksi! 👆👆')
  }

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Form submitted!\nNama: ${formData.name}\nEmail: ${formData.email}`)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe', '#43e97b', '#fa709a']

  return (
    <div className="section">
      <h1>🎯 Events</h1>

      <div className="content-block">
        <h2>🎯 Apa itu Events?</h2>
        <p>
          <strong>Events</strong> adalah cara React menangani interaksi pengguna seperti klik, 
          ketikan keyboard, hover mouse, dan lainnya. Event handler adalah fungsi yang dijalankan 
          ketika event tertentu terjadi.
        </p>
        <p>
          Di React, event handler ditulis dengan sintaks <code>onEvent</code> (camelCase) 
          dan menerima function sebagai value.
        </p>
      </div>

      <div className="content-block">
        <h2>💻 Sintaks Event Handler</h2>
        <div className="code-example">
          <span className="comment">// 1. Inline function</span><br/>
          {'<button onClick={() => alert(\'Clicked!\')}>'}<br/>
          &nbsp;&nbsp;Click Me<br/>
          {'</button>'}<br/><br/>
          <span className="comment">// 2. Reference function</span><br/>
          <span className="keyword">function</span> <span className="function">handleClick</span>() {'{'}<br/>
          &nbsp;&nbsp;<span className="function">alert</span>(<span className="string">'Clicked!'</span>);<br/>
          {'}'}<br/><br/>
          {'<button onClick={handleClick}>'}<br/>
          &nbsp;&nbsp;Click Me<br/>
          {'</button>'}
        </div>
      </div>

      <div className="playground">
        <h3>🎮 Contoh 1: Click Event</h3>
        <Tabs>
          <div className="demo-area">
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#667eea' }}>
                {message}
              </p>
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                Jumlah klik: <strong>{clickCount}</strong>
              </p>
              <button className="button" onClick={handleClick}>
                Klik Saya! 👆
              </button>
              <button className="button" onDoubleClick={handleDoubleClick}>
                Double Click Saya! 👆👆
              </button>
            </div>
          </div>
          <div className="code-example">
            <span className="comment">// State untuk tracking</span><br/>
            <span className="keyword">const</span> [<span className="function">message</span>, <span className="function">setMessage</span>] = <span className="function">useState</span>(<span className="string">'Klik tombol untuk melihat event!'</span>);<br/>
            <span className="keyword">const</span> [<span className="function">clickCount</span>, <span className="function">setClickCount</span>] = <span className="function">useState</span>(<span className="string">0</span>);<br/><br/>
            <span className="comment">// Event handler</span><br/>
            <span className="keyword">const</span> <span className="function">handleClick</span> = {'() => {'}<br/>
            &nbsp;&nbsp;<span className="function">setMessage</span>(<span className="string">'Tombol diklik! 🎉'</span>);<br/>
            &nbsp;&nbsp;<span className="function">setClickCount</span>(<span className="function">clickCount</span> + <span className="string">1</span>);<br/>
            {'}'};<br/><br/>
            <span className="comment">// JSX dengan event handler</span><br/>
            {'<button onClick={handleClick}>'}<br/>
            &nbsp;&nbsp;Klik Saya! 👆<br/>
            {'</button>'}
          </div>
        </Tabs>
      </div>

      <div className="playground">
        <h3>🎮 Contoh 2: Mouse Events</h3>
        <Tabs>
          <div 
            className="demo-area"
            onMouseMove={handleMouseMove}
            style={{ 
              minHeight: '200px',
              background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column'
            }}
          >
            <p style={{ fontSize: '1.5rem', color: '#667eea', marginBottom: '1rem' }}>
              🖱️ Gerakkan Mouse
            </p>
            <p style={{ color: '#666' }}>
              X: <strong>{mousePosition.x}</strong> | Y: <strong>{mousePosition.y}</strong>
            </p>
          </div>
          <div className="code-example">
            <span className="keyword">const</span> [<span className="function">mousePosition</span>, <span className="function">setMousePosition</span>] = <span className="function">useState</span>({'{'} x: <span className="string">0</span>, y: <span className="string">0</span> {'}'});<br/><br/>
            <span className="keyword">const</span> <span className="function">handleMouseMove</span> = {'(e) => {'}<br/>
            &nbsp;&nbsp;<span className="function">setMousePosition</span>({'{'}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;x: <span className="function">e</span>.<span className="function">clientX</span>,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;y: <span className="function">e</span>.<span className="function">clientY</span><br/>
            &nbsp;&nbsp;{'}'});<br/>
            {'}'};<br/><br/>
            {'<div onMouseMove={handleMouseMove}>'}<br/>
            &nbsp;&nbsp;X: {'{'}<span className="function">mousePosition</span>.<span className="function">x</span>{'}'} | Y: {'{'}<span className="function">mousePosition</span>.<span className="function">y</span>{'}'}<br/>
            {'</div>'}
          </div>
        </Tabs>
      </div>

      <div className="playground">
        <h3>🎮 Contoh 3: Input Events</h3>
        <Tabs>
          <div className="demo-area">
            <input
              className="input"
              type="text"
              placeholder="Ketik sesuatu di sini..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={() => setMessage('Input sedang fokus! 👀')}
              onBlur={() => setMessage('Input kehilangan fokus')}
              style={{ width: '100%', marginBottom: '1rem' }}
            />
            <div style={{
              padding: '1rem',
              background: '#f0f0f0',
              borderRadius: '8px'
            }}>
              <strong>Nilai input:</strong> <code>{inputValue || '(kosong)'}</code>
            </div>
            <p style={{ marginTop: '1rem', color: '#666', fontSize: '0.9rem' }}>
              Panjang karakter: <strong>{inputValue.length}</strong>
            </p>
          </div>
          <div className="code-example">
            <span className="keyword">const</span> [<span className="function">inputValue</span>, <span className="function">setInputValue</span>] = <span className="function">useState</span>(<span className="string">''</span>);<br/><br/>
            {'<input'}<br/>
            &nbsp;&nbsp;type=<span className="string">"text"</span><br/>
            &nbsp;&nbsp;value={'{'}<span className="function">inputValue</span>{'}'}<br/>
            &nbsp;&nbsp;onChange={'{(e) => setInputValue(e.target.value)}'}<br/>
            &nbsp;&nbsp;onFocus={'{() => console.log(\'Focused!\')}'}<br/>
            &nbsp;&nbsp;onBlur={'{() => console.log(\'Blurred!\')}'}<br/>
            {'/>'}
          </div>
        </Tabs>
      </div>

      <div className="playground">
        <h3>🎮 Contoh 4: Form Submit</h3>
        <Tabs>
          <div className="demo-area">
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Nama:
                </label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{ width: '100%' }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Email:
                </label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{ width: '100%' }}
                />
              </div>
              <button type="submit" className="button" style={{ width: '100%' }}>
                Submit Form 📤
              </button>
            </form>
          </div>
          <div className="code-example">
            <span className="keyword">const</span> [<span className="function">formData</span>, <span className="function">setFormData</span>] = <span className="function">useState</span>({'{'} name: <span className="string">''</span>, email: <span className="string">''</span> {'}'});<br/><br/>
            <span className="keyword">const</span> <span className="function">handleSubmit</span> = {'(e) => {'}<br/>
            &nbsp;&nbsp;<span className="function">e</span>.<span className="function">preventDefault</span>(); <span className="comment">// Mencegah reload halaman</span><br/>
            &nbsp;&nbsp;<span className="function">console</span>.<span className="function">log</span>(<span className="function">formData</span>);<br/>
            {'}'};<br/><br/>
            <span className="keyword">const</span> <span className="function">handleInputChange</span> = {'(e) => {'}<br/>
            &nbsp;&nbsp;<span className="function">setFormData</span>({'{'}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;...<span className="function">formData</span>,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;[<span className="function">e</span>.<span className="function">target</span>.<span className="function">name</span>]: <span className="function">e</span>.<span className="function">target</span>.<span className="function">value</span><br/>
            &nbsp;&nbsp;{'}'});<br/>
            {'}'};<br/><br/>
            {'<form onSubmit={handleSubmit}>'}<br/>
            &nbsp;&nbsp;{'<input name="name" onChange={handleInputChange} />'}<br/>
            &nbsp;&nbsp;{'<button type="submit">Submit</button>'}<br/>
            {'</form>'}
          </div>
        </Tabs>
      </div>

      <div className="playground">
        <h3>🎮 Contoh 5: Color Picker</h3>
        <Tabs>
          <div className="demo-area">
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Pilih Warna:
              </label>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      border: selectedColor === color ? '4px solid #333' : '2px solid #ccc',
                      background: color,
                      cursor: 'pointer',
                      transition: 'transform 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                ))}
              </div>
            </div>
            <div style={{
              padding: '2rem',
              background: selectedColor,
              borderRadius: '10px',
              color: 'white',
              textAlign: 'center',
              marginTop: '1rem'
            }}>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                Warna yang dipilih: {selectedColor}
              </p>
            </div>
          </div>
          <div className="code-example">
            <span className="keyword">const</span> <span className="function">colors</span> = [<span className="string">'#667eea'</span>, <span className="string">'#764ba2'</span>, <span className="string">'#f093fb'</span>];<br/>
            <span className="keyword">const</span> [<span className="function">selectedColor</span>, <span className="function">setSelectedColor</span>] = <span className="function">useState</span>(<span className="string">'#667eea'</span>);<br/><br/>
            {'{colors.map((color) => ('}<br/>
            &nbsp;&nbsp;{'<button'}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;key={'{'}<span className="function">color</span>{'}'}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;onClick={'{() => setSelectedColor(color)}'}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;style={'{{'} background: <span className="function">color</span> {'}}'}<br/>
            &nbsp;&nbsp;{'/>'}<br/>
            {'))}'}
          </div>
        </Tabs>
      </div>

      <div className="content-block">
        <h2>📋 Event Types yang Umum</h2>
        <div className="concept-grid">
          <div className="concept-card">
            <h3>🖱️ Mouse Events</h3>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem' }}>
              <li>• onClick</li>
              <li>• onDoubleClick</li>
              <li>• onMouseEnter</li>
              <li>• onMouseLeave</li>
              <li>• onMouseMove</li>
            </ul>
          </div>
          <div className="concept-card">
            <h3>⌨️ Keyboard Events</h3>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem' }}>
              <li>• onKeyDown</li>
              <li>• onKeyUp</li>
              <li>• onKeyPress</li>
            </ul>
          </div>
          <div className="concept-card">
            <h3>📝 Form Events</h3>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem' }}>
              <li>• onChange</li>
              <li>• onSubmit</li>
              <li>• onFocus</li>
              <li>• onBlur</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-block highlight">
        <h2>💡 Tips Penting</h2>
        <ul>
          <li>Gunakan <code>e.preventDefault()</code> untuk mencegah behavior default (seperti form submit)</li>
          <li>Event object (<code>e</code>) berisi informasi tentang event yang terjadi</li>
          <li>Gunakan <code>e.target.value</code> untuk mendapatkan nilai dari input</li>
          <li>Nama event handler menggunakan <strong>camelCase</strong> (onClick, bukan onclick)</li>
          <li>Jangan panggil function dengan <code>()</code> di event handler - pass reference saja</li>
        </ul>
      </div>
    </div>
  )
}

export default Events


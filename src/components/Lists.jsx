import React, { useState } from 'react'
import './Section.css'
import Tabs from './Tabs'

function Lists() {
  const [items, setItems] = useState([
    { id: 1, name: 'Belajar React', completed: false },
    { id: 2, name: 'Buat Project', completed: false },
    { id: 3, name: 'Deploy ke Production', completed: false }
  ])

  const [newItem, setNewItem] = useState('')
  const [students] = useState([
    { id: 1, name: 'Ahmad', score: 85 },
    { id: 2, name: 'Siti', score: 92 },
    { id: 3, name: 'Budi', score: 78 },
    { id: 4, name: 'Dewi', score: 95 }
  ])

  const [products] = useState([
    { id: 1, name: 'Laptop', price: 10000000, category: 'Electronics' },
    { id: 2, name: 'Mouse', price: 250000, category: 'Electronics' },
    { id: 3, name: 'Keyboard', price: 500000, category: 'Electronics' },
    { id: 4, name: 'Desk', price: 1500000, category: 'Furniture' }
  ])

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, {
        id: items.length + 1,
        name: newItem,
        completed: false
      }])
      setNewItem('')
    }
  }

  const toggleComplete = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ))
  }

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <div className="section">
      <h1>📋 Lists & Keys</h1>

      <div className="content-block">
        <h2>🎯 Rendering Lists di React</h2>
        <p>
          Di React, kita sering perlu menampilkan daftar data. Untuk ini, kita menggunakan 
          method <code>map()</code> untuk mengubah array data menjadi array elemen JSX. 
          Setiap elemen dalam list harus memiliki <strong>key</strong> yang unik.
        </p>
      </div>

      <div className="content-block">
        <h2>💻 Sintaks Dasar</h2>
        <div className="code-example">
          <span className="keyword">const</span> names = [<span className="string">'Ahmad'</span>, <span className="string">'Siti'</span>, <span className="string">'Budi'</span>];<br/><br/>
          <span className="keyword">return</span> (<br/>
          {'  <ul>'}<br/>
          {'    {names.map((name, index) => ('}<br/>
          {'      <li key={index}>{name}</li>'}<br/>
          {'    ))}'}<br/>
          {'  </ul>'}<br/>
          );
        </div>
      </div>

      <div className="content-block">
        <h2>🔑 Mengapa Key Penting?</h2>
        <p>
          <strong>Key</strong> membantu React mengidentifikasi item mana yang berubah, ditambahkan, 
          atau dihapus. Key harus unik di antara siblings dan stabil (tidak berubah).
        </p>
        <ul className="feature-list">
          <li>✅ <strong>Gunakan ID unik</strong> - Key terbaik adalah ID dari data</li>
          <li>⚠️ <strong>Hindari index sebagai key</strong> - Hanya jika list tidak berubah urutannya</li>
          <li>🔑 <strong>Key harus unik</strong> - Tidak boleh duplikat dalam list yang sama</li>
        </ul>
      </div>

      <div className="playground">
        <h3>🎮 Contoh 1: Simple List</h3>
        <p>Daftar nama sederhana:</p>
        <div className="demo-area">
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {['Ahmad', 'Siti', 'Budi', 'Dewi'].map((name, index) => (
              <li 
                key={index}
                style={{
                  padding: '0.75rem',
                  margin: '0.5rem 0',
                  background: '#f0f0f0',
                  borderRadius: '8px',
                  borderLeft: '4px solid #667eea'
                }}
              >
                👤 {name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="playground">
        <h3>🎮 Contoh 2: Todo List (Interactive)</h3>
        <Tabs>
          <div className="demo-area">
            <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
              <input
                className="input"
                type="text"
                placeholder="Tambah item baru..."
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addItem()}
                style={{ flex: 1 }}
              />
              <button className="button" onClick={addItem}>
                ➕ Tambah
              </button>
            </div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {items.map((item) => (
                <li
                  key={item.id}
                  style={{
                    padding: '1rem',
                    margin: '0.5rem 0',
                    background: item.completed ? '#e8f5e9' : '#fff3e0',
                    borderRadius: '8px',
                    border: `2px solid ${item.completed ? '#4caf50' : '#ff9800'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span
                    onClick={() => toggleComplete(item.id)}
                    style={{
                      textDecoration: item.completed ? 'line-through' : 'none',
                      color: item.completed ? '#666' : '#333',
                      cursor: 'pointer',
                      flex: 1
                    }}
                  >
                    {item.completed ? '✅' : '⭕'} {item.name}
                  </span>
                  <button
                    onClick={() => deleteItem(item.id)}
                    style={{
                      background: '#f44336',
                      color: 'white',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '5px',
                      cursor: 'pointer'
                    }}
                  >
                    🗑️ Hapus
                  </button>
                </li>
              ))}
            </ul>
            {items.length === 0 && (
              <p style={{ textAlign: 'center', color: '#999', padding: '2rem' }}>
                Tidak ada item. Tambahkan item baru!
              </p>
            )}
          </div>
          <div className="code-example">
            <span className="keyword">const</span> [<span className="function">items</span>, <span className="function">setItems</span>] = <span className="function">useState</span>([]);<br/><br/>
            <span className="keyword">const</span> <span className="function">addItem</span> = {'() => {'}<br/>
            &nbsp;&nbsp;<span className="function">setItems</span>([...<span className="function">items</span>, {'{'}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;id: <span className="function">items</span>.<span className="function">length</span> + <span className="string">1</span>,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;name: <span className="function">newItem</span><br/>
            &nbsp;&nbsp;{'}'}]);<br/>
            {'}'};<br/><br/>
            {'{items.map((item) => ('}<br/>
            &nbsp;&nbsp;{'<li key={item.id}>'}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;{'{item.name}'}<br/>
            &nbsp;&nbsp;{'</li>'}<br/>
            {'))}'}
          </div>
        </Tabs>
      </div>

      <div className="playground">
        <h3>🎮 Contoh 3: Student List dengan Data Object</h3>
        <p>List dengan data object yang lebih kompleks:</p>
        <div className="demo-area">
          <div style={{ display: 'grid', gap: '1rem' }}>
            {students.map((student) => (
              <div
                key={student.id}
                style={{
                  padding: '1.5rem',
                  background: student.score >= 90 ? '#e8f5e9' : student.score >= 80 ? '#fff3e0' : '#ffebee',
                  borderRadius: '10px',
                  border: `2px solid ${student.score >= 90 ? '#4caf50' : student.score >= 80 ? '#ff9800' : '#f44336'}`
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ margin: 0, color: '#333' }}>👤 {student.name}</h3>
                    <p style={{ margin: '0.5rem 0 0 0', color: '#666' }}>
                      Score: <strong>{student.score}</strong>
                    </p>
                  </div>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: student.score >= 90 ? '#4caf50' : student.score >= 80 ? '#ff9800' : '#f44336'
                  }}>
                    {student.score >= 90 ? '🌟' : student.score >= 80 ? '👍' : '📚'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="playground">
        <h3>🎮 Contoh 4: Product List dengan Filter</h3>
        <p>List produk dengan kategori:</p>
        <div className="demo-area">
          <div style={{ display: 'grid', gap: '1rem' }}>
            {products.map((product) => (
              <div
                key={product.id}
                style={{
                  padding: '1.5rem',
                  background: 'white',
                  borderRadius: '10px',
                  border: '2px solid #667eea',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                  <div>
                    <h3 style={{ margin: 0, color: '#667eea' }}>🛍️ {product.name}</h3>
                    <p style={{ margin: '0.5rem 0', color: '#666' }}>
                      Kategori: <strong>{product.category}</strong>
                    </p>
                    <p style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold', color: '#764ba2' }}>
                      Rp {product.price.toLocaleString('id-ID')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="content-block">
        <h2>📋 Best Practices</h2>
        <ul className="feature-list">
          <li>🔑 <strong>Gunakan ID sebagai key</strong> - Jika data memiliki ID unik</li>
          <li>📝 <strong>Key harus stabil</strong> - Jangan gunakan random atau index yang berubah</li>
          <li>🎯 <strong>Key hanya untuk siblings</strong> - Key hanya perlu unik dalam list yang sama</li>
          <li>⚡ <strong>Optimasi dengan key</strong> - React menggunakan key untuk optimasi re-render</li>
          <li>🧹 <strong>Bersihkan key</strong> - Key tidak muncul di props component</li>
        </ul>
      </div>

      <div className="content-block highlight">
        <h2>💡 Tips Penting</h2>
        <ul>
          <li>Selalu gunakan <code>map()</code> untuk render list, bukan <code>for</code> loop</li>
          <li>Key harus unik dan stabil - gunakan ID dari data jika memungkinkan</li>
          <li>Hindari menggunakan index sebagai key jika list bisa berubah urutan</li>
          <li>Gunakan conditional rendering di dalam map untuk filter data</li>
          <li>List rendering sangat powerful untuk membuat UI dinamis dari data</li>
        </ul>
      </div>
    </div>
  )
}

export default Lists


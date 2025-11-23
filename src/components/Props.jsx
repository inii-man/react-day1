import React from "react";
import "./Section.css";
import Tabs from "./Tabs";

// Component yang menerima props
function ProductCard({ name, price, description, inStock }) {
  return (
    <div
      style={{
        border: "2px solid #667eea",
        borderRadius: "10px",
        padding: "1.5rem",
        margin: "1rem 0",
        background: inStock ? "#f0f8ff" : "#ffe0e0",
      }}
    >
      <h3 style={{ color: "#667eea", marginBottom: "0.5rem" }}>{name}</h3>
      <p style={{ color: "#666", marginBottom: "0.5rem" }}>{description}</p>
      <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#764ba2" }}>
        Rp {price.toLocaleString("id-ID")}
      </p>
      <p
        style={{
          color: inStock ? "green" : "red",
          fontWeight: "bold",
        }}
      >
        {inStock ? "✅ Tersedia" : "❌ Habis"}
      </p>
    </div>
  );
}

// Component dengan default props
function Greeting({ name = "Pengunjung", time = "pagi" }) {
  const greetings = {
    pagi: "Selamat Pagi",
    siang: "Selamat Siang",
    sore: "Selamat Sore",
    malam: "Selamat Malam",
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        padding: "1.5rem",
        borderRadius: "10px",
        textAlign: "center",
        margin: "1rem 0",
      }}
    >
      <h2>
        {greetings[time]}, {name}! 👋
      </h2>
    </div>
  );
}

function Props() {
  return (
    <div className="section">
      <h1>📦 Props</h1>

      <div className="content-block">
        <h2>🎯 Apa itu Props?</h2>
        <p>
          <strong>Props</strong> (singkatan dari <em>properties</em>) adalah
          cara untuk mengirim data dari komponen parent ke komponen child. Props
          membuat component menjadi fleksibel dan dapat digunakan kembali dengan
          data yang berbeda.
        </p>
        <p>
          Props adalah <strong>read-only</strong> - komponen child tidak bisa
          mengubah props yang diterima. Ini membuat data flow menjadi
          predictable dan mudah di-debug.
        </p>
      </div>

      <div className="content-block">
        <h2>💻 Cara Menggunakan Props</h2>
        <div className="code-example">
          <span className="comment">
            // 1. Definisikan component yang menerima props
          </span>
          <br />
          <span className="keyword">function</span>{" "}
          <span className="function">Welcome</span>({"{"}
          <span className="function">props</span>
          {"}"}) {"{"}
          <br />
          &nbsp;&nbsp;<span className="keyword">
            return
          </span> &lt;h1&gt;Halo, {"{"}
          <span className="function">props</span>.
          <span className="function">name</span>
          {"}"}!&lt;/h1&gt;;
          <br />
          {"}"}
          <br />
          <br />
          <span className="comment">
            // 2. Destructuring props (cara yang lebih umum)
          </span>
          <br />
          <span className="keyword">function</span>{" "}
          <span className="function">Welcome</span>({"{"}
          <span className="function">name</span>
          {"}"}) {"{"}
          <br />
          &nbsp;&nbsp;<span className="keyword">
            return
          </span> &lt;h1&gt;Halo, {"{"}
          <span className="function">name</span>
          {"}"}!&lt;/h1&gt;;
          <br />
          {"}"}
          <br />
          <br />
          <span className="comment">
            // 3. Menggunakan component dengan props
          </span>
          <br />
          &lt;<span className="function">Welcome</span> name=
          <span className="string">"Ahmad"</span> /&gt;
        </div>
      </div>

      <div className="playground">
        <h3>🎮 Contoh 1: ProductCard dengan Props</h3>
        <Tabs>
          <div className="demo-area">
            <ProductCard
              name="Laptop Gaming"
              price={15000000}
              description="Laptop dengan spesifikasi tinggi untuk gaming"
              inStock={true}
            />
            <ProductCard
              name="Mouse Wireless"
              price={250000}
              description="Mouse ergonomis dengan koneksi wireless"
              inStock={false}
            />
            <ProductCard
              name="Keyboard Mechanical"
              price={1200000}
              description="Keyboard dengan switch mechanical yang responsif"
              inStock={true}
            />
          </div>
          <div className="code-example">
            <span className="comment">// Component yang menerima props</span>
            <br />
            <span className="keyword">function</span>{" "}
            <span className="function">ProductCard</span>({"{"}
            <br />
            &nbsp;&nbsp;<span className="function">name</span>,<br />
            &nbsp;&nbsp;<span className="function">price</span>,<br />
            &nbsp;&nbsp;<span className="function">description</span>,<br />
            &nbsp;&nbsp;<span className="function">inStock</span>
            <br />
            {"}"}) {"{"}
            <br />
            &nbsp;&nbsp;<span className="keyword">return</span> (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{"<div>"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<h3>{name}</h3>"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<p>{description}</p>"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {"<p>Rp {price.toLocaleString('id-ID')}</p>"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {"<p>{inStock ? 'Tersedia' : 'Habis'}</p>"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{"</div>"}
            <br />
            &nbsp;&nbsp;);
            <br />
            {"}"}
            <br />
            <br />
            <span className="comment">
              // Menggunakan component dengan props
            </span>
            <br />
            {"<ProductCard"}
            <br />
            &nbsp;&nbsp;name=<span className="string">"Laptop Gaming"</span>
            <br />
            &nbsp;&nbsp;price={"{"}
            <span className="string">15000000</span>
            {"}"}
            <br />
            &nbsp;&nbsp;description=
            <span className="string">"Laptop dengan spesifikasi tinggi"</span>
            <br />
            &nbsp;&nbsp;inStock={"{"}
            <span className="string">true</span>
            {"}"}
            <br />
            {"/>"}
          </div>
        </Tabs>
      </div>

      <div className="playground">
        <h3>🎮 Contoh 2: Default Props</h3>
        <Tabs>
          <div className="demo-area">
            <Greeting name="Ahmad" time="pagi" />
            <Greeting name="Siti" time="siang" />
            <Greeting name="Budi" time="sore" />
            <Greeting /> {/* Menggunakan default values */}
          </div>
          <div className="code-example">
            <span className="comment">// Component dengan default props</span>
            <br />
            <span className="keyword">function</span>{" "}
            <span className="function">Greeting</span>({"{"}
            <br />
            &nbsp;&nbsp;<span className="function">name</span> ={" "}
            <span className="string">"Pengunjung"</span>,<br />
            &nbsp;&nbsp;<span className="function">time</span> ={" "}
            <span className="string">"pagi"</span>
            <br />
            {"}"}) {"{"}
            <br />
            &nbsp;&nbsp;<span className="keyword">const</span>{" "}
            <span className="function">greetings</span> = {"{"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;pagi:{" "}
            <span className="string">"Selamat Pagi"</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;siang:{" "}
            <span className="string">"Selamat Siang"</span>
            <br />
            &nbsp;&nbsp;{"}"};<br />
            <br />
            &nbsp;&nbsp;<span className="keyword">return</span>{" "}
            {"<h2>{greetings[time]}, {name}!</h2>"};<br />
            {"}"}
            <br />
            <br />
            <span className="comment">// Menggunakan dengan props</span>
            <br />
            {'<Greeting name="Ahmad" time="pagi" />'}
            <br />
            <br />
            <span className="comment">// Menggunakan default values</span>
            <br />
            {"<Greeting />"}
          </div>
        </Tabs>
      </div>

      <div className="content-block">
        <h2>📋 Jenis Data Props</h2>
        <p>Props bisa menerima berbagai jenis data:</p>
        <ul className="feature-list">
          <li>
            📝 <strong>String</strong> - <code>name="Ahmad"</code>
          </li>
          <li>
            🔢 <strong>Number</strong> - <code>age={25}</code>
          </li>
          <li>
            ✅ <strong>Boolean</strong> - <code>isActive={true}</code>
          </li>
          <li>
            📦 <strong>Array</strong> - <code>items={[1, 2, 3]}</code>
          </li>
          <li>
            🗂️ <strong>Object</strong> -{" "}
            <code>
              user={"{"}
              {"}"}name: "Ahmad"{"}"}
            </code>
          </li>
          <li>
            ⚡ <strong>Function</strong> -{" "}
            <code>{"onClick={handleClick}"}</code>
          </li>
        </ul>
      </div>

      <div className="content-block highlight">
        <h2>💡 Tips Penting</h2>
        <ul>
          <li>
            Props adalah <strong>read-only</strong> - jangan coba mengubahnya di
            dalam component
          </li>
          <li>
            Gunakan <strong>destructuring</strong> untuk membuat kode lebih
            bersih
          </li>
          <li>
            Berikan <strong>default values</strong> untuk props yang opsional
          </li>
          <li>
            Nama props harus menggunakan <strong>camelCase</strong>
          </li>
          <li>
            Props membuat component <strong>reusable</strong> dengan data
            berbeda
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Props;

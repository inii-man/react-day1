import React, { useState } from "react";
import "./App.css";
import Introduction from "./components/Introduction";
import Components from "./components/Components";
import JSX from "./components/JSX";
import Props from "./components/Props";
import State from "./components/State";
import Events from "./components/Events";
import Conditional from "./components/Conditional";
import Lists from "./components/Lists";

function App() {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", name: "Pengenalan", icon: "📚" },
    { id: "jsx", name: "JSX", icon: "⚛️" },
    { id: "components", name: "Components", icon: "🧩" },
    { id: "props", name: "Props", icon: "📦" },
    { id: "state", name: "State", icon: "🔄" },
    { id: "events", name: "Events", icon: "🎯" },
    { id: "conditional", name: "Conditional", icon: "🔀" },
    { id: "lists", name: "Lists", icon: "📋" },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "introduction":
        return <Introduction />;
      case "jsx":
        return <JSX />;
      case "components":
        return <Components />;
      case "props":
        return <Props />;
      case "state":
        return <State />;
      case "events":
        return <Events />;
      case "conditional":
        return <Conditional />;
      case "lists":
        return <Lists />;
      default:
        return <Introduction />;
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>⚛️ React Playground</h1>
      </header>

      <div className="container">
        <nav className="sidebar">
          <ul className="nav-list">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  className={`nav-button ${
                    activeSection === section.id ? "active" : ""
                  }`}
                  onClick={() => setActiveSection(section.id)}
                >
                  <span className="nav-icon">{section.icon}</span>
                  <span className="nav-text">{section.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <main className="content">{renderSection()}</main>
      </div>

      <footer className="footer">
        <p>
          💡 Tips: Coba semua contoh dan modifikasi kodenya untuk memahami lebih
          dalam!
        </p>
      </footer>
    </div>
  );
}

export default App;

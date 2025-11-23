import React, { useState } from 'react'
import './Section.css'

function Tabs({ children, labels = ['Try It', 'Code'] }) {
  const [activeTab, setActiveTab] = useState(0)
  
  // Convert children to array to handle React children properly
  const childrenArray = React.Children.toArray(children)

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {labels.map((label, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {childrenArray[activeTab] || childrenArray[0]}
      </div>
    </div>
  )
}

export default Tabs


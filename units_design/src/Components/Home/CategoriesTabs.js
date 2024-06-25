import React, { useState } from "react";
import "./CategoriesTabs.css";

export default function CategoriesTabs({ config }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="categoryTab">
      <div className="categoryTab-headers">
        {config.map((item, index) => (
          <div
            key={index}
            className={`categoryTab-header ${
              activeTab === index ? "active" : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {item.header}
          </div>
        ))}
      </div>

      <div className="categoryTab-body">{config[activeTab].content}</div>
    </div>
  );
}

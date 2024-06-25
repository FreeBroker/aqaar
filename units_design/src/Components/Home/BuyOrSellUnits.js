import React, { useEffect, useState } from "react";
import "./BuyOrSellUnits.css";

export default function BuyOrSellUnits({ config }) {
  const [activeTab, setActiveTab] = useState(0);
  const [dir, setDir] = useState('rtl');

  useEffect(() => {
    if (document.body.dir === 'rtl') {
      setDir('rtl')
    }
    else setDir('ltr')
  }, [])
  return (
    <div className="tab">
      <div className="tab-headers">
        {config.map((item, index) => (
          <div
            key={index}
            className={`tab-header ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {item.header}
          </div>
        ))}
      </div>

      <div className={`${dir === 'rtl' ? 'dir-right' : 'dir-left'} tab-body`}>{config[activeTab].content}</div>
    </div>
  );
}

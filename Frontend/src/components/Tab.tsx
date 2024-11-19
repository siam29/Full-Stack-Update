// src/components/Tab.tsx
"use client";

import { useState } from "react";

export default function Tab() {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Amenities", "Policies"];

  return (
    <div className="border-b border-gray-200 container mx-auto p-4">
      <nav className="flex space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 font-medium ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
}

"use client";

import { useState } from "react";

type AboutThisPropertyProps = {
  hotel: {
    title: string;
    description: string;
    //rating: number;
    images: string[];
  };
};

export default function AboutThisProperty({ hotel }: AboutThisPropertyProps) {
  const [showShareModal, setShowShareModal] = useState(false);

  const socialMediaLinks = [
    { name: "Messages", icon: "💬" },
    { name: "WhatsApp", icon: "📱" },
    { name: "Messenger", icon: "📨" },
    { name: "Facebook", icon: "📘" },
    { name: "X", icon: "❌" },
    { name: "Copy Link", icon: "🔗" },
  ];

  return (
    <div>
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Share</h3>
              <button
                className="text-gray-600 hover:text-black"
                onClick={() => setShowShareModal(false)}
              >
                ✖
              </button>
            </div>
            <div className="mt-4">
              <img
                src={`http://localhost:8000${image}`}
                alt={hotel.title}
                className="rounded-lg mb-4 w-full"
              />
              <h4 className="text-lg font-bold">{hotel.title}</h4>
              <p className="text-gray-500">Rating: {hotel.rating}/10</p>
              <div className="grid grid-cols-3 gap-4 mt-4">
                {socialMediaLinks.map((link, index) => (
                  <button
                    key={index}
                    className="flex flex-col items-center justify-center p-2 border border-gray-300 rounded-md hover:bg-gray-100"
                  >
                    <span>{link.icon}</span>
                    <span className="text-xs mt-1">{link.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

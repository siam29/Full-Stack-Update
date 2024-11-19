"use client";

import { useState } from "react";

export default function Question() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Define the state type explicitly

  // Toggle function with a properly typed parameter
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question:
        "Is Juneau Vacation Home: Stunning View + Beach Access pet-friendly?",
      answer: "Yes, the property allows pets with prior approval.",
    },
    {
      question:
        "What time is check-in at Juneau Vacation Home: Stunning View + Beach Access?",
      answer: "Check-in starts at 3:00 PM.",
    },
    {
      question:
        "What time is check-out at Juneau Vacation Home: Stunning View + Beach Access?",
      answer: "Check-out is at 11:00 AM.",
    },
    {
      question:
        "Where is Juneau Vacation Home: Stunning View + Beach Access located?",
      answer: "It is located in Juneau, Alaska, near Lena Beach.",
    },
  ];

  return (
    <div className="p container mx-auto  grid grid-cols-3 my-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently asked questions</h2>
      <div className="flex justify-between text-sm font-medium text-gray-500">
      <div className="col-span-2">
          {" "}
        </div>
        {/* FAQ List */}
        <ul className="space-y-4">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className="border-b border-gray-300 pb-4 cursor-pointer"
              onClick={() => toggleFAQ(index)} // Use the properly typed toggleFAQ function
            >
              {/* Question */}
              <div className="flex justify-between items-center">
                <p className="font-semibold text-gray-900">{faq.question}</p>
                <span
                  className={`transform transition-transform ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </div>

              {/* Answer */}
              {activeIndex === index && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
        
    </div>
  );
}

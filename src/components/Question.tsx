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
    <div className="pt-16 container mx-auto">
      <h2 className="flex flex-col lg:flex-row ">
        <div className="text-2xl font-bold pr-72">
          {" "}
          Frequently asked questions{" "}
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
      </h2>
    </div>
  );
}

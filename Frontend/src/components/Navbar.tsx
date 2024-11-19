// src/app/page.tsx
import { useState } from "react";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("United States");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const regions = [
    { region: "United States", currency: "USD" },
    { region: "Portugal", currency: "EUR" },
    { region: "United Kingdom", currency: "GBP" },
    { region: "Japan", currency: "JPY" },
    { region: "India", currency: "INR" },
  ];

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = regions.find((r) => r.region === event.target.value);
    if (selected) {
      setSelectedRegion(selected.region);
      setSelectedCurrency(selected.currency);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 shadow-sm ">
        <div className="px-4 sm:px-6 lg:px-8 flex justify-end items-center h-16">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <span className="text-xl">🌐</span>
            <button
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setIsModalOpen(true)}
            >
              {selectedRegion}
            </button>

            {/* Right Section */}
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Trip Boards
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                List your property
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Help
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                My trips
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-4">Display settings</h2>
            <p className="text-sm text-gray-500 mb-6">
              Changing your region could change your rewards program. To stay
              with your current rewards program, keep your region the same.
            </p>
            <div className="mb-4">
              <label htmlFor="region" className="block text-sm font-medium">
                Region
              </label>
              <select
                id="region"
                value={selectedRegion}
                onChange={handleRegionChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                {regions.map((r) => (
                  <option key={r.region} value={r.region}>
                    {r.region}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="currency" className="block text-sm font-medium">
                Currency
              </label>
              <input
                id="currency"
                type="text"
                value={selectedCurrency}
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 cursor-not-allowed"
              />
            </div>
            <button
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              onClick={() => setIsModalOpen(false)}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
}

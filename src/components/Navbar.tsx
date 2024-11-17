// src/app/page.tsx

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm ">
      <div className="px-4 sm:px-6 lg:px-8 flex justify-end items-center h-16">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <span className="text-xl">🌐</span>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            United States
          </a>

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
  );
}

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function QuestionSection() {
  return (
    <div className=" bg-blue-100 rounded-lg shadow-md space-y-4 container mx-auto p-4 ">
      {/* Title Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800">Have a question?</h2>
        <div className="flex items-center gap-1 px-2 py-1 bg-black text-white text-xs rounded">
          <span>Beta</span>
        </div>
      </div>
      <p className="text-gray-700">
        Get instant answers with AI powered search of property information and
        reviews.
      </p>

      {/* Search Box */}
      <div className="relative">
        <input
          type="text"
          placeholder="Is there free parking?"
          className="w-full py-3 px-4 pr-12 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="button"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

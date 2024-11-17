import {
  faBed,
  faChair,
  faTree,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RoomsAndBeds() {
  return (
    <div className=" mx-auto container mx-auto p-4 ">
      {/* Rooms & Beds Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Rooms & beds</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">
              2 bedrooms <span className="text-gray-600">(sleeps 4)</span>
            </h3>
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div>
                <h4 className="font-bold">Bedroom 1</h4>
                <div className="flex items-center gap-2 mt-2">
                  <FontAwesomeIcon
                    icon={faBed}
                    className="h-5 w-5 text-gray-500"
                  />
                  <span className="text-gray-700">1 Queen Bed</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold">Bedroom 2</h4>
                <div className="flex items-center gap-2 mt-2">
                  <FontAwesomeIcon
                    icon={faBed}
                    className="h-5 w-5 text-gray-500"
                  />
                  <span className="text-gray-700">1 Twin Bed</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-extrabold pt-7">1 bathroom</h3>
            <p className="font-bold">Full Bathroom</p>
          </div>
        </div>
      </div>

      {/* Spaces Section */}
      <div>
        <h2 className="text-xl font-bold mb-4 pt-9 pb-6">Spaces</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faChair} className="h-5 w-5 text-gray-500" />
            <span className="text-black-700">Deck or patio</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faUtensils}
              className="h-5 w-5 text-gray-500"
            />
            <span className="h-5 w-5 text-black-500">Kitchen</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faChair} className="h-5 w-5 text-gray-500" />
            <span className="h-5 w-5 text-black-500">Balcony</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faTree} className="h-5 w-5 text-gray-500" />
            <span className="h-5 w-5 text-black-500">Garden</span>
          </div>
        </div>
        <a href="#" className="text-blue-600 mt-4 block">
          See all rooms and beds details
        </a>
      </div>
    </div>
  );
}

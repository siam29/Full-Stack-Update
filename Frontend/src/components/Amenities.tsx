import {
  faCar,
  faCouch,
  faTshirt,
  faUtensils,
  faWater,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PropertyManager() {
  return (
    <div className="py-16 container mx-auto space-y-8">
      {/* Flex container for Amenities and other sections */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
        {/* Amenities Section */}
        <div className="lg:w-1/2">
          <div className="text-3xl font-bold mb-4">Amenities</div>
        </div>

        {/* Placeholder for remaining parts */}
        <div className="lg:w-1/2">
          <div className="grid grid-cols-2 md:grid-cols-3  text-gray-700">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faUtensils}
                className="h-5 w-5 text-black-700"
              />
              <span>Kitchen</span>
            </div>
            <div className="flex items-center ">
              <FontAwesomeIcon
                icon={faTshirt}
                className="h-5 w-5 text-black-700"
              />
              <span>Dryer</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faCar}
                className="h-5 w-5 text-black-700"
              />
              <span>Parking available</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faTshirt}
                className="h-5 w-5 text-black-700"
              />
              <span>Washer</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faCouch}
                className="h-5 w-5 text-black-700"
              />
              <span>Outdoor Space</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faWater}
                className="h-5 w-5 text-black-700"
              />
              <span>Ocean view</span>
            </div>
          </div>
          <a
            href="#"
            className="text-blue-600 mt-4 block font-semibold text-sm"
          >
            See all 34 amenities
          </a>
        </div>
      </div>
    </div>
  );
}

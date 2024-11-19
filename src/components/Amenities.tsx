import {
  faCar,
  faCouch,
  faTshirt,
  faUtensils,
  faWater,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";



export default function PropertyManager() {
    return (

<div>
        <div className="text-xl font-bold ">Amenities</div>
        <div className="px-32">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 text-gray-700 pr-9">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faUtensils}
                className="h-5 w-5 text-black-700"
              />
              <span>Kitchen</span>
            </div>
            <div className="flex items-center gap-2">
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

    );
}
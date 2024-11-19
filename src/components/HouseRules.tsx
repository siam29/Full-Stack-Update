import {
  faBan,
  faChild,
  faPaw,
  faSmokingBan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HouseRules() {
  return (
    <div className="pt-16 container mx-auto space-y-4">
      {/* House Rules Section */}
      <div className="py-16 grid grid-cols-3">
        <h2 className="text-xl font-bold">House Rules</h2>
        <div>
          <div>
            {/* Left Section */}
            <div className="space-y-4">
              <p>Check in after 3:00 PM</p>
              <p>Check out before 11:00 AM</p>
            </div>

            {/* Right Section */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {/* Children */}
              <div className="flex gap-2">
                <FontAwesomeIcon icon={faChild} className="text-gray-600" />
                <div>
                  <p className="font-bold">Children</p>
                  <p className="text-sm">Children allowed: ages 0-17</p>
                </div>
              </div>

              {/* Pets */}
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faPaw}
                  className="h-5 w-5 text-gray-600"
                />
                <div>
                  <p className="font-bold">Pets</p>
                  <p className="text-sm">No pets allowed</p>
                </div>
              </div>

              {/* Events */}
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faBan}
                  className="h-5 w-5 text-gray-600"
                />
                <div>
                  <p className="font-bold">Events</p>
                  <p className="text-sm">No events allowed</p>
                </div>
              </div>

              {/* Smoking */}
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faSmokingBan}
                  className="h-5 w-5 text-gray-600"
                />
                <div>
                  <p className="font-bold">Smoking</p>
                  <p className="text-sm">Smoking is not permitted</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flexbox Layout */}
      </div>

      {/* Damage and Incidentals Section */}
      <div className="py-16 grid grid-cols-3   ">
        {/* Title Section */}
        <h2 className="text-3xl font-bold ">Damage and incidentals</h2>

        {/* Description Section */}
        <div className="col-span-2">
          <p className="text-gray-700">
            You will be responsible for any damage to the rental property caused
            by you or your party during your stay.
          </p>
        </div>
      </div>
    </div>
  );
}

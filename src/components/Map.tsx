import {
  faLocationDot,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Map() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 bg-white-100 container mx-auto p-4">
      {/* Left Section */}
      <div className="flex-1 p-6 ">
        <h1 className="text-2xl font-bold mb-4">
          Juneau Vacation Home: Stunning View + Beach Access
        </h1>
        <p className="text-green-700 font-semibold mb-4 text-lg">
          9.8 Exceptional
        </p>
        <a href="#" className="text-blue-600 underline mb-6 block">
          See all 24 reviews
        </a>

        {/* Property Info */}
        <div className="grid grid-cols-2 gap-4 text-gray-700 mb-6">
          <div>
            <p>2 bedrooms</p>
            <p>Sleeps 4</p>
          </div>
          <div>
            <p>1 bathroom</p>
            <p>1155 sq ft</p>
          </div>
        </div>

        {/* Amenities */}
        <h2 className="font-bold text-lg mb-2">Popular amenities</h2>
        <ul className="grid grid-cols-2 gap-2 text-gray-700 mb-6">
          <li py-px>Barbecue grill</li>
          <li>Outdoor Space</li>
          <li>Kitchen</li>
          <li>Washer</li>
          <li>Parking available</li>
          <li>Dryer</li>
        </ul>
        <a href="#" className="text-blue-600 ">
          See all property amenities
        </a>

        {/* Explore the Area */}
        <h2 className="font-bold text-lg mt-6 mb-4">Explore the area</h2>
        <div className="flex items-start gap-4 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2097.0839637115723!2d-134.43189642295565!3d58.290757774128096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x68f06e3c3e7ea427%3A0xacd4bcc175dafd21!2sJuneau%20Vacation%20Homes!5e0!3m2!1sen!2sbd!4v1731729333232!5m2!1sen!2sbd"
            width="400"
            height="250"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <ul className="space-y-3 pt-16">
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="h-5 w-5 text-blue-500"
                />
                <span className="text-gray-800">Auke Bay</span>
              </div>
              <span className="text-gray-500">6 min drive</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="h-5 w-5 text-blue-500"
                />
                <span className="text-gray-800">
                  University of Alaska-Southeast
                </span>
              </div>
              <span className="text-gray-500">10 min drive</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="h-5 w-5 text-blue-500"
                />
                <span className="text-gray-800">Mendenhall Golf Course</span>
              </div>
              <span className="text-gray-500">14 min drive</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faPlaneDeparture}
                  className="h-5 w-5 text-blue-500"
                />
                <span className="text-gray-800">
                  Juneau, AK (JNU-Juneau Intl.)
                </span>
              </div>
              <span className="text-gray-500">14 min drive</span>
            </li>
            <a href="#" className="text-blue-600  mb-6 block">
              See more about this area
            </a>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3  p-6 ">
        <div className="bg-blue-950	 p-4 rounded-lg mb-4 text-center">
          <p className="text-white font-semibold">
            Members get our best prices when signed in!
          </p>
          <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
            Sign in
          </button>
        </div>

        <p className="text-2xl font-bold text-gray-800 mb-4">$134 per night</p>
        <p className="text-sm text-green-700 mb-4">
          Free cancellation <span className="font-bold">Before Mon, Nov 4</span>
        </p>

        {/* Booking Form */}
        <form className="space-y-4">
          <label className="block">
            <span className="text-gray-600">Start date</span>
            <input
              type="date"
              className="block w-full mt-1 border rounded-lg px-3 py-2"
            />
          </label>
          <label className="block">
            <span className="text-gray-600">End date</span>
            <input
              type="date"
              className="block w-full mt-1 border rounded-lg px-3 py-2"
            />
          </label>
          <label className="block">
            <span className="text-gray-600">Travelers</span>
            <input
              type="number"
              className="block w-full mt-1 border rounded-lg px-3 py-2"
              placeholder="2 travelers"
            />
          </label>
        </form>

        <div className="mt-6">
          <p className="text-gray-700 mb-2">
            Total <span className="font-bold">$543</span>
          </p>
          <p className="text-sm text-gray-600">Total includes fees, not tax</p>
          <a href="#" className="text-blue-600 underline text-sm">
            Price details
          </a>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-6">
          Book now
        </button>

        <a href="#" className="block mt-4 text-center text-blue-600 ">
          Contact host
        </a>
      </div>
    </div>
  );
}

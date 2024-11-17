export default function AboutThisProperty() {
  return (
    <div className=" container mx-auto space-y-6">
      {/* Title Section */}
      <h1 className="text-2xl font-bold">About this property</h1>

      {/* Property Overview */}
      <div>
        <h2 className="text-xl font-bold">
          Juneau Vacation Home: Stunning View + Beach Access
        </h2>
        <p className="text-gray-700 mt-4">
          Escape to the mountains and experience the great outdoors at this
          lovely Juneau vacation rental! Perched on the shore of Lena Cove, this
          2-bedroom, 1-bath home is the perfect getaway for those looking to
          enjoy a relaxing retreat surrounded by nature. Spend your day fishing
          for King Salmon, exploring Lena Beach and the rocky coastline, or
          hiking the nearby trails. After your outdoor adventure, kick back on
          the private deck and admire the breathtaking panoramic views!
        </p>
      </div>

      {/* Property Details */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold">-- THE PROPERTY --</h3>
        <p className="text-gray-700">
          CBJ1000104 | 1,115 Sq Ft | 2 Private Decks | Lena Cove & Mountain
          Views | 2 Bicycles Provided
        </p>
        <p className="text-gray-700">
          <strong>Bedroom 1:</strong> Queen Bed, Full Floor Mattress |{" "}
          <strong>Bedroom 2:</strong> Extra Long Twin Bed
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>HOME HIGHLIGHTS:</strong> Flat-screen TV, dining table,
            washer/dryer
          </li>
          <li>
            <strong>KITCHEN:</strong> Fridge, stove, coffee maker, microwave,
            cooking basics, toaster, dishware/flatware, trash bags/paper towels,
            Crockpot
          </li>
          <li>
            <strong>GENERAL:</strong> Free WiFi, central heating, linens/towels,
            keyless entry, hair dryer, ceiling fans
          </li>
          <li>
            <strong>FAQ:</strong> No A/C, stairs required to access
          </li>
          <li>
            <strong>PARKING:</strong> Driveway (2 vehicles), RV parking allowed
          </li>
        </ul>
      </div>

      {/* Location Details */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold">-- THE LOCATION --</h3>
        <p className="text-gray-700">
          <strong>GREAT OUTDOORS:</strong> Lena Cove (on-site), Lena Beach
          Recreation Area (0.5 miles), Glacier Gardens Rainforest Adventure (10
          miles), Mendenhall Glacier (10 miles), Twin Lakes (13 miles)
        </p>
        <p className="text-gray-700">
          <strong>THINGS TO DO:</strong> Mendenhall Golf (8 miles), Dimond Park
          Aquatic Center (8 miles), Riverside Rotary Park (8 miles), Alaska
          State Museum (16 miles), Last Chance Mining Museum (18 miles), AJ Mine
          Gastineau Mill Tours (20 miles)
        </p>
        <p className="text-gray-700">
          <strong>LOCAL FARE:</strong> Forbidden Peak Brewery (5 miles), The
          Grind Coffee Company (7 miles), Four Plates Cocina Peruana (7 miles),
          Sandbar & Grill (7 miles), Zerelda&apos;s Bistro (8 miles),
          Donna&apos;s Restaurant (9 miles), Alaskan Brewing Co. (13 miles)
        </p>
        <p className="text-gray-700">
          <strong>AIRPORT:</strong> Juneau International Airport (9 miles)
        </p>
      </div>

      {/* Rest Easy Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold">-- REST EASY WITH US --</h3>
        <p className="text-gray-700">
          Evolve makes it easy to find and book properties you’ll never want to
          leave. You can relax knowing that our properties will always be ready
          for you and that we’ll answer the phone 24/7. Even better, if anything
          is off about your stay, we’ll make it right. You can count on our
          homes and our people to make you feel welcome--because we know what
          vacation means to you.
        </p>
      </div>

      {/* Policies Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold">-- POLICIES --</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>No smoking</li>
          <li>No pets allowed</li>
          <li>No events, parties, or large gatherings</li>
          <li>Must be at least 25 years old to book</li>
          <li>Additional fees and taxes may apply</li>
          <li>Photo ID may be required upon check-in</li>
          <li>NOTE: The property requires stairs to access</li>
          <li>NOTE: The property does not have air conditioning</li>
          <li>
            NOTE: The property sleeps 3 guests in 2 beds, with room for 4 total
            by using the full floor mattress
          </li>
        </ul>
      </div>
    </div>
  );
}

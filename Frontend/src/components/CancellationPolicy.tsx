export default function CancellationPolicy() {
  return (
    <div className="p container mx-auto  grid grid-cols-3 my-10">
      {/* Damage and Incidentals Section */}


      {/* Cancellation Section */}
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Cancellation</h2>
      <div className=" col-span-2">
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-6">
          <div className="flex justify-between text-sm font-medium text-gray-500">
            <span>Today</span>
            <span>Nov 4</span>
            <span>Check-in</span>
          </div>
          <div className="relative mt-2">
            <div className="absolute w-full h-1 bg-gray-200 rounded-full"></div>
            <div
              className="absolute h-1 bg-gray-800 rounded-full"
              style={{ width: '50%' }}
            ></div>
            <div className="absolute top-0 left-0 transform -translate-x-1/2 w-4 h-4 bg-gray-800 rounded-full"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 border-2 border-gray-800 bg-white rounded-full"></div>
            <div className="absolute top-0 right-0 transform translate-x-1/2 w-4 h-4 border-2 border-gray-200 bg-white rounded-full"></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-600">
            <span>Full refund</span>
            <span>No refund</span>
          </div>
        </div>

        {/* Refund Policies */}
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-gray-800">Before</p>
            <p className="text-lg font-bold">Nov 4</p>
            <p className="text-sm text-gray-600">
              Cancel your reservation before Nov 4 at 11:59 PM, and you'll get a full refund. Times are based on the property's local time.
            </p>
          </div>
          <hr className="border-gray-200" />
          <div>
            <p className="text-sm font-medium text-gray-800">After</p>
            <p className="text-lg font-bold">Nov 4</p>
            <p className="text-sm text-gray-600">
              After that, you won't get a refund.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

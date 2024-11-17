export default function CancellationPolicy() {
  return (
    <div className="py-16 container mx-auto space-y-8">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">Cancellation</h2>

      {/* Timeline Section */}
      <div className="bg-gray-100 rounded-lg p-6 shadow-md">
        <div className="flex items-center justify-between">
          {/* Today */}
          <div className="flex flex-col items-center">
            <div className="h-3 w-3 bg-black rounded-full"></div>
            <p className="mt-2 text-sm font-medium">Today</p>
          </div>

          {/* Connector */}
          <div className="flex-1 h-0.5 bg-black"></div>

          {/* Nov 4 */}
          <div className="flex flex-col items-center">
            <div className="h-3 w-3 border-2 border-black rounded-full"></div>
            <p className="mt-2 text-sm font-medium">Nov 4</p>
          </div>

          {/* Connector */}
          <div className="flex-1 h-0.5 bg-gray-300"></div>

          {/* Check-in */}
          <div className="flex flex-col items-center">
            <div className="h-3 w-3 border-2 border-gray-300 rounded-full"></div>
            <p className="mt-2 text-sm font-medium text-gray-400">Check-in</p>
          </div>
        </div>

        {/* Labels */}
        <div className="flex justify-between mt-4">
          <p className="text-sm font-medium">Full refund</p>
          <p className="text-sm font-medium text-gray-500">No refund</p>
        </div>
      </div>

      {/* Refund Details */}
      <div className="space-y-6">
        {/* Full Refund Policy */}
        <div className="flex items-start">
          <div className="w-24 text-right mr-4">
            <p className="text-sm font-bold">Before</p>
            <p className="text-lg font-bold">Nov 4</p>
          </div>
          <div>
            <p className="text-lg font-bold">Full refund</p>
            <p className="text-sm text-gray-700">
              Cancel your reservation before Nov 4 at 11:59 PM, and you'll get a
              full refund. Times are based on the property's local time.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-300" />

        {/* No Refund Policy */}
        <div className="flex items-start">
          <div className="w-24 text-right mr-4">
            <p className="text-sm font-bold">After</p>
            <p className="text-lg font-bold">Nov 4</p>
          </div>
          <div>
            <p className="text-lg font-bold">No refund</p>
            <p className="text-sm text-gray-700">
              After that, you won't get a refund.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

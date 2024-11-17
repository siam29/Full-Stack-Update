export default function AboutHost() {
  return (
    <div className="pt-16 container mx-auto">
      {/* About the Host Section */}
      <div className="flex flex-col lg:flex-row items-start gap-96 ">
        <h2 className="text-2xl font-bold">About the host</h2>
        <div className="space-y-12">
          <p className="text-gray-900 font-semibold">Hosted by Evolve</p>
          <div>
            <p className="text-gray-900 font-semibold">Languages:</p>
            <p className="text-gray-700">English, French, German, Spanish</p>
          </div>
        </div>
      </div>

      {/* Send a Message Section */}
      <div className="flex flex-col lg:flex-row items-start gap-96 pt-32">
        <h2 className="text-2xl font-bold">Send a message</h2>
        <button className="text-blue-600 border border-blue-600 rounded-full px-6 py-2 font-medium hover:bg-blue-50">
          Contact host
        </button>
      </div>
    </div>
  );
}

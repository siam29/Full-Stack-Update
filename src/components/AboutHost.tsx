export default function AboutHost() {
  return (
    <div className="p container mx-auto  grid grid-cols-3 my-10">
      {/* About the Host Section */}
        <h2 className="font-bold text-black-800 text-3xl">About the host</h2>
        <div className="col-span-2">
        <div className="text-black-700 space-y-4">
        
          <p className="flex justify-between text-2xl font-medium text-black-500">Hosted by Evolve</p>
          <div>
            <p className="text-gray-900 font-semibold">Languages:</p>
            <p className="text-gray-700">English, French, German, Spanish</p>
          </div>
        </div>
        </div>
        </div>        
    );
  
}

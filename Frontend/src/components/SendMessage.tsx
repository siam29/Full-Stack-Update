export default function SendMessage() {
    return (
      <div className="p container mx-auto  grid grid-cols-3 my-10">
        {/* About the Host Section */}
          <h2 className="font-bold text-black-800 text-3xl">Send a message</h2>
          <div className="col-span-2">
          <div className="text-black-700 space-y-4">
          <button className="text-blue-600 border border-blue-600 rounded-full px-6 py-2 font-medium hover:bg-blue-50">
            Contact host
          </button>
          </div>
          </div>
          </div>  
      );
    
  }
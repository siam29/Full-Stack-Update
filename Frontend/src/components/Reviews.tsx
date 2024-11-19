export default function Reviews() {
  const reviews = [
    {
      rating: "10/10 Excellent",
      content:
        "A very cozy home for the two of us in a quiet area NW of town. Beautiful water view. We enjoyed the art, read up in it and visited the...",
      author: "Kyle G.",
      date: "Sep 25, 2024",
    },
    {
      rating: "10/10 Excellent",
      content:
        "The cottage was just as the pictures and description stated. Nice quiet area and great view of the cove.",
      author: "Cindy B.",
      date: "Sep 23, 2024",
    },
  ];

  return (
    <div className="p-6 container mx-auto space-y-8">
      {/* Rating Section */}
      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Left: Overall Rating */}
        <div className="lg:w-1/3">
          <h2 className="text-4xl font-bold text-green-700">9.8/10</h2>
          <p className="text-2xl font-semibold text-gray-900 mt-2">
            Exceptional
          </p>
          <p className="text-gray-500 mt-2">24 reviews</p>
          <p className="text-sm text-gray-500">
            Reviews are verified unless labeled otherwise.
          </p>
        </div>

        {/* Right: Recent Reviews */}
        <div className="lg:w-2/3">
          <h3 className="text-xl font-bold mb-4">Recent reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md border border-gray-300"
              >
                <p className="font-semibold text-gray-900">{review.rating}</p>
                <p className="text-gray-700 mt-2 text-sm">{review.content}</p>
                <a
                  href="#"
                  className="text-blue-600 text-sm font-medium mt-2 inline-block"
                >
                  Read more
                </a>
                <p className="text-sm text-gray-500 mt-4">{review.author}</p>
                <p className="text-sm text-gray-400">{review.date}</p>
              </div>
            ))}
          </div>

          {/* Button: See All Reviews */}
          <div className="mt-6">
            <a
              href="#"
              className="text-blue-600 font-medium border border-blue-600 rounded-full px-6 py-2 inline-flex items-center"
            >
              See all 24 reviews <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

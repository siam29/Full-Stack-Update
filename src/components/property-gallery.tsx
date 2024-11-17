"use client";

import Image from "next/image";
import { useState } from "react";

export default function Component() {
  const [showAll, setShowAll] = useState(false);

  const images = [
    {
      src: "/images/image1.jpg",
      alt: "Lakeside deck with red chairs overlooking mountains and water",
    },
    {
      src: "/images/image2.jpg",
      alt: "Small cottage with red door and gray exterior",
    },
    {
      src: "/images/image3.jpg",
      alt: "Interior living room with blue couches and wooden ceiling",
    },
    {
      src: "/images/image4.jpeg",
      alt: "Living room with large windows and bookshelves",
    },
    {
      src: "/images/image5.jpg",
      alt: "Interior room view",
    },
  ];

  const visibleImages = showAll ? images : images.slice(0, 5);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* Main large image */}
        <div className="relative h-[400px] md:h-[600px]">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            width={700}
            height={1000}
            className="object-cover rounded-lg w-full h-full"
            priority
          />
        </div>

        {/* Grid of smaller images */}
        <div className="grid grid-cols-2 gap-2">
          {visibleImages.slice(1).map((image, index) => (
            <div key={index} className="relative h-[200px] md:h-[296px]">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={800}
                className="object-cover rounded-lg w-full h-full"
              />
              {index === 3 && !showAll && (
                <button
                  onClick={() => setShowAll(true)}
                  className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
                  aria-label="Show more images"
                >
                  30+
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

type PropertyGalleryProps = {
  title: string;
  images: string[];
};

const PropertyGallery = ({ title, images }: PropertyGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  // Limit visible images to 5, with the rest hidden behind the button
  const visibleImages = images.slice(0, 5);
  const extraImageCount = images.length > 5 ? images.length - 5 : 0;

  const openImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
  };

  const goToNextImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const goToPreviousImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div
        className="grid gap-2"
        style={{
          display: "grid",
          gridTemplateColumns:
            images.length === 1
              ? "1fr"
              : images.length === 2
              ? "1fr 1fr"
              : images.length === 3
              ? "2fr 2fr "
              : images.length === 4
              ? "1fr 1fr" // Two equal columns for 4 images
              : "repeat(4, 1fr)", // For 5 or more images
          gridTemplateRows:
            images.length === 3
              ? "1fr 1fr"
              : images.length === 4
              ? "1fr 1fr" // Two equal rows for 4 images
              : images.length >= 5
              ? "1fr 1fr"
              : "auto",
          height: "500px", // Ensure the grid always takes the same space
        }}
      >
        {visibleImages.map((image, index) => {
          const isFirst = index === 0;
          const isLast = index === 4 && extraImageCount > 0;

          // Handle the first image for layouts with special sizing
          if (isFirst) {
            return (
              <div
                key={index}
                className="relative cursor-pointer overflow-hidden rounded-lg"
                style={{
                  gridColumn:
                    images.length === 1
                      ? "span 1"
                      : images.length === 2
                      ? "span 1"
                      : images.length >= 5
                      ? "span 2"
                      : undefined, // Default for 3-4 images
                  gridRow:
                    images.length >= 5 || images.length === 3
                      ? "span 2"
                      : undefined,
                }}
                onClick={() => openImage(index)}
              >
                <img
                  src={`http://localhost:8000${image}`}
                  alt={`${title} - Image ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            );
          }

          // Handle the last image with the +N button for extra images
          if (isLast) {
            return (
              <div
                key={index}
                className="relative cursor-pointer overflow-hidden rounded-lg bg-gray-200"
                onClick={() => openImage(index)}
              >
                <img
                  src={`http://localhost:8000${image}`}
                  alt={`${title} - Image ${index + 1}`}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold">
                  +{extraImageCount}
                </div>
              </div>
            );
          }

          // Handle regular images
          return (
            <div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openImage(index)}
            >
              <img
                src={`http://localhost:8000${image}`}
                alt={`${title} - Image ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          );
        })}
      </div>

      {/* Modal for Selected Image */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative text-white text-center">
            {/* Close Button */}
            <button
              onClick={closeImage}
              className="absolute top-2 right-4 text-3xl font-bold cursor-pointer"
            >
              &times;
            </button>

            {/* Current Image */}
            <img
              src={`http://localhost:8000${images[selectedImageIndex]}`}
              alt={`${title} - Image ${selectedImageIndex + 1}`}
              className="max-w-full max-h-[80vh] rounded-lg"
            />

            {/* Image Title */}
            <p className="mt-4 text-lg font-semibold">{title}</p>

            {/* Image Navigation */}
            <div
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl font-bold cursor-pointer ${
                selectedImageIndex === 0 ? "text-gray-500" : "text-white"
              }`}
              onClick={goToPreviousImage}
            >
              &#8249;
            </div>
            <div
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl font-bold cursor-pointer ${
                selectedImageIndex === images.length - 1
                  ? "text-gray-500"
                  : "text-white"
              }`}
              onClick={goToNextImage}
            >
              &#8250;
            </div>

            {/* Image Counter */}
            <p className="mt-2 text-sm">
              {selectedImageIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyGallery;

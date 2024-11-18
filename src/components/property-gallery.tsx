"use client";

import { useState } from "react";

type PropertyGalleryProps = {
  title: string;
  images: string[];
};

const PropertyGallery = ({ title, images }: PropertyGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Show up to 5 images on the main page
  const visibleImages = images.slice(0, 5);
  const extraImageCount = images.length - 5;

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
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "10px",
        }}
      >
        {visibleImages.map((image, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={() => openImage(index)}
          >
            <img
              src={`http://localhost:8000${image}`}
              alt={`${title} - Image ${index + 1}`}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}

        {/* Button for Extra Images */}
        {extraImageCount > 0 && (
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "10px",
              cursor: "pointer",
              gridColumn: "span 1",
            }}
            onClick={() => openImage(5)} // Open the first extra image
          >
            <img
              src={`http://localhost:8000${images[5]}`}
              alt={`${title} - More Images`}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                filter: "brightness(100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: "20px",
                /* backgroundColor: "rgba(0, 0, 0, 0.5)", */
                borderRadius: "10px",
              }}
            >
              <span
                style={{
                  padding: "8px 15px",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  borderRadius: "20px",
                }}
              >
                {`+${extraImageCount}`}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Modal for Selected Image */}
      {selectedImageIndex !== null && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div style={{ position: "relative", color: "white", textAlign: "center" }}>
            {/* Dismiss Button */}
            <button
              onClick={closeImage}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "24px",
                color: "white",
                cursor: "pointer",
              }}
            >
              &#10005;
            </button>

            {/* Current Image */}
            <img
              src={`http://localhost:8000${images[selectedImageIndex]}`}
              alt={`${title} - Image ${selectedImageIndex + 1}`}
              style={{
                maxWidth: "90%",
                maxHeight: "80vh",
                borderRadius: "10px",
              }}
            />

            {/* Image Title */}
            <p style={{ marginTop: "10px", fontSize: "18px", fontWeight: "bold" }}>
              {title}
            </p>

            {/* Image Navigation */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
              }}
            >
              <button
                onClick={goToPreviousImage}
                disabled={selectedImageIndex === 0}
                style={{
                  background: selectedImageIndex === 0 ? "gray" : "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  padding: "10px",
                  cursor: selectedImageIndex === 0 ? "not-allowed" : "pointer",
                }}
              >
                &#10094;
              </button>
            </div>

            <div
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
              }}
            >
              <button
                onClick={goToNextImage}
                disabled={selectedImageIndex === images.length - 1}
                style={{
                  background: selectedImageIndex === images.length - 1 ? "gray" : "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  padding: "10px",
                  cursor:
                    selectedImageIndex === images.length - 1 ? "not-allowed" : "pointer",
                }}
              >
                &#10095;
              </button>
            </div>

            {/* Image Counter */}
            <p style={{ marginTop: "10px", fontSize: "14px" }}>
              {selectedImageIndex + 1}/{images.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyGallery;

import PropertyGallery from "@/components/property-gallery";
import { fireEvent } from "@testing-library/dom"; // Correct import
import { render, screen } from "@testing-library/react";

describe("PropertyGallery Component", () => {
  const title = "Test Gallery";
  const images = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
    "/image5.jpg",
    "/image6.jpg",
  ];

  it("renders the gallery title", () => {
    render(<PropertyGallery title={title} images={images} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("renders up to 5 visible images", () => {
    render(<PropertyGallery title={title} images={images} />);
    const displayedImages = screen.getAllByRole("img");
    expect(displayedImages.length).toBe(5);
  });

  it("shows a +N button for extra images", () => {
    render(<PropertyGallery title={title} images={images} />);
    const extraButton = screen.getByText("+1");
    expect(extraButton).toBeInTheDocument();
  });

  it("opens a modal with the clicked image", () => {
    render(<PropertyGallery title={title} images={images} />);
    const image = screen.getAllByRole("img")[0];
    fireEvent.click(image);
    expect(screen.getByAltText("Selected image")).toHaveAttribute(
      "src",
      "/image1.jpg"
    );
  });

  it("closes the modal when the close button is clicked", () => {
    render(<PropertyGallery title={title} images={images} />);
    const image = screen.getAllByRole("img")[0];
    fireEvent.click(image);
    const closeButton = screen.getByText("Close");
    fireEvent.click(closeButton);
    expect(screen.queryByAltText("Selected image")).not.toBeInTheDocument();
  });
});

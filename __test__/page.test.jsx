import { render, screen } from "@testing-library/react";
import Map from "./Map";

describe("Map Component", () => {
  const hotel = {
    title: "Test Hotel",
    rooms: 3,
    amenities: ["Wi-Fi", "Swimming Pool", "Parking"],
    rating: 4.5,
  };

  test("renders the hotel title, rating, and number of rooms", () => {
    render(<Map hotel={hotel} />);

    // Check hotel title
    const titleElement = screen.getByText(hotel.title);
    expect(titleElement).toBeInTheDocument();

    // Check hotel rating
    const ratingElement = screen.getByText(hotel.rating);
    expect(ratingElement).toBeInTheDocument();

    // Check number of rooms
    const roomsElement = screen.getByText(`${hotel.rooms} bedrooms`);
    expect(roomsElement).toBeInTheDocument();
  });

  test("renders the amenities list", () => {
    render(<Map hotel={hotel} />);

    hotel.amenities.forEach((amenity) => {
      const amenityElement = screen.getByText(amenity);
      expect(amenityElement).toBeInTheDocument();
    });
  });

  test("renders the map iframe", () => {
    render(<Map hotel={hotel} />);

    const iframeElement = screen.getByTitle("Google Map");
    expect(iframeElement).toBeInTheDocument();
    expect(iframeElement).toHaveAttribute(
      "src",
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2097.0839637115723!2d-134.43189642295565!3d58.290757774128096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x68f06e3c3e7ea427%3A0xacd4bcc175dafd21!2sJuneau%20Vacation%20Homes!5e0!3m2!1sen!2sbd!4v1731729333232!5m2!1sen!2sbd"
    );
  });

  test("renders price and booking form", () => {
    render(<Map hotel={hotel} />);

    const priceElement = screen.getByText(/\$134 per night/i);
    expect(priceElement).toBeInTheDocument();

    const startDateInput = screen.getByLabelText(/Start date/i);
    expect(startDateInput).toBeInTheDocument();

    const endDateInput = screen.getByLabelText(/End date/i);
    expect(endDateInput).toBeInTheDocument();

    const travelersInput = screen.getByLabelText(/Travelers/i);
    expect(travelersInput).toBeInTheDocument();
  });

  test("renders explore the area section", () => {
    render(<Map hotel={hotel} />);

    const exploreAreaHeading = screen.getByText(/Explore the area/i);
    expect(exploreAreaHeading).toBeInTheDocument();

    const locationElements = [
      "Auke Bay",
      "University of Alaska-Southeast",
      "Mendenhall Golf Course",
      "Juneau, AK (JNU-Juneau Intl.)",
    ];

    locationElements.forEach((location) => {
      const locationElement = screen.getByText(location);
      expect(locationElement).toBeInTheDocument();
    });
  });
});

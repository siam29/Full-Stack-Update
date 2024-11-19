"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import AboutHost from "@/components/AboutHost";
import AboutProperty from "@/components/AboutProperty";
import CancellationPolicy from "@/components/CancellationPolicy";
import HeaderActions from "@/components/HeaderActions";
import HouseRules from "@/components/HouseRules";
import ImportantInformation from "@/components/ImportantInformation";
import Map from "@/components/Map";
import PropertyManager from "@/components/PropertyManager";
import Question from "@/components/Question";
import QuestionSection from "@/components/QuestionSection";
import Reviews from "@/components/Reviews";
import RoomsAndBeds from "@/components/RoomandBed";
import Tab from "@/components/Tab";
import PropertyGallery from "@/components/property-gallery";
import SendMessage from "@/components/SendMessage";
import Amenities from "@/components/Amenities";


type Hotel = {
  title: string;
  description: string;
  location: string;
  images: string[];
  rooms: number;
  rating: number;
  amenities: string[];
  host_information: {
    host_name: string;
    contact: string;
  };
};

const HotelDetails = ({ params }: { params: { id: string; slug: string } }) => {
  const { id } = params;
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/hotels/${id}`);
        setHotel(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching hotel details:", err);
        setError("Failed to load hotel details.");
        setLoading(false);
      }
    };

    fetchHotel();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  return (
    <div>
      <Navbar />
      <HeaderActions />
      <PropertyGallery images={hotel.images} />
      <Tab />
      <Map location={hotel.location} />
      <RoomsAndBeds rooms={hotel.rooms} />
      <AboutProperty description={hotel.description} amenities={hotel.amenities} />
      <PropertyManager />
      <Amenities />
      <QuestionSection />
      <HouseRules />
      <CancellationPolicy />
      <ImportantInformation />
      <Question />
      <Reviews />
      <AboutHost host={hotel.host_information} />
      <SendMessage />
      {/* <h1>{hotel.title}</h1>
      <p>{hotel.description}</p> */}
      {/* <div>
     <h1>{hotel.title}</h1>
      <p>{hotel.description}</p>
        {hotel.images?.map((image, index) => (
          <img
            key={index}
            src={`http://localhost:8000${image}`}
            alt={hotel.title}
            style={{
              width: "300px",
              height: "200px",
              objectFit: "cover",
              margin: "10px",
              borderRadius: "8px",
            }}
          />
        ))}
      </div> */}
    </div>
  );
};

export default HotelDetails;

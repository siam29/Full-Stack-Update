"use client";

import AboutHost from "@/components/AboutHost";
import AboutThisProperty from "@/components/AboutProperty";
import Amenities from "@/components/Amenities";
import CancellationPolicy from "@/components/CancellationPolicy";
import HeaderActions from "@/components/HeaderActions";
import HouseRules from "@/components/HouseRules";
import ImportantInformation from "@/components/ImportantInformation";
import Map from "@/components/Map";
import Navbar from "@/components/Navbar";
import PropertyGallery from "@/components/property-gallery";
import PropertyManager from "@/components/PropertyManager";
import Question from "@/components/Question";
import QuestionSection from "@/components/QuestionSection";
import Reviews from "@/components/Reviews";
import RoomsAndBeds from "@/components/RoomandBed";
import SendMessage from "@/components/SendMessage";
import Tab from "@/components/Tab";
import axios from "axios";
import { useEffect, useState } from "react";

type Hotel = {
  id: number;
  title: string;
  description: string;
  location: string;
  images: string[];
  rooms: number;
  rating: number;
  amenities: string[];
  bedroom_count: number;
  bathroom_count: number;
  room_information: {
    room_title: string;
    bedroom_count: number;
    bathroom_count: number;
  }[];
};

const HotelDetails = ({ params }: { params: { id: string } }) => {
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/hotels/${params.id}`
        );
        setHotel(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching hotel details:", err);
        setError("Failed to load hotel details.");
        setLoading(false);
      }
    };

    fetchHotel();
  }, [params.id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!hotel) return <div>Hotel not found</div>;

  return (
    <div>
      <Navbar />
      <HeaderActions
        hotel={{ title: hotel.title, description: hotel.description }}
      />
      <PropertyGallery images={hotel.images} />
      <Tab />
      <Map
        hotel={{
          title: hotel.title,
          rooms: hotel.rooms,
          amenities: hotel.amenities,
          rating: hotel.rating,
        }}
      />{" "}
      <RoomsAndBeds
        rooms={hotel.room_information}
        totalBedrooms={hotel.bedroom_count}
        totalBathrooms={hotel.bathroom_count}
      />
      <AboutThisProperty hotel={hotel} />
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

"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Link from "next/link";

type Hotel = {
  id: number;
  title: string;
  location: string;
  slug: string;
  room_information: Rome[]; 
};

type Rome = {hotel_slug: string;
          room_slug: string;
          room_image: string;
          room_title: string;
          bedroom_count: number;
          bathroom_count: number;};

const Home = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]); // Define the type for hotels
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Allow error to be string or null

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get("http://localhost:8000/hotels");
        console.log("Fetched hotels:", response.data); // Debugging log
        setHotels(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching hotels:", err);
        setError("Failed to load hotel data.");
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Navbar /> {/* Render the navbar */}
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>All Hotels</h1>
      {hotels.length > 0 ? (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {hotels.map((hotel) => (
            <li
              key={hotel.id}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                margin: "10px 0",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h2>{hotel.title}</h2>
              <p>ID: {hotel.id}</p>
              <p>Location: {hotel.location}</p>
              {/* Fix: Remove <a> tag */}
              <Link
                href={`/hotels-details/${hotel.room_information[0].hotel_slug}/${hotel.id}`}
                style={{ color: "blue", textDecoration: "underline" }}
              >
                View Details
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>No hotels available.</div>
      )}
    </div>
  );
};

export default Home;

"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

// Define the type for a hotel object
type Hotel = {
  id: number;
  title: string;
  location: string;
  slug: string;
};

const FirstPage = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]); // Explicitly define the type of hotels
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get("http://localhost:8000/hotels"); // Backend endpoint
        setHotels(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching hotels:", err);
        setError("Failed to load hotels.");
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
      <h1>All Hotels</h1>
      {hotels.length > 0 ? (
        <ul>
          {hotels.map((hotel) => (
            <li key={hotel.id} style={{ margin: "10px 0" }}>
              <h3>{hotel.title}</h3>
              <p>ID: {hotel.id}</p>
              <p>Location: {hotel.location}</p>
              {/* Use Next.js Link for navigation */}
              <Link href={`/hotels-details/${hotel.slug}/${hotel.id}`}>
                <a style={{ color: "blue", textDecoration: "underline" }}>View Details</a>
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

export default FirstPage;

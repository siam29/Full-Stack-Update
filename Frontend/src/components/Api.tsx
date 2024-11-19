/* import axios from "axios";

// Define the backend base URL
const API_BASE_URL = "http://localhost:8000";

// Interface for Hotel Data
export interface Hotel {
  id: number;
  title: string;
  slug?: string;
  location: string;
  rooms: number;
  rating: number;
  images?: string[];
  description: string;
  guest_count: number;
  bedroom_count: number;
  bathroom_count: number;
  amenities: string[];
  host_information: string;
  address: string;
  latitude: number;
  longitude: number;
  room_information: string;
}

// API Methods
export const api = {
  // Fetch all hotels
  getHotels: async (): Promise<Hotel[]> => {
    const response = await axios.get(`${API_BASE_URL}/hotels`);
    return response.data;
  },

  // Fetch a single hotel by ID
  getHotelById: async (id: number): Promise<Hotel> => {
    const response = await axios.get(`${API_BASE_URL}/hotels/${id}`);
    return response.data;
  },

  // Add a new hotel
  createHotel: async (hotelData: Partial<Hotel>): Promise<Hotel> => {
    const response = await axios.post(`${API_BASE_URL}/hotels`, hotelData);
    return response.data;
  },

  // Update an existing hotel
  updateHotel: async (
    id: number,
    updatedData: Partial<Hotel>
  ): Promise<Hotel> => {
    const response = await axios.put(
      `${API_BASE_URL}/hotels/${id}`,
      updatedData
    );
    return response.data;
  },

  // Upload images for a hotel
  uploadHotelImages: async (
    hotelId: number,
    files: File[]
  ): Promise<{ images: string[] }> => {
    const formData = new FormData();
    formData.append("hotelId", hotelId.toString());
    files.forEach((file) => {
      formData.append("images", file);
    });

    const response = await axios.post(
      `${API_BASE_URL}/hotels/images`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  },
};
 */

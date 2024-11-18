const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const multer = require("multer");

const app = express();
const PORT = 8000;

const DATA_FILE = "./hotel-id.json";
const UPLOAD_DIR = "./uploads";

// Enable CORS
app.use(cors({
  origin: "http://localhost:3000", // Your frontend URL
  methods: "GET,POST,PUT",
}));

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure the upload directory exists
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR);
}

// Serve static files from the uploads directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_DIR);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Utility functions for JSON file handling
const fileExists = (filePath) => fs.existsSync(filePath);

const readData = () => {
  try {
    if (!fileExists(DATA_FILE)) {
      writeData({ hotels: [] });
    }
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading data:", error.message);
    return { hotels: [] };
  }
};

const writeData = (data) => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing data:", error.message);
  }
};

// Routes
// 1. Get all hotels
app.get("/hotels", (req, res) => {
  const data = readData();
  res.json(data.hotels);
});

// 2. Get a hotel by ID
app.get("/hotels/:id", (req, res) => {
  const data = readData();
  const hotel = data.hotels.find((h) => h.id === parseInt(req.params.id));
  if (hotel) {
    res.json(hotel);
  } else {
    res.status(404).send("Hotel not found");
  }
});

// Helper function to create a slug from a string
const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
};

// 3. Add a new hotel
app.post("/hotels", (req, res) => {
  console.log("Received data:", req.body);

  const data = readData();
  const newHotel = {
    id: data.hotels.length + 1,
    title: req.body.title,
    slug: slugify(req.body.title),
    location: req.body.location,
    rooms: req.body.rooms,
    rating: req.body.rating,
    images: req.body.images || [],
    description: req.body.description,
    guest_count: req.body.guest_count,
    bedroom_count: req.body.bedroom_count,
    bathroom_count: req.body.bathroom_count,
    amenities: req.body.amenities,
    host_information: req.body.host_information,
    address: req.body.address,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    room_information: req.body.room_information,
  };

  data.hotels.push(newHotel);
  writeData(data);

  console.log("New hotel added:", newHotel);
  res.status(201).json(newHotel);
});

// 4. Update an existing hotel
app.put("/hotels/:id", (req, res) => {
  const data = readData();
  const hotelIndex = data.hotels.findIndex((h) => h.id === parseInt(req.params.id));
  if (hotelIndex !== -1) {
    data.hotels[hotelIndex] = { ...data.hotels[hotelIndex], ...req.body };
    writeData(data);
    res.json(data.hotels[hotelIndex]);
  } else {
    res.status(404).send("Hotel not found");
  }
});

// 5. Upload images and update hotel record
app.post("/hotels/images", upload.array("images"), (req, res) => {
  const hotelId = parseInt(req.body.hotelId); // Get the hotel ID from the request body
  const data = readData();
  const hotel = data.hotels.find((h) => h.id === hotelId);

  if (!hotel) {
    return res.status(404).send("Hotel not found");
  }

  // Get URLs of uploaded images
  const imageUrls = req.files.map((file) => `/uploads/${file.filename}`);

  // Update the hotel record with new image URLs
  hotel.images = [...(hotel.images || []), ...imageUrls];
  writeData(data);

  console.log(`Images uploaded for hotel ID ${hotelId}:`, imageUrls);
  res.status(200).json({ message: "Images uploaded successfully", images: imageUrls });
});

// Start the server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

module.exports = app; // Export for testing

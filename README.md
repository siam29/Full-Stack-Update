# Overview

This is a full-stack web application built with React (Next.js) for the frontend and Node.js (Express) for the backend. The application showcases a property listing feature with functionality to view image galleries, details, and a fully operational REST API for managing data.

# Features

### Frontend

- 🚀 **Next.js** for Server-Side Rendering (SSR) and static generation.
- **React**: Component-based UI development for dynamic and reusable UI elements.
- **TailwindCSS**: Utility-first CSS framework for rapid and responsive design.

- 📱 Responsive UI built with TailwindCSS.
- 🖼️ **Property Gallery:**
  - Displays hotel images in a clean and organized layout.
  - Supports modal-based image viewing for better user experience.
- 🎨 **Accessible Design:** Ensures the application is easy to use and visually appealing.

### 🛠️ Backend

- **Node.js** and **Express** for the backend server.
- 🌐 **RESTful API** to manage hotel data efficiently.
- 📤 **File Upload** functionality using **Multer** for handling image uploads.
- 🗃️ **Data Storage**:

  - Utilizes **JSON files** for lightweight and easy-to-manage data storage.
  - _(Future Enhancement)_: Designed to seamlessly connect with a database for better scalability and performance.

  ### Testing

- ✅ **Jest** for reliable and fast testing.
- 🧪 **React** Testing Library:
  - Ensures React components function as expected.
- 🔍 **Unit Tests:**
  - Comprehensive testing for both frontend and backend components to maintain code quality and reliability.

### ⚙️ Technologies Used

| Technology          | Purpose            |
| ------------------- | ------------------ |
| **Next.js**         | Frontend framework |
| **React**           | UI components      |
| **Node.js**         | Backend server     |
| **Express.js**      | Backend routing    |
| **TailwindCSS**     | Styling framework  |
| **Jest**            | Unit testing       |
| **Testing Library** | Component testing  |

## 🚀 Getting Started

### Prerequisites

Ensure your system meets the following requirements:

- **Node.js**: Version 16 or later.
- **npm** or **yarn**: Installed globally on your system.

---

### 🔧 Running the Application

#### Step 1: Clone the Repository

Clone the repository to your local system:

```bash
git clone https://github.com/your-repo/full-stack-update.git
cd full-stack-update
```


#### Step 2: Install Dependencies

### Frontend:

```bash
npm install
npm run dev
```
- The frontend will be available at http://localhost:3000.


### Backend:
- Open another terminal for running backend 

```
cd Backend
node server.js
```
- The backend server will be available at http://localhost:8000.

#### Step 2: Testing
### Frontend Tests
Run frontend tests using Jest:
````
npm test
````

### Backend Tests
Run backend tests:
````
cd Backend
npm test
````
## 🌐 API Endpoints

The backend server provides the following RESTful API endpoints for managing hotel data and images:

| **Method** | **Endpoint**         | **Description**                       |
|------------|-----------------------|---------------------------------------|
| `GET`      | `/hotels`            | Fetch all hotels                      |
| `GET`      | `/hotels/:id`        | Fetch a specific hotel by ID          |
| `POST`     | `/hotels`            | Add a new hotel                       |
| `PUT`      | `/hotels/:id`        | Update an existing hotel              |
| `POST`     | `/hotels/images`     | Upload images for a specific hotel    |

---

### Example Usage

#### Fetch all hotels:
**Request:**
```bash
GET /hotels
```
**Response:**
```bash
[
  {
    "id": 1,
    "title": "Hotel Paradise",
    "location": "Los Angeles",
    "rooms": 80,
    "rating": 4.5,
    "images": ["/uploads/image1.jpg", "/uploads/image2.jpg"],
    "description": "A luxurious getaway in Los Angeles.",
    "amenities": ["Spa", "Free Parking", "Gym"],
    "host_information": {
      "host_name": "Jane Smith",
      "contact": "jane.smith@example.com"
    }
  }
]
```

#### Fetch unique hotels:
**Request:**
```bash
GET /hotels/1
```

**Response:**

```
{
  "id": 1,
  "title": "Hotel Paradise",
  "location": "Los Angeles",
  "rooms": 80,
  "rating": 4.5,
  "images": ["/uploads/image1.jpg", "/uploads/image2.jpg"],
  "description": "A luxurious getaway in Los Angeles.",
  "amenities": ["Spa", "Free Parking", "Gym"],
  "host_information": {
    "host_name": "Jane Smith",
    "contact": "jane.smith@example.com"
  }
}
```

```
full-stack-update/
├── Backend/               # Backend code
│   ├── server.js          # Express server
│   ├── hotel-id.json      # Mock database
│   └── uploads/           # Uploaded images
├── public/                # Public assets
├── src/                   # Frontend code
│   ├── app/               # Next.js app folder
│   │   ├── layout.tsx     # Main layout for the application
│   │   ├── page.tsx       # Home page component
│   │   └── styles.css     # Global styles
│   ├── components/        # React components
│ F |
| R |
| O |
| N |
| T |
| E |
| N |
| D │   ├── AboutHost.tsx     # Component for host information
│   │   ├── AboutProperty.tsx   # Component for property details
│   │   ├── Amenities.tsx   # Component for displaying amenities
│   │   ├── Api.tsx                # API integration component
│   │   ├── CancellationPolicy.tsx # cancellation policies
│   │   ├── FirstPage.tsx          # Landing page component
│   │   ├── HeaderActions.tsx      # Header action buttons
│   │   ├── HouseRules.tsx         # Component for house rules
│   │   ├── ImportantInformation.tsx # important details
│   │   ├── Map.tsx                # Map component
│   │   ├── Navbar.tsx             # Navigation bar
│   │   ├── PropertyGallery.tsx    # Image gallery  properties
│   │   ├── PropertyManager.tsx   # Property management features
│   │   ├── Question.tsx           # Frequently asked questions
│   │   ├── QuestionSection.tsx    # FAQ section component
│   │   ├── Reviews.tsx            # Review display
│   │   ├── RoomAndBed.tsx         # Room and bed details
│   │   ├── SendMessage.tsx        # Contact host form
│   │   └── Tab.tsx             # Tab-based navigation component
│   └── __tests__/         # Test files
│       ├── components/    # Unit tests for components
│       └── utils/         # Helper test utilities
├── jest.setup.ts      # Jest setup file for initializing test 
├── jest.config.ts     # Jest configuration file for test runner
├── package.json           # Project metadata and dependencies
├── tailwind.config.ts     # TailwindCSS configuration
└── README.md              # Documentation and usage details
```

## 🔧 Necessary Installations
Before starting, install the following global dependencies:

- **Node.js** (v16 or later): [Download Node.js](https://nodejs.org/)
- **npm** or **yarn**: Comes bundled with Node.js.
- **Git**: [Install Git](https://git-scm.com/).

### Key Backend Libraries:
- Express.js: For creating RESTful APIs.

```
npm install express
```
- Multer: For handling file uploads.

```
npm install multer
```
CORS (optional): To handle cross-origin requests.
```
npm install cors
```
### Key Frontend Libraries:
- React: For building UI components.
```
npm install react react-dom
```
- Next.js: For server-side rendering and static generation.
```
npm install next
```
- TailwindCSS: For responsive styling.
```
npm install tailwindcss postcss autoprefixer
```
- FontAwesome: For icons in the UI.
```
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
```


# Contact
For any inquiries or suggestions, feel free to contact:

- Al Mahmud Siam: almahmudsiam95@gmail.com
- GitHub: https://github.com/siam29

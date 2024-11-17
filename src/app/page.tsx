// src/app/page.tsx
import AboutHost from "../components/AboutHost";
import AboutProperty from "../components/AboutProperty";
import CancellationPolicy from "../components/CancellationPolicy";
import HeaderActions from "../components/HeaderActions";
import HouseRules from "../components/HouseRules";
import ImportantInformation from "../components/ImportantInformation";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import PropertyManager from "../components/PropertyManager";
import Question from "../components/Question";
import QuestionSection from "../components/QuestionSection";
import Reviews from "../components/Reviews";
import RoomsAndBeds from "../components/RoomandBed";
import Tab from "../components/Tab";
import PropertyGallery from "../components/property-gallery";

function Home() {
  return (
    <div>
      <Navbar />
      <HeaderActions />
      <PropertyGallery />
      <Tab />
      <Map />
      <RoomsAndBeds />
      <AboutProperty />
      <PropertyManager />
      <QuestionSection />
      <HouseRules />
      <CancellationPolicy />
      <ImportantInformation />
      <Question />
      <Reviews />
      <AboutHost />
    </div>
  );
}

export default Home;

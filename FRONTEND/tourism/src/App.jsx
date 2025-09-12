import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"; 
import Culture from "./pages/Culture"; 
import Tourism from "./pages/Tourism"; 
import Gallery from "./pages/Gallery"; 
import Footer from "./components/Footer"; 
import Contact from "./pages/Contact"; 
import Policy from "./pages/Policy";
import Complain from "./pages/Complain"; 
import ScrollToTop from "./ScrollToTop";
import TransportServices from "./pages/TransportServices"; 
import Dashboard from "./components/Dashboard"; 
import Signup from "./pages/Signup"; 
import TouristSignupPage from "./pages/TouristSignUp"; 
import VendorSignupPage from "./pages/VendorSignUp";
import HotelOwnerSignupPage from "./pages/HotelOwnerSignUp";
import HotelOwnerDashboard from "./pages/HotelOwnerDashboard";
import VendorDashboard from "./pages/VendorDashboard";
import ItineraryPlanner from "./pages/ItineraryPlanner";
import Chatbot from "./pages/Aichatbot";
import Login from "./pages/Login";

function App() {
  const location = useLocation();

  // paths where Navbar and Footer should NOT appear
  const noLayoutRoutes = ["/dashboard", "/hotelowner/dashboard", "/vendor/dashboard","/hotelowner/signup","/vendor/signup","/tourist/signup", "/signup", "/itinerary-planner","/chatbot","/login"];

  return (
    <>
      {/* Hide Navbar on dashboard routes */}
      {!noLayoutRoutes.includes(location.pathname) && <Navbar />}
      
      <ScrollToTop />
      {/* <AuthProvider> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/complain" element={<Complain />} />
        <Route path="/transport" element={<TransportServices />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tourist/signup" element={<TouristSignupPage />} />
        <Route path="/vendor/signup" element={<VendorSignupPage />} />
        <Route path="/hotelowner/signup" element={<HotelOwnerSignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hotelowner/dashboard" element={<HotelOwnerDashboard />} />
        <Route path="/vendor/dashboard" element={<VendorDashboard />} />
        <Route path="/itinerary-planner" element={<ItineraryPlanner />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* Hide Footer on dashboard routes */}
      {!noLayoutRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;

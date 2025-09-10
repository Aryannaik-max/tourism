import { Link } from "react-router-dom";
import YouTubeCarousel from "../components/YouTubeCarousel";
import Map from "../components/Map";
import ExploreTransport from "../components/ExploreTransport";

const Home = () => {
  return (
    <main className="bg-gray-100 min-h-screen font-sans">

      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
        style={{ 
          backgroundImage: "url('https://source.unsplash.com/1600x900/?jharkhand,india,travel')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Color Overlay to Match Palette */}
        <div className="absolute inset-0 bg-[#152A4C] opacity-70"></div>
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
            Discover the Undiscovered
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light mb-8">
            Experience the soul of India in Jharkhand, a land of enchanting landscapes, rich culture, and vibrant traditions.
          </p>
          <Link 
            to="/tourism" 
            className="inline-block px-10 py-4 bg-[#4CAF50] text-white font-semibold rounded-full transition-transform transform hover:scale-105 hover:bg-[#5cb85c] focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:ring-offset-2"
          >
            Explore Now
          </Link>
        </div>
      </section>
      
      {/* --- */}
      
      {/* Digital Tools Section - Now on a darker background for contrast */}
      <section className="py-20 bg-[#152A4C] text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#4CAF50]">
            Digital Tools for Your Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="bg-[#243B55] p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Personalized Itineraries</h3>
              <p className="text-gray-300">AI-based planning to create a unique travel plan just for you.</p>
            </div>
            <div className="bg-[#243B55] p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Multilingual Chatbot</h3>
              <p className="text-gray-300">Get instant assistance in multiple languages for all your travel queries.</p>
            </div>
            <div className="bg-[#243B55] p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Interactive Maps & Geo-location</h3>
              <p className="text-gray-300">Explore interactive maps with real-time transport and location information.</p>
            </div>
            <div className="bg-[#243B55] p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Local Marketplace</h3>
              <p className="text-gray-300">Discover and book tribal handicrafts, events, homestays, and eco-tourism experiences.</p>
            </div>
            <div className="bg-[#243B55] p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">AI-Driven Feedback</h3>
              <p className="text-gray-300">Help us improve your experience with AI-based sentiment analysis and feedback.</p>
            </div>
            <div className="bg-[#243B55] p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Official Dashboard</h3>
              <p className="text-gray-300">Access real-time analytics to monitor tourism trends and impact (for officials).</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Video Carousel Section - Background color is switched to a light gray */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#152A4C]">
            Journey Through Jharkhand
          </h2>
          <YouTubeCarousel />
        </div>
      </section>
      
      {/* --- */}

      {/* Map Section - Background color is switched to white */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#152A4C]">
            Find Your Next Adventure
          </h2>
          <Map />
        </div>
      </section>

      {/* --- */}

      {/* Transport Section - Background color is switched to a light gray */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#152A4C]">
            Seamless Travel and Transport
          </h2>
          <ExploreTransport />
        </div>
      </section>
      
    </main>
  );
};

export default Home;
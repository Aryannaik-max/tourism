import { Link } from 'react-router-dom';

const ExploreTransport = () => {
  return (
    <div className="bg-[#152A4C] text-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
      
      {/* Text Container */}
      <div className="text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-bold">
          Explore Transport Services
        </h3>
        <p className="mt-2 text-base md:text-lg text-gray-200">
          Find your way around with ease. Discover various transport options to make your journey comfortable.
        </p>
      </div>

      {/* Button Container */}
      <div className="flex-shrink-0 mt-4 md:mt-0">
        <Link 
          to="/transport" 
          className="inline-block px-8 py-3 bg-[#4CAF50] text-white font-semibold rounded-full shadow-md transition-transform transform hover:scale-105 hover:bg-[#5cb85c] focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:ring-offset-2"
        >
          EXPLORE
        </Link>
      </div>
      
    </div>
  );
}

export default ExploreTransport;
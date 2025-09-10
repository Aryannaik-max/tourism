import React, { useState } from 'react';

// Main App component that contains the entire application
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home');

  // Function to toggle the mobile menu's visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle navigation and close the menu on link click
  const handleNavigation = (pageName) => {
    setCurrentPage(pageName);
    setIsMenuOpen(false); // Close the menu after navigation on mobile
  };

  // Function to render the correct page content based on currentPage state
  const renderPageContent = () => {
    switch (currentPage) {
      case 'Home':
        return <div className="p-8 md:p-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">Welcome to EcoCity</h1>
          <p className="text-lg md:text-xl text-gray-600">
            Explore the vibrant culture, breathtaking tourism, and beautiful gallery of our sustainable city.
          </p>
        </div>;
      case 'Culture':
        return <div className="p-8 md:p-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">Our Culture</h1>
          <p className="text-lg md:text-xl text-gray-600">
            Dive into the traditions, art, and community spirit that make EcoCity unique.
          </p>
        </div>;
      case 'Tourism':
        return <div className="p-8 md:p-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">Tourism in EcoCity</h1>
          <p className="text-lg md:text-xl text-gray-600">
            Discover our green spaces, historic landmarks, and eco-friendly attractions.
          </p>
        </div>;
      case 'Gallery':
        return <div className="p-8 md:p-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">Gallery</h1>
          <p className="text-lg md:text-xl text-gray-600">
            A visual journey through the scenic beauty and daily life of EcoCity.
          </p>
        </div>;
      case 'Sign In':
        return <div className="p-8 md:p-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">Sign In</h1>
          <p className="text-lg md:text-xl text-gray-600">
            Join our community to get the latest updates and special offers.
          </p>
        </div>;
      default:
        return null;
    }
  };

  return (
    <div className="font-sans min-h-screen bg-red-500 text-gray-900 w-full border-2">
      {/* Navbar Section */}
      <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-green-600">EcoCity</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="#" 
              onClick={() => handleNavigation('Home')} 
              className={`nav-link-desktop ${currentPage === 'Home' ? 'text-green-600 font-bold' : ''}`}
            >
              Home
            </a>
            <a 
              href="#" 
              onClick={() => handleNavigation('Culture')} 
              className={`nav-link-desktop ${currentPage === 'Culture' ? 'text-green-600 font-bold' : ''}`}
            >
              Culture
            </a>
            <a 
              href="#" 
              onClick={() => handleNavigation('Tourism')} 
              className={`nav-link-desktop ${currentPage === 'Tourism' ? 'text-green-600 font-bold' : ''}`}
            >
              Tourism
            </a>
            <a 
              href="#" 
              onClick={() => handleNavigation('Gallery')} 
              className={`nav-link-desktop ${currentPage === 'Gallery' ? 'text-green-600 font-bold' : ''}`}
            >
              Gallery
            </a>
            <a 
              href="#" 
              onClick={() => handleNavigation('Sign In')} 
              className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition-colors duration-300 transform hover:scale-105"
            >
              SIGN IN
            </a>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg 
                className="w-8 h-8 text-green-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 p-6 flex flex-col items-center justify-center space-y-8 animate-fade-in-down transition-transform duration-300 ease-in-out transform">
          <a 
            href="#" 
            onClick={() => handleNavigation('Home')} 
            className="text-2xl font-semibold text-gray-800 hover:text-green-600 transition-colors duration-300"
          >
            Home
          </a>
          <a 
            href="#" 
            onClick={() => handleNavigation('Culture')} 
            className="text-2xl font-semibold text-gray-800 hover:text-green-600 transition-colors duration-300"
          >
            Culture
          </a>
          <a 
            href="#" 
            onClick={() => handleNavigation('Tourism')} 
            className="text-2xl font-semibold text-gray-800 hover:text-green-600 transition-colors duration-300"
          >
            Tourism
          </a>
          <a 
            href="#" 
            onClick={() => handleNavigation('Gallery')} 
            className="text-2xl font-semibold text-gray-800 hover:text-green-600 transition-colors duration-300"
          >
            Gallery
          </a>
          <a 
            href="#" 
            onClick={() => handleNavigation('Sign In')} 
            className="bg-green-600 text-white px-8 py-3 rounded-full text-2xl font-semibold hover:bg-green-700 transition-colors duration-300"
          >
            SIGN IN
          </a>
          {/* Close button */}
          <button onClick={toggleMenu} className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 focus:outline-none">
            <svg 
              className="w-8 h-8" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      )}

      {/* Main content area */}
      <main className="container mx-auto mt-8 p-4">
        {renderPageContent()}
      </main>
    </div>
  );
};

export default App;

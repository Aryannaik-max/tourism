import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-2  shadow-md flex justify-center">
        <div className="w-full  px-4 sm:px-6 lg:px-8 border-2">
          <div className="flex justify-between h-16 w-full">
            {/* Logo */}
            <div className="flex  justify-between  w-full">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-2xl font-bold text-green-600">
                  JharkhandTravel
                </Link>
              </div>

              {/* Links */}
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
  to="/"
  className="relative inline-flex items-center px-4 my-2 text-base font-semibold text-gray-600 rounded-xl transition-all duration-300 ease-out hover:text-green-600 hover:scale-105 hover:bg-green-200"
>
  Home
</Link>





                <Link
                  to="/culture"
                  className="relative inline-flex items-center px-4 my-2 text-base font-semibold text-gray-600 rounded-xl transition-all duration-300 ease-out hover:text-green-600 hover:scale-105 hover:bg-green-200"
                >
                  Culture
                </Link>
                <Link
                  to="/tourism"
                  className="relative inline-flex items-center px-4 my-2 text-base font-semibold text-gray-600 rounded-xl transition-all duration-300 ease-out hover:text-green-600 hover:scale-105 hover:bg-green-200"
                >
                  Tourism
                </Link>
                <Link
                  to="/about"
                  className="relative inline-flex items-center px-4 my-2 text-base font-semibold text-gray-600 rounded-xl transition-all duration-300 ease-out hover:text-green-600 hover:scale-105 hover:bg-green-200"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="relative inline-flex items-center px-4 my-2 text-base font-semibold text-gray-600 rounded-xl transition-all duration-300 ease-out hover:text-green-600 hover:scale-105 hover:bg-green-200"
                >
                  Contact
                </Link>
              </div>
              <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-green-600 hover:bg-green-50"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 rounded-md text-sm font-semibold text-white bg-green-600 hover:bg-green-700 shadow-md"
              >
                Sign Up
              </Link>
            </div>
            </div>

            {/* Right-side buttons */}
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

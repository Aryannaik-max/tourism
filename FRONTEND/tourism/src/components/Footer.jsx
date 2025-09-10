import { Link } from "react-router-dom";
// import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
// import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#152A4C] text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Left Section - Logo and Description */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h2 className="text-3xl font-bold text-[#4CAF50]">
            Jharkhand Tourism
          </h2>
          <p className="text-sm text-center md:text-left text-gray-300">
            Exploring the rich culture, breathtaking landscapes, and vibrant traditions of Jharkhand.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-5 mt-6">
            <a href="https://www.facebook.com/VisitJharkhand" target="_blank" rel="noreferrer" className="hover:text-[#4CAF50] transition transform hover:scale-110">
              {/* <FaFacebookF className="w-6 h-6" /> */}
            </a>
            <a href="https://www.instagram.com/jharkhandtourism/" target="_blank" rel="noreferrer" className="hover:text-[#4CAF50] transition transform hover:scale-110">
              {/* <FaInstagram className="w-6 h-6" /> */}
            </a>
            <a href="https://x.com/visitjharkhand" target="_blank" rel="noreferrer" className="hover:text-[#4CAF50] transition transform hover:scale-110">
              {/* <RiTwitterXFill className="w-6 h-6" /> */}
            </a>
            <a href="https://www.youtube.com/channel/UCKDHUzseKwkESQOLzOiVY0A" target="_blank" rel="noreferrer" className="hover:text-[#4CAF50] transition transform hover:scale-110">
              {/* <FaYoutube className="w-6 h-6" /> */}
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="text-center md:text-left space-y-4">
          <h4 className="text-lg font-semibold text-[#4CAF50] uppercase tracking-wide">Quick Links</h4>
          <div className="flex flex-col space-y-2 text-gray-300">
            <Link to="/" className="hover:text-[#4CAF50] transition hover:translate-x-1">Home</Link>
            <Link to="/contact" className="hover:text-[#4CAF50] transition hover:translate-x-1">Contact Us</Link>
            <Link to="/policy" className="hover:text-[#4CAF50] transition hover:translate-x-1">Policy & Rules</Link>
            <Link to="/complain" className="hover:text-[#4CAF50] transition hover:translate-x-1">Complain</Link>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="text-center md:text-left space-y-4">
          <h4 className="text-lg font-semibold text-[#4CAF50] uppercase tracking-wide">Contact Us</h4>
          <div className="space-y-2 text-gray-300">
            <p>
              <strong className="text-white">Directorate of Tourism:</strong><br />
              MDI Building, 3rd Floor, Dhurva, Ranchi-834004<br />
              <a href="mailto:dirjharkhandtourism@gmail.com" className="text-gray-300 hover:text-[#4CAF50] hover:underline">dirjharkhandtourism@gmail.com</a>
            </p>
            <p>
              <strong className="text-white">Department of Tourism:</strong><br />
              FFP Building, 2nd Floor, Dhurva, Ranchi-834004<br />
              <a href="mailto:govjharkhandtourism@gmail.com" className="text-gray-300 hover:text-[#4CAF50] hover:underline">govjharkhandtourism@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Online Booking & Support Section */}
        <div className="text-center md:text-left space-y-4">
          <h4 className="text-lg font-semibold text-[#4CAF50] uppercase tracking-wide">Online Booking & Support</h4>
          <div className="space-y-2 text-gray-300">
            <p>
              <strong className="text-white">JTDC:</strong><br />
              6th Floor, Premium Suit Building, JUPMI Campus, Plant Plaza Road, Dhurwa, Ranchi-834004
            </p>
            <p>
              <a href="mailto:jtdcltd@gmail.com" className="text-gray-300 hover:text-[#4CAF50] hover:underline">jtdcltd@gmail.com</a>
            </p>
            <p>
              <a href="tel:+916512331828" className="text-gray-300 hover:text-[#4CAF50] hover:underline">+91 651 2331828</a>, <a href="tel:+916512331643" className="text-gray-300 hover:text-[#4CAF50] hover:underline">2331643</a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Jharkhand Tourism. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

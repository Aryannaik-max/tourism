import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-tr from-emerald-900 to-teal-900 text-white py-16 px-6 sm:px-12">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Left Section - Logo and Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-green-300">
            Jharkhand Tourism
          </h2>
          <p className="text-sm text-gray-300">
            Exploring the rich culture, breathtaking landscapes, and vibrant traditions of Jharkhand.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-5 mt-6">
            <a href="https://www.facebook.com/VisitJharkhand" target="_blank" rel="noreferrer" className="text-white hover:text-emerald-300 transition-all transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.505 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/jharkhandtourism/" target="_blank" rel="noreferrer" className="text-white hover:text-emerald-300 transition-all transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-.058.058-.439.07-4.85.07s-3.584-.012-4.85-.07c-3.251-.148-4.77-1.691-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919.058-.058.439-.07 4.85-.07zm0-2.163C8.694 0 8.361.011 7.182.071 3.55 1.703 1.704 3.55 1.704 7.182c-.06 1.178-.071 1.511-.071 4.818s.011 3.64.071 4.818c.15 3.238 1.668 4.772 4.818 4.919 1.178.06 1.51.071 4.818.071s3.64-.011 4.818-.071c3.238-.149 4.772-1.668 4.919-4.818.06-1.178.071-1.51.071-4.818s-.011-3.64-.071-4.818c-.149-3.239-1.668-4.773-4.919-4.919C15.636 0 15.304 0 12 0zm0 6.636a5.364 5.364 0 100 10.727 5.364 5.364 0 000-10.727zm0 8.727c-1.85 0-3.364-1.513-3.364-3.364S10.15 8.636 12 8.636s3.364 1.513 3.364 3.364-1.514 3.364-3.364 3.364zm5.33-9.522a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"/>
              </svg>
            </a>
            <a href="https://x.com/visitjharkhand" target="_blank" rel="noreferrer" className="text-white hover:text-emerald-300 transition-all transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.901 1.109a9.559 9.559 0 013.116 1.105 12.015 12.015 0 00-4.04 1.233c.125-.972-.11-1.933-.702-2.738a.95.95 0 00-1.428-.15c-.476.353-.872.827-1.192 1.341a9.563 9.563 0 01-1.776-.431 9.563 9.563 0 00-5.46-1.838A9.55 9.55 0 011.107 8.91c0 2.378.895 4.673 2.658 6.402a.952.952 0 001.373.235c.162-.132.308-.285.438-.45a9.563 9.563 0 01-2.903-1.693l-.116.004a.953.953 0 00-.73 1.334c.18.232.374.453.58.665l-.01.01c.21.205.43.402.66.586a9.554 9.554 0 003.551 2.213 9.563 9.563 0 01-2.03.181c-1.026 0-2.03-.131-2.98-.387a.954.954 0 00-1.05.518c-.06.126-.06.26-.01.4c.05.132.13.256.237.368.106.113.226.216.356.307.41.286.847.534 1.306.746a9.56 9.56 0 004.83 1.115 9.556 9.556 0 01-2.618.667 9.561 9.561 0 005.176-1.579c1.92-1.096 3.52-2.836 4.7-4.887a.952.952 0 00-.547-1.488c-.16-.06-.328-.09-.496-.09a.954.954 0 00-.69.317c-.328.423-.7.818-1.118 1.18a9.563 9.563 0 00-2.044 2.112 9.55 9.55 0 01-7.143 2.654 9.563 9.563 0 01-4.992-1.468c.288-1.42.92-2.73 1.84-3.905a.954.954 0 00.322-.922c-.08-.288-.23-.55-.455-.78-.225-.23-.49-.38-.78-.454a9.554 9.554 0 00-4.04-1.233c1.91-1.39 4.19-2.12 6.6-2.12 1.95 0 3.86.43 5.56 1.258a.954.954 0 00.932-.016c.307-.15.58-.335.82-.555.24-.22.46-.46.66-.71.18-.23.34-.48.47-.73.13-.25.24-.51.32-.78a.953.953 0 00-.23-.974c-.06-.06-.13-.09-.2-.09-.28 0-.54.1-.76.27-.47.36-.97.66-1.5.88a9.556 9.556 0 01-5.756 1.168 9.561 9.561 0 01-1.57-.146c1.198-1.467 2.455-2.673 3.75-3.64a.954.954 0 001.37-.235c.18-.23.35-.47.5-.72.15-.25.28-.51.39-.78a9.55 9.55 0 001.03-3.084.954.954 0 01.95-.916c.31 0 .6.12.82.34l-.01-.01c.22.22.34.52.34.82a.954.954 0 00-.17.51c-.1.2-.23.39-.39.58-.16.2-.33.38-.52.55-.19.18-.39.35-.6.5a9.556 9.556 0 01-.89-.374c-.2-.08-.4-.14-.6-.2a.954.954 0 00-.91-.186c-.19.04-.37.1-.55.19-.18.09-.34.2-.5.31l-.01.01c-.16.11-.31.23-.44.36-.13.13-.26.26-.37.4a.954.954 0 00-.01.996c.21.21.52.33.82.33a.954.954 0 00.67-.21c.28-.2.53-.42.76-.66a9.554 9.554 0 013.065-2.427c1.324-.716 2.766-1.123 4.24-1.228.97-.07 1.93-.05 2.87.05a9.559 9.559 0 01-.81 1.258c-.14.22-.3.42-.47.62l-.01-.01c-.17.2-.34.39-.5.58l-.01.01a.954.954 0 00-.23.954c.05.17.13.33.25.48.12.16.26.29.42.4a9.56 9.56 0 011.59 1.144a.954.954 0 001.19.18l-.01-.01c.23-.15.44-.33.64-.52.2-.2.38-.42.55-.66a9.562 9.562 0 001.44-2.193z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UCKDHUzseKwkESQOLzOiVY0A" target="_blank" rel="noreferrer" className="text-white hover:text-emerald-300 transition-all transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.615 3.184c-3.6-1.3-7.2-1.3-10.8 0-1.2.4-2.2.9-3.2 1.6-1.8 1.2-3.2 2.7-4.2 4.6-.9 1.8-.9 3.8 0 5.6 1.8 3.5 4.8 5.8 8.6 6.3 1.2.2 2.4.3 3.6.3s2.4-.1 3.6-.3c3.8-.5 6.8-2.8 8.6-6.3.9-1.8.9-3.8 0-5.6-1-1.9-2.4-3.4-4.2-4.6-1-.7-2-1.2-3.2-1.6zm-11.838 12.39c-.194.275-.417.49-.668.64-.251.15-.526.257-.824.32-.298.063-.615.093-.95.093s-.652-.03-.95-.093c-.298-.063-.573-.17-.824-.32-.251-.15-.474-.365-.668-.64-.2-.295-.348-.614-.442-.96-.094-.346-.14-.716-.14-1.11s.046-.764.14-1.11c.094-.346.242-.665.442-.96.194-.275.417-.49.668-.64.251-.15.526-.257.824-.32.298-.063.615-.093.95-.093s.652.03.95.093c.298.063.573.17.824.32.251.15.474.365.668.64.2.295.348.614.442.96.094.346.14.716.14 1.11s-.046.764-.14 1.11c-.094.346-.242.665-.442.96z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="text-center md:text-left space-y-4">
          <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-300 uppercase tracking-wide">Quick Links</h4>
          <div className="flex flex-col space-y-2 text-gray-300">
            <a href="#" className="hover:text-emerald-300 transition-colors transform hover:translate-x-1">Home</a>
            <a href="#" className="hover:text-emerald-300 transition-colors transform hover:translate-x-1">Contact Us</a>
            <a href="#" className="hover:text-emerald-300 transition-colors transform hover:translate-x-1">Policy & Rules</a>
            <a href="#" className="hover:text-emerald-300 transition-colors transform hover:translate-x-1">Complain</a>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="text-center md:text-left space-y-4">
          <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-green-300 uppercase tracking-wide">Contact Us</h4>
          <div className="space-y-2 text-gray-300">
            <p>
              <strong className="text-white">Directorate of Tourism:</strong><br />
              MDI Building, 3rd Floor, Dhurva, Ranchi-834004<br />
              <a href="mailto:dirjharkhandtourism@gmail.com" className="text-gray-300 hover:text-emerald-300 hover:underline">dirjharkhandtourism@gmail.com</a>
            </p>
            <p>
              <strong className="text-white">Department of Tourism:</strong><br />
              FFP Building, 2nd Floor, Dhurva, Ranchi-834004<br />
              <a href="mailto:govjharkhandtourism@gmail.com" className="text-gray-300 hover:text-emerald-300 hover:underline">govjharkhandtourism@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Online Booking & Support Section */}
        <div className="text-center md:text-left space-y-4">
          <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-teal-300 uppercase tracking-wide">Online Booking & Support</h4>
          <div className="space-y-2 text-gray-300">
            <p>
              <strong className="text-white">JTDC:</strong><br />
              6th Floor, Premium Suit Building, JUPMI Campus, Plant Plaza Road, Dhurwa, Ranchi-834004
            </p>
            <p>
              <a href="mailto:jtdcltd@gmail.com" className="text-gray-300 hover:text-emerald-300 hover:underline">jtdcltd@gmail.com</a>
            </p>
            <p>
              <a href="tel:+916512331828" className="text-gray-300 hover:text-emerald-300 hover:underline">+91 651 2331828</a>, <a href="tel:+916512331643" className="text-gray-300 hover:text-emerald-300 hover:underline">2331643</a>
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
import React from "react";
import logo from "../../public/images/logo.png";
const Header = () => {
  return (
    <header>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-xs md:text-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
            <span className="flex items-center">📞 +91 9876543210</span>
            <span className="flex items-center">✉️ example@email.com</span>
          </div>
          <div className="flex gap-3 md:gap-4">
            <a href="#" className="hover:text-blue-200 transition">
              Facebook
            </a>
            <a href="#" className="hover:text-blue-200 transition">
              Instagram
            </a>
            <a href="#" className="hover:text-blue-200 transition">
              YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Main Header - Centered with Gradient */}
      <div className="bg-white py-3 md:py-4 shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="flex items-center gap-3 md:gap-4">
            {/* Logo */}
            <img
              src={logo}
              alt="College Logo"
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
            <div className="text-center">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide leading-tight bg-linear-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                Space Junior and Degree College
              </h1>
              {/* <p className="text-gray-600 text-xs md:text-sm font-medium tracking-wider mt-1">
                Affiliated to Yogi Vemana University
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

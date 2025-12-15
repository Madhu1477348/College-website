import React from "react";
import logo from "../../public/images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-xs md:text-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
            <Link href="tel:+919490274848" className="flex items-center">📞 +91 9490274848</Link>
            <Link href="tel:+919440224233" className="flex items-center">📞 +91 9440224233</Link>
            <Link href="mailto:spacejuniorcollege@gmail.com" className="flex items-center">✉️ spacejuniorcollege@gmail.com</Link>
            <Link href="mailto:spacewomendegreecollege@gmail.com" className="flex items-center">✉️ spacewomendegreecollege@gmail.com</Link>
          </div>
          {/* <div className="flex gap-3 md:gap-4">
            <Link href="#" className="hover:text-blue-200 transition">
              Facebook
            </Link>
            <Link href="#" className="hover:text-blue-200 transition">
              Instagram
            </Link>
            <Link href="#" className="hover:text-blue-200 transition">
              YouTube
            </Link>
          </div> */}
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
                University Name
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

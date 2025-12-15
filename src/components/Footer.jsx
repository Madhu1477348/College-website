import React from "react";
import { Link } from "react-router-dom";
import {
  IoLocationSharp,
  IoCall,
  IoMail,
  // IoLogoFacebook,
  // IoLogoTwitter,
  // IoLogoInstagram,
  // IoLogoLinkedin,
} from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">
              Space Junior &amp; Degree College
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Empowering students with quality education and values. We are
              dedicated to shaping the future leaders of tomorrow through
              academic excellence and holistic development.
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <IoLogoFacebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <IoLogoTwitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <IoLogoInstagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <IoLogoLinkedin className="w-6 h-6" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions"
                  className="hover:text-blue-400 transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  to="/syllabus"
                  className="hover:text-blue-400 transition-colors"
                >
                  Syllabus
                </Link>
              </li>
              <li>
                <Link
                  to="/notifications"
                  className="hover:text-blue-400 transition-colors"
                >
                  Notifications
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="hover:text-blue-400 transition-colors"
                >
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Our Courses
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Intermediate (M.P.C, Bi.P.C, C.E.C, M.E.C)</li>
              <li>B.Sc (Computer Science)</li>
              <li>B.Com (Computer Applications)</li>
              <li>B.ZC (Botany, Zoology, Chemistry)</li>
              <li>B.A (History, Economics, Politics)</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <IoLocationSharp className="w-5 h-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                <span>
                  123 College Road, Near Main Center,
                  <br />
                  City Name, State - 500001
                </span>
              </li>
              <li className="flex items-center">
                <IoCall className="w-5 h-5 text-blue-400 mr-2 shrink-0" />
                <span>+91 9490274848</span>
              </li>
              <li className="flex items-center">
                <IoMail className="w-5 h-5 text-blue-400 mr-2 shrink-0" />
                <span>spacejuniorcollege11076@gmail.com</span>
              </li>
              <li className="flex items-center">
                <IoMail className="w-5 h-5 text-blue-400 mr-2 shrink-0" />
                <span>spacewomendegreecollege@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Space Junior &amp; Degree College.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

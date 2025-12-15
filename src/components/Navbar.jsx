import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  IoChevronDown,
  IoChevronForward,
  IoMenu,
  IoClose,
} from "react-icons/io5";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  const menuItems = [
    { title: "Home", link: "/" },
    {
      title: "Courses",
      dropdown: [
        { name: "Inter", link: "/inter" },
        { name: "Degree", link: "/degree" },
      ],
    },
    { title: "Admissions", link: "/admissions" },
    {
      title: "Administration",
      dropdown: [
        { name: "Management", link: "/management" },
        { name: "Staff", link: "/staff" },
      ],
    },
    {
      title: "Examination",
      dropdown: [
        {
          name: "Inter",
          link: "/examination?type=inter",
        },
        {
          name: "Degree",
          link: "/examination?type=degree",
        },
      ],
    },

    {
      title: "Notifications",
      dropdown: [
        { name: "Inter", link: "/notifications" },
        { name: "Degree", link: "/notifications" },
      ],
    },
    {
      title: "Materials",
      dropdown: [
        { name: "Syllabus", link: "/syllabus" },
        { name: "Study Material", link: "/syllabus" },
      ],
    },
    { title: "Contact", link: "/contact" },
  ];

  const toggleMobileDropdown = (index) => {
    setMobileDropdownOpen(mobileDropdownOpen === index ? null : index);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 w-full justify-center">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => setActiveDropdown(idx)}
              >
                <Link
                  to={item.link || "#"}
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium flex items-center"
                >
                  {item.title}
                  {item.dropdown && <IoChevronDown className="ml-1" />}
                </Link>

                {/* Dropdown – keep it open while hovering sub‑items */}
                {item.dropdown && activeDropdown === idx && (
                  <div
                    className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                    onMouseLeave={() => {
                      setActiveDropdown(null);
                      setActiveSubDropdown(null);
                    }}
                  >
                    {item.dropdown.map((subItem, subIdx) => (
                      <div key={subIdx} className="relative">
                        {subItem.subItems ? (
                          <>
                            <Link
                              to="#"
                              className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex justify-between items-center"
                              onMouseEnter={() => setActiveSubDropdown(subIdx)}
                            >
                              {subItem.title}
                              <IoChevronForward />
                            </Link>

                            {activeSubDropdown === subIdx && (
                              <div className="absolute left-full top-0 w-48 bg-white rounded-md shadow-lg py-1">
                                {subItem.subItems.map((nested, nIdx) => (
                                  <Link
                                    key={nIdx}
                                    to={nested.link || "#"}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                  >
                                    {nested.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <Link
                            to={subItem.link || "#"}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          >
                            {subItem.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <IoClose className="w-6 h-6" />
            ) : (
              <IoMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t">
            {menuItems.map((item, idx) => (
              <div key={idx} className="py-1">
                <div className="flex items-center justify-between">
                  {item.dropdown ? (
                    <button
                      onClick={() => toggleMobileDropdown(idx)}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex-1 text-left"
                    >
                      {item.title}
                    </button>
                  ) : (
                    <Link
                      to={item.link || "#"}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                  {item.dropdown && (
                    <button
                      onClick={() => toggleMobileDropdown(idx)}
                      className="px-4 py-2 text-gray-700"
                    >
                      <IoChevronDown
                        className={`transition-transform ${
                          mobileDropdownOpen === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Sub‑menu */}
                {item.dropdown && mobileDropdownOpen === idx && (
                  <div className="pl-4 bg-gray-50">
                    {item.dropdown.map((subItem, subIdx) => (
                      <div key={subIdx} className="py-1">
                        {subItem.subItems ? (
                          <>
                            <Link
                              to="#"
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                            >
                              {subItem.title}
                            </Link>
                            {subItem.subItems.map((nested, nIdx) => (
                              <Link
                                key={nIdx}
                                to={nested.link || "#"}
                                className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {nested.name}
                              </Link>
                            ))}
                          </>
                        ) : (
                          <Link
                            to={subItem.link || "#"}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

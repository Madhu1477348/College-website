import React from "react";
import {
  IoLeaf,
  IoFlask,
  IoPaw,
  IoCheckmarkCircle,
  IoTelescope,
} from "react-icons/io5";

const BZC = () => {
  const subjects = [
    {
      name: "Botany",
      icon: IoLeaf,
      description: "Study of plant life and biological processes",
      topics: [
        "Plant Anatomy",
        "Plant Physiology",
        "Taxonomy",
        "Ecology",
        "Genetics",
      ],
    },
    {
      name: "Zoology",
      icon: IoPaw,
      description: "Comprehensive study of animal kingdom",
      topics: [
        "Animal Diversity",
        "Cell Biology",
        "Physiology",
        "Evolution",
        "Genetics",
      ],
    },
    {
      name: "Chemistry",
      icon: IoFlask,
      description: "Chemical principles and their applications",
      topics: [
        "Organic Chemistry",
        "Inorganic Chemistry",
        "Physical Chemistry",
        "Biochemistry",
      ],
    },
  ];

  const features = [
    "Well-equipped laboratories with modern instruments",
    "Regular field trips and nature studies",
    "Research-oriented curriculum",
    "Experienced faculty with Ph.D. qualifications",
    "Herbarium and museum facilities",
    "Focus on environmental conservation",
  ];

  const specializations = [
    "Plant Biotechnology",
    "Animal Biotechnology",
    "Environmental Sciences",
    "Microbiology",
    "Biochemistry",
    "Molecular Biology",
  ];

  return (
    <div
      className="theme-bzc min-h-screen"
      style={{
        background:
          "linear-gradient(135deg, var(--theme-light), white, var(--theme-lighter))",
      }}
    >
      {/* Hero Section */}
      <div className="gradient-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              B.ZC (Bot)
            </h1>
            <p className="text-2xl md:text-3xl mb-4 opacity-95">
              Bachelor of Science in Botany, Zoology, Chemistry
            </p>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Exploring life sciences through the study of plants, animals, and
              chemistry
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Course Description */}
          <div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border"
            style={{ borderColor: "var(--theme-light)" }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <IoTelescope
                className="mr-3"
                style={{ color: "var(--theme-primary)" }}
              />
              About B.ZC (Botany)
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              B.ZC is a three-year undergraduate program that provides
              comprehensive knowledge in biological and chemical sciences. This
              course is designed for students passionate about understanding
              life forms, from microscopic organisms to complex ecosystems, and
              the chemical processes that govern them.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              The program combines theoretical knowledge with extensive
              practical training, field work, and research projects, preparing
              students for careers in research, environmental conservation,
              pharmaceuticals, and various government sectors.
            </p>
          </div>

          {/* Subjects Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
              Core Subjects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {subjects.map((subject, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex flex-col items-center mb-4">
                    <div className="gradient-primary p-6 rounded-full mb-4">
                      <subject.icon className="text-4xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 text-center">
                      {subject.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-center">
                    {subject.description}
                  </p>
                  <div className="space-y-2">
                    {subject.topics.map((topic, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-gray-700"
                      >
                        <IoCheckmarkCircle
                          className="mr-2 shrink-0"
                          style={{ color: "var(--theme-primary)" }}
                        />
                        <span className="text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border"
            style={{ borderColor: "var(--theme-light)" }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Program Facilities & Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start group">
                  <IoCheckmarkCircle
                    className="text-2xl mr-3 shrink-0 mt-1 group-hover:scale-125 transition-transform"
                    style={{ color: "var(--theme-primary)" }}
                  />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specializations */}
          <div className="gradient-primary text-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Further Study Specializations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {specializations.map((spec, index) => (
                <div
                  key={index}
                  className="bg-gray bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center font-medium hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 border border-white border-opacity-30"
                >
                  {spec}
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility & Duration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div
              className="bg-white rounded-2xl shadow-xl p-8 border"
              style={{ borderColor: "var(--theme-light)" }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Eligibility Criteria
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <IoCheckmarkCircle
                    className="text-2xl mr-3 shrink-0 mt-1"
                    style={{ color: "var(--theme-primary)" }}
                  />
                  <span className="text-gray-700 text-lg">
                    Completion of 10+2 with Biology/Zoology/Botany
                  </span>
                </li>
                <li className="flex items-start">
                  <IoCheckmarkCircle
                    className="text-2xl mr-3 shrink-0 mt-1"
                    style={{ color: "var(--theme-primary)" }}
                  />
                  <span className="text-gray-700 text-lg">
                    Minimum 50% aggregate in 12th class
                  </span>
                </li>
                <li className="flex items-start">
                  <IoCheckmarkCircle
                    className="text-2xl mr-3 shrink-0 mt-1"
                    style={{ color: "var(--theme-primary)" }}
                  />
                  <span className="text-gray-700 text-lg">
                    Chemistry as a mandatory subject
                  </span>
                </li>
              </ul>
            </div>

            <div
              className="rounded-2xl shadow-xl p-8 border"
              style={{
                background:
                  "linear-gradient(135deg, var(--theme-light), var(--theme-lighter))",
                borderColor: "var(--theme-light)",
              }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Course Information
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="font-semibold text-gray-800 block mb-1">
                    Duration
                  </span>
                  <span
                    className="font-bold text-lg"
                    style={{ color: "var(--theme-primary)" }}
                  >
                    3 Years (6 Semesters)
                  </span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="font-semibold text-gray-800 block mb-1">
                    Degree Type
                  </span>
                  <span
                    className="font-bold text-lg"
                    style={{ color: "var(--theme-secondary)" }}
                  >
                    Bachelor of Science (B.Sc)
                  </span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="font-semibold text-gray-800 block mb-1">
                    Focus Areas
                  </span>
                  <span
                    className="font-bold text-lg"
                    style={{ color: "var(--theme-primary)" }}
                  >
                    Life Sciences & Chemistry
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="gradient-primary text-white rounded-2xl shadow-2xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Discover the World of Life Sciences
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Build a career in research, conservation, and scientific
              innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <a
                href="/admissions"
                className="bg-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                style={{ color: "var(--theme-primary)" }}
              >
                Apply Now
              </a> */}
              <a
                href="/contact"
                className="text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors border-2 border-white"
                style={{ backgroundColor: "var(--theme-secondary)" }}
              >
                Get More Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BZC;

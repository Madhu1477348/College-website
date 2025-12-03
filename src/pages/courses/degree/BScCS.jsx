import React from "react";
import {
  IoLaptop,
  IoCode,
  IoCloud,
  IoCheckmarkCircle,
  IoRocket,
} from "react-icons/io5";

const BScCS = () => {
  const subjects = [
    {
      name: "Programming & DSA",
      icon: IoCode,
      description: "Core programming languages and data structures",
      topics: [
        "C, C++, Java, Python",
        "Data Structures",
        "Algorithms",
        "Object-Oriented Programming",
      ],
    },
    {
      name: "Web & Mobile Development",
      icon: IoLaptop,
      description: "Modern application development technologies",
      topics: [
        "HTML, CSS, JavaScript",
        "React, Angular",
        "Mobile App Development",
        "Full Stack Development",
      ],
    },
    {
      name: "Advanced Computing",
      icon: IoCloud,
      description: "Emerging technologies and specialized domains",
      topics: [
        "Cloud Computing",
        "Machine Learning",
        "AI Basics",
        "Database Management",
        "Cybersecurity",
      ],
    },
  ];

  const features = [
    "Industry-relevant curriculum with latest technologies",
    "Hands-on coding labs and project-based learning",
    "Internship opportunities with tech companies",
    "Expert faculty with industry experience",
    "Hackathons, coding competitions, and tech events",
    "Focus on problem-solving and innovation",
  ];

  const techStack = [
    "Python",
    "Java",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "SQL",
    "Machine Learning",
    "AI",
  ];

  return (
    <div
      className="theme-cs min-h-screen"
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
              B.Sc (CS)
            </h1>
            <p className="text-2xl md:text-3xl mb-4 opacity-95">
              Bachelor of Science in Computer Science
            </p>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Code the future - Build innovative software solutions
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
              <IoRocket
                className="mr-3"
                style={{ color: "var(--theme-primary)" }}
              />
              About B.Sc (Computer Science)
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              B.Sc in Computer Science is a three-year undergraduate program
              that provides comprehensive knowledge of computing fundamentals,
              programming, software development, and emerging technologies. This
              course prepares students for the rapidly evolving tech industry
              with both theoretical concepts and practical skills.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Students gain expertise in programming languages, algorithm
              design, database management, web development, machine learning,
              and cloud computing. The program emphasizes hands-on projects,
              internships, and industry collaboration to ensure students are
              job-ready upon graduation.
            </p>
          </div>

          {/* Subjects Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
              What You'll Learn
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

          {/* Tech Stack */}
          <div className="gradient-primary text-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Technologies You'll Master
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center font-semibold hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 border border-white border-opacity-30"
                >
                  {tech}
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
              Program Highlights
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

          {/* Eligibility & Course Info */}
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
                    Completion of 10+2 with Mathematics
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
                    Interest in programming and technology
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
                    Bachelor of Science
                  </span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="font-semibold text-gray-800 block mb-1">
                    Average Salary (Fresher)
                  </span>
                  <span className="text-green-600 font-bold text-lg">
                    ₹4-8 LPA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="gradient-primary text-white rounded-2xl shadow-2xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Build Your Tech Career Today!
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join India's fastest-growing industry with our comprehensive
              computer science program
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/admissions"
                className="bg-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                style={{ color: "var(--theme-primary)" }}
              >
                Apply Now
              </a>
              <a
                href="/contact"
                className="text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors border-2 border-white"
                style={{ backgroundColor: "var(--theme-secondary)" }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BScCS;

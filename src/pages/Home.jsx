import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import CourseCard from "../components/CourseCard";
import Notification from "../components/Notification";

import { API_URL } from "../api";

const Home = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch(`${API_URL}/notifications/`);
        const data = await res.json();
        setNotifications(data);
      } catch (err) {
        console.error("Error fetching notifications:", err);
      }
    };
    fetchNotifications();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Hero />

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 uppercase relative inline-block">
            Welcome to Space Junior & Degree College
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 mt-2"></span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
            We are committed to providing quality education that empowers
            students to achieve their academic and professional goals. With
            experienced faculty and state-of-the-art facilities, we shape the
            leaders of tomorrow.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12 uppercase">
            Our Courses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Intermediate Card */}
            <CourseCard
              title="Intermediate Education"
              subtitle="INTER"
              items={[
                "M.P.C (Maths, Physics, Chemistry)",
                "Bi.P.C (Biology, Physics, Chemistry)",
                "C.E.C (Civics, Economics, Commerce)",
                "M.E.C (Maths, Economics, Commerce)",
              ]}
              color="blue"
            />

            {/* Degree Card */}
            <CourseCard
              title="Undergraduate Courses"
              subtitle="DEGREE"
              items={[
                "B.Sc (Computer Science)",
                "B.Com (Computer Applications)",
                "B.ZC (Botany, Zoology, Chemistry)",
                "B.A (History, Economics, Politics)",
              ]}
              color="indigo"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Latest Notifications */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b-2 border-blue-200 pb-2">
              Latest Notifications
            </h2>
            <div className="bg-white shadow-md rounded-lg p-6">
              <ul className="space-y-4">
                {notifications.length === 0 ? (
                  <p className="text-gray-500">No new notifications.</p>
                ) : (
                  notifications.map((note) => (
                    <Notification key={note.id} notification={note} />
                  ))
                )}
              </ul>
              <div className="mt-4 text-right">
                <a
                  href="#"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  View All Notifications &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links / Events */}
          {/* <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b-2 border-blue-200 pb-2">
              Quick Links
            </h2>
            <div className="bg-white shadow-md rounded-lg p-6">
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="block p-3 bg-gray-50 rounded hover:bg-blue-50 text-blue-700 font-medium transition hover:pl-4"
                  >
                    Student Portal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-3 bg-gray-50 rounded hover:bg-blue-50 text-blue-700 font-medium transition hover:pl-4"
                  >
                    Faculty Login
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-3 bg-gray-50 rounded hover:bg-blue-50 text-blue-700 font-medium transition hover:pl-4"
                  >
                    Library
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-3 bg-gray-50 rounded hover:bg-blue-50 text-blue-700 font-medium transition hover:pl-4"
                  >
                    Alumni Network
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;

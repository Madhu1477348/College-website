import React from "react";
import CourseCard from "../components/CourseCard";
import { useNavigate } from "react-router-dom";

const Degree = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-purple-600 mb-10">
        Degree Courses
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CourseCard
          title="B.Sc Computer Science"
          subtitle="BSc"
          items={[
            "Programming",
            "Data Structures",
            "Web Development",
            "Software Careers",
          ]}
          color="indigo"
        />

        <CourseCard
          title="B.Com (CA)"
          subtitle="BCom"
          items={[
            "Accounting",
            "Business Studies",
            "Computer Applications",
          ]}
        />

        <CourseCard
          title="B.Z.C"
          subtitle="BZC"
          items={[
            "Botany",
            "Zoology",
            "Chemistry",
            "Life Sciences",
          ]}
        />

        <CourseCard
          title="B.A / B.A.P"
          subtitle="BA"
          items={[
            "History",
            "Economics",
            "Political Science",
          ]}
        />
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/contact")}
          className="bg-purple-600 text-white px-8 py-3 rounded hover:bg-purple-700 transition"
        >
          Enquire Now
        </button>
      </div>
    </div>
  );
};

export default Degree;

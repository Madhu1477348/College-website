import React from "react";
import CourseCard from "../components/CourseCard";
import { useNavigate } from "react-router-dom";

const Inter = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-10">
        Intermediate Courses
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CourseCard
          title="M.P.C"
          subtitle="MPC"
          items={[
            "Mathematics",
            "Physics",
            "Chemistry",
            "Engineering & IIT Foundation",
          ]}
          color="blue"
        />

        <CourseCard
          title="Bi.P.C"
          subtitle="BiPC"
          items={[
            "Biology",
            "Physics",
            "Chemistry",
            "Medical & NEET Foundation",
          ]}
          color="indigo"
        />

        <CourseCard
          title="C.E.C"
          subtitle="CEC"
          items={[
            "Civics",
            "Economics",
            "Commerce",
            "Law & Business Foundation",
          ]}
        />

        <CourseCard
          title="M.E.C"
          subtitle="MEC"
          items={[
            "Mathematics",
            "Economics",
            "Commerce",
            "Commerce Careers",
          ]}
        />

        <CourseCard
          title="M.Bi.P.C"
          subtitle="MBiPC"
          items={[
            "Maths",
            "Biology",
            "Physics",
            "Chemistry",
          ]}
        />
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/contact")}
          className="bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600 transition"
        >
          Enquire Now
        </button>
      </div>
    </div>
  );
};

export default Inter;

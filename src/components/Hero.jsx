import React from "react";

const Hero = () => {
  return (
    <div className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Excellence College
        </h1>
        <p className="text-xl mb-8">Empowering Minds, Shaping Futures</p>
        <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
          Explore Courses
        </button>
      </div>
    </div>
  );
};

export default Hero;

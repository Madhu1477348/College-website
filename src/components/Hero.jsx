// import React from "react";

// const Hero = () => {
//   return (
//     <div className="bg-blue-600 text-white py-20">
//       <div className="container mx-auto px-4 text-center">
//         <h1 className="text-5xl font-bold mb-4">
//           Welcome to Excellence College
//         </h1>
//         <p className="text-xl mb-8">Empowering Minds, Shaping Futures</p>
//         <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
//           Explore Courses
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;


// import React from "react";

// const Hero = () => {
//   return (
//     <div
//       className="relative bg-center bg-cover bg-no-repeat text-white"
//       style={{
//         backgroundImage: "url('images/Banner.jpeg')",
//         minHeight: "80vh",
//       }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//           Welcome to Excellence College
//         </h1>
//         <p className="text-lg md:text-xl mb-8">
//           Empowering Minds, Shaping Futures
//         </p>

//         <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
//           Explore Courses
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full min-h-screen bg-center bg-cover bg-no-repeat flex items-center justify-center text-white"
      style={{
        backgroundImage: "url(images/Banner.jpeg)",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-2 bg-black/40"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4
                       bg-linear-to-r from-white via-yellow-200 to-orange-400
                       bg-clip-text text-transparent">
          Welcome to Space Junior & Degree College
        </h1>

        <p className="text-lg md:text-xl mb-8 text-shadow-cyan-950">
          Empowering Minds, Shaping Futures
        </p>

        <button
          onClick={() => navigate("/admissions")}
          className="bg-blue-600 text-whitw font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition"
        >
          Explore Courses
        </button>
      </div>
    </section>
  );
};

export default Hero;



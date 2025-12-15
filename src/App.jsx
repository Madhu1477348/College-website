import React, { useEffect, useState } from "react";
import axios from 'axios'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import StaffList from "./pages/StaffList";
import Contact from "./pages/Contact";
import Syllabus from "./pages/Syllabus";
import Admissions from "./pages/Admissions";
import Management from "./pages/Management";
import Examination from "./pages/Examination";
import Notifications from "./pages/Notifications";
import Login from "./pages/Login";
import StaffDetails from "./pages/StaffDetails";
// Course pages - Inter
import MPC from "./pages/courses/inter/MPC";
import BiPC from "./pages/courses/inter/BiPC";
import CEC from "./pages/courses/inter/CEC";
import MEC from "./pages/courses/inter/MEC";
import MBiPC from "./pages/courses/inter/MBiPC";
// Course pages - Degree
import BScCS from "./pages/courses/degree/BScCS";
import BComCA from "./pages/courses/degree/BComCA";
import BZC from "./pages/courses/degree/BZC";
import BAP from "./pages/courses/degree/BAP";
import Inter from "./pages/Inter";
import Degree from "./pages/Degree";
import { API_URL } from "./api";

function App() {
    // POPUP STATE
  const [popupImage, setPopupImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(()=>{
    const shown = localStorage.getItem("popupShown");

    if(!shown){
      axios.get(`${API_URL}/popups/`).then((Res) =>{
        if(resizeBy.data.image){
          setPopupImage(resizeBy.data.image);
          setShowPopup(true);
        }
      })
      .catch((err) => console.error("popup error:", err))
    }
  },[])
 
  const closePopup = () => {
    setShowPopup(false);
    localStorage.setItem("popupshown", "true")
  }

  return (
    <Router>
      {/* POPUP */}
      {showPopup && (
        <WelcomePopup
          imageUrl={popupImage}
          onClose={closePopup}
        />
      )}
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/staff" element={<StaffList />} />
            <Route path="/staff/:id" element={<StaffDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/management" element={<Management />} />
            <Route path="/examination" element={<Examination />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/inter" element={<Inter />} />
            <Route path="/degree" element={<Degree />} />

            {/* Inter Course Routes */}
            <Route path="/courses/inter/mpc" element={<MPC />} />
            <Route path="/courses/inter/bipc" element={<BiPC />} />
            <Route path="/courses/inter/cec" element={<CEC />} />
            <Route path="/courses/inter/mec" element={<MEC />} />
            <Route path="/courses/inter/mbipc" element={<MBiPC />} />
            {/* Degree Course Routes */}
            <Route path="/courses/degree/bsc-cs" element={<BScCS />} />
            <Route path="/courses/degree/bcom-ca" element={<BComCA />} />
            <Route path="/courses/degree/bzc" element={<BZC />} />
            <Route path="/courses/degree/bap" element={<BAP />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

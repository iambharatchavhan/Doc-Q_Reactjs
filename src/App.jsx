<<<<<<< HEAD
import Footer from "./components/Footer";
// import Navbar from "./components/navbar/Navbar";
import Testimonials from "./components/Testimonials/Testimonials";
import TopSpecialist from "./components/TopSpecialist/TopSpecialist";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FindDoctors from './components/FindDoctors'
import Services from './components/Services'
import LoginRegister from './components/LoginRegister'
function App() {
  return (
    <div className="mainAppConatiner">
    <Navbar />
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/findDoctors" element={<FindDoctors />} />
        <Route path="/loginRegister" element={<LoginRegister />} />
    </Routes>
    {/* <TopSpecialist/>
    <Testimonials/>
    <Footer/> */}
    </div>

  );
}
=======
// import { Outlet } from "react-router-dom";
// import Header from "./components/Header/Header";
// import Sidebar from "./components/Sidebar/Sidebar";
import DoctorProfile from "./components/Doctorprofile/Doctorprofile";

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <div className="flex justify-end"> */}
        {/* <Sidebar />
        <Outlet /> */}
        <div className="border-2 border-red-500 h-[10svh]">
          <p>Add Common header here</p>
        </div>
        <DoctorProfile/>
      {/* </div> */}
    </>
  );
}

>>>>>>> 036f741af4a678c2db5c2a41b44f6d6552dfee68
export default App;
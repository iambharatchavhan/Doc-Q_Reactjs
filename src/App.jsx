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
export default App;
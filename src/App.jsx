import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
// import Navbar from "./components/Navbar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Services from "./components/Services";
import FindDoctor from "./components/Find_a_doctors_page/data/FindADoctor";
import Doctorprofile from "./components/Doctorprofile/Doctorprofile";
import Dashboard from "./components/Desktop14/Dashboard/Dashboard";
import Task from "./Pages/Task";
import Patients from "./components/Patients/Patients";
// import Messages from "./DoctorMessages/Messages"
import Analytics from "./components/Analytics/Analytics";
import Setting from "./Pages/Settings";
import Support from "./components/Support/Support";
import Schedule from "./components/Schedule/Schedule";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

function App() {
  const [isAdmin, setIsAdmin] = useState(true);


  

  return (
    <>
      {!isAdmin ? (
        <>
          <Navbar />
          <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/our services" element={<Services />} />
            <Route path="/find-doctor" element={<FindDoctor />} />
            <Route path="/doctors-profile" element={<Doctorprofile />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <>
          {/* <AdminDashboard/> */}
          <Header />
          <div className="flex justify-end">
            <Sidebar />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/tasks" element={<Task />} />
              <Route path="/patients" element={<Patients />} />
              <Route
                path="/messages"
                element={<div> Error in the code please update it ASAP </div>}
              />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Setting />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </div>
        </>
      )}
    </>
  );
}

export default App;

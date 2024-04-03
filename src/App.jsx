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

export default App;
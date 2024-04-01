import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-end">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
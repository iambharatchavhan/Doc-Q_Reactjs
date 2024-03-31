import React from "react";
// import "./Desktop14.css";
import Frame49 from "./Frame49";
import Topbar from "./Topbar";
import Sidenavbar from "./Sidenavbar";
import Threetabs from "./Threetabs";
import Frame62 from "./Frame62";
import Frame53 from "./Frame53";

function DeskTop14() {
  return (
    <div className="parent">
      <Topbar />
      <div className="flex">
        <Sidenavbar />
        <div className="w-full border bg-[#FAFAFA]">
          <Frame49 />
          <div className="max-w-full h-auto  m-2">
            <Threetabs />
          </div>
          <div className=" m-auto border xl:flex justify-around ">
            <Frame62 />
            <Frame53 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeskTop14;

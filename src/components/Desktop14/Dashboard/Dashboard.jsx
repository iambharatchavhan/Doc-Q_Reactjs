import React from 'react'
import Frame49 from "./Frame49";
import Threetabs from "./Threetabs";
import Frame62 from "./Frame62";
import Frame53 from "./Frame53";

function Dashboard() {
  return (
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
  )
}

export default Dashboard
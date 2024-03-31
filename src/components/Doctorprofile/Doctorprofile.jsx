import React from "react";
import Navbar from "../Find_a_doctors_page/find_a_doctors_page/Find_a_docter_page";
import "./doctorprofile.css";

const Doctorprofile = () => {
  return (
    <>
      <Navbar />
      <div className="h-[1084px] w-full bg-[#f6fbff] absolute ">
        <div className="h-[1084px] w-full bg-[#8ABBF6] bg-opacity-20 absolute rounded-full right-[64%]"></div>
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-28 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2 absolute">
          <div className="flex flex-col gap-12 w-[576px] justify-center">
            <h1 className="font-bold text-4xl w-96 custom-shadow">
              Dr.Shawn Mandles
            </h1>
            <h2 className="text-xl">
              BDS, MDS - Prosthodontist And Crown Bridge
            </h2>
            <h3 className="text-xl">
              Implantologist, Cosmetic/Aesthetic Dentist, Dental Surgeon,
              Dentist
            </h3>
            <p className="text-lg">19 Years Experience Overall</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctorprofile;
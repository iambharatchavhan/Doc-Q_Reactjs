import React from "react";

function Frame53() {
  return (
    <section className="border bg-[#FFFFFF]  rounded max-w-full  xl:w-2/5 h-auto">
      <div className="flex h-12   items-center mx-2 justify-between">
        <h4 className="font-bold">Upcoming schedule</h4>
        <div className="flex items-center   gap-2">
          <h4 className="text-xs font-bold w-28  text-[#0000AC]">
            New appointment
          </h4>
          <div className=" ">
            <img src="src\assets\Desktop14\plus.png" alt="" />
          </div>
        </div>
      </div>
      <div className="relative w-3/4 m-auto sm:m-auto xl:m-0  ">
        <ul className="flex  h-auto  mx-5 ">
          <div className="flex flex-col md:flex-row ">
            <li className="text-xs text[#828282] sm:border-r-2 h- my-1 mr-4 ml-1 w-28">
              08:00
            </li>
            <div className="h-2 w-2 hidden sm:block bg-[#1D1D1D] absolute rounded  left-32 "></div>
            <div>
              <div className="mt-4 w-40 mr-2 h-12">
                <div className="flex  items-center justify-between ">
                  <div className="w-1 h-1 bg-[#BDBDBD] rounded"></div>
                  <span className="text-xs font-bold w-10 mx-2 text-[#828282]">
                    08:00
                  </span>
                  <p className="text-xs font-normalal w-28   text-[#1D1D1D] line-through">
                    Rice Kotlin
                  </p>
                </div>
                <div className="flex items-center justify-between my-2 ">
                  <div className="w-1 h-1 bg-[#BDBDBD] rounded"></div>
                  <span className="text-xs font-bold w-10 mx-2 text-[#828282]">
                    08:20
                  </span>
                  <p className="text-xs font-normalal w-28   text-[#1D1D1D] line-through">
                    Maya Adamu
                  </p>
                </div>
              </div>
              <div className="my-2  flex flex-col">
                <div className="border my-2 p-1 rounded  relative flex items-center gap-1 ">
                  {/* <img
                    className="absolute"
                    src="src\assets\Desktop14\Polygon 2.png"
                    alt=""
                  /> */}
                  <div className="sm:w-1 sm:h-1 w-2 h-1 bg-[#27AE60] rounded"></div>
                  <span className="text-xs font-bold sm:w-10 mx-2 text-[#1D1D1D]">
                    08:30
                  </span>
                  <p className="text-xs font-bold sm:w-32   text-[#1D1D1D]">
                    Bolaji Abdulraheem
                  </p>
                  <p className="text-xs font-normalal sm:w-28  ml-6  text-[#828282] ">
                    Upcoming
                  </p>
                  <div className="">
                    <img src="src\assets\Desktop14\uparrow.png" alt="" />
                  </div>
                </div>
                <div className=" border  ">
                  <div className="flex items-center  my-2 gap-12">
                    <h4 className="w-12 font-semibold text-xs">Patient</h4>
                    <span className="font-normal text-xs">
                      Bolaji Abdulraheem
                    </span>
                  </div>
                  <div className="flex items-center  my-2 gap-12">
                    <h4 className="w-12 font-semibold text-xs">Time</h4>
                    <span className="font-normal text-xs">8:30 - 9:00</span>
                  </div>
                  <div className="flex items-center my-2  gap-12">
                    <h4 className="w-12 font-semibold text-xs">Purpose</h4>
                    <span className="font-normal text-xs">General Checkup</span>
                  </div>
                  <div className="w-full h-1 rounded bg-[#E0E0E0]"></div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="icon">
                        <img src="src\assets\Desktop14\trash.png " alt="" />
                      </div>
                      <div className="icon">
                        <img src=" src\assets\Desktop14\user.png" alt="" />
                      </div>
                      <div className="icon">
                        <img src="src\assets\Desktop14\pencil.png" alt="" />
                      </div>
                    </div>
                    <div className="h-8 my-1 rounded p-2 pl-8 w-40 bg-[#0000AC] text-xs text-[#FAFAFA]">
                      Begin appointment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
        <ul className="flex h-auto  mx-4">
          <li className="text-xs text[#828282] sm:border-r-2 my-1 mr-4 ml-1 w-28">
            09:00
          </li>
          <div className="h-2 w-2 hidden sm:block bg-[#1D1D1D] absolute rounded  left-32 "></div>
          <div className="mt-4">
            <div className="flex items-center justify-between my-2">
              <div className="w-1 h-1 bg-[#2F80ED] rounded"></div>
              <span className="text-xs font-bold w-10 mx-2 text-[#828282]">
                09:00
              </span>
              <p className="text-xs font-normal w-28  text-[#1D1D1D]">
                Abayomi Johnson
              </p>
            </div>
            <div className="flex items-center justify-between my-2 ">
              <div className="w-1 h-1 bg-[#2F80ED] rounded"></div>
              <span className="text-xs font-bold w-10 mx-2 text-[#828282]">
                09:30
              </span>
              <p className="text-xs font-normal w-28  text-[#1D1D1D]">
                Rebecca Gifts
              </p>
            </div>
          </div>
        </ul>
        <ul className="flex h-auto   mx-4">
          <li className="text-xs text[#828282] sm:border-r-2 my-1 mr-4 ml-1 w-28">
            10:00
          </li>
          <div className="h-2 w-2 hidden sm:block bg-[#1D1D1D] absolute rounded  left-32 "></div>
          <div className="mt-4">
            <div className="flex items-center justify-between my-2">
              <div className="w-1 h-1 bg-[#2F80ED] rounded"></div>
              <span className="text-xs font-bold w-10 mx-2 text-[#828282]">
                10:00
              </span>
              <p className="text-xs font-normal w-28  text-[#1D1D1D]">
                ERC Report
              </p>
            </div>
            <div className="flex items-center justify-between my-2 ">
              <div className="w-1 h-1 bg-[#2F80ED] rounded"></div>
              <span className="text-xs font-bold w-10 mx-2 text-[#828282]">
                10:30
              </span>
              <p className="text-xs font-normal w-28  text-[#1D1D1D]">
                RConsulation meeting
              </p>
            </div>
          </div>
        </ul>
        <ul className="flex h-auto  mx-4">
          <li className="text-xs text[#828282] sm:border-r-2 my-1 mr-4 ml-1 w-28">
            11:00
          </li>
          <div className="h-2 w-2 hidden sm:block bg-[#1D1D1D] absolute rounded  left-32 "></div>
          <div className="mt-4">
            <div className="flex items-center justify-between my-2">
              <div className="w-1 h-1 bg-[#2F80ED] rounded"></div>
              <span className="text-xs font-bold w-10 mx-2 text-[#828282]">
                11:00
              </span>
              <p className="text-xs font-normal w-28  text-[#1D1D1D]">
                Victory Jones
              </p>
            </div>
            <div className="flex items-center justify-between my-2 ">
              <div className="w-1 h-1 bg-[#2F80ED] rounded"></div>
              <span className="text-xs font-bold w-10 mx-2 text-[#828282]">
                11:30
              </span>
              <p className="text-xs font-normal w-28  text-[#1D1D1D]">
                Board meeting
              </p>
            </div>
          </div>
        </ul>
      </div>
    </section>
  );
}

export default Frame53;

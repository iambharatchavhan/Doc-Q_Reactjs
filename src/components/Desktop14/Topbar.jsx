import { React, useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

function Topbar() {
  const [isopen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isopen);
  };

  return (
    <>
      <nav className="h-20 p-2 gap-5 m-w-full border-2 flex items-center justify-between lg:ml-48 ml-0">
        <div
          className="ham border border-zinc-700 hidden relative p-2 text-xl max-[991px]:block"
          onClick={toggle}
        >
          {isopen ? <IoMdClose /> : <MdMenu />}
        </div>
        <div className="search-bar  w-2/4 relative ml-4">
          <input
            id="search"
            className="h-10 w-full border-2 rounded p-4"
            type="text"
            placeholder="Search"
          />
          <img
            id="imgsearch"
            className="absolute bottom-3 right-4"
            src="src\assets\Desktop14\search.png"
            alt="search icon"
          />
        </div>

        <div className="text-right hidden sm:block ">
          <p className="name">John Doe</p>
          <p className="font-bold text-xs lg:text-xs">General Doctor</p>
        </div>
        <div className="border-2 lg:w-32 text-center  hidden sm:block">
          <p className="font-normal">24 Oct 2022</p>
        </div>
        <div className=" gap-3  sm:w-40 flex items-center sm:gap-5 md:justify-between lg:mr-4 ">
          <img
            src="src\assets\Desktop14\VectorMail.png"
            alt="Mail notification icon"
            className="w-6"
          />
          <img
            src="src\assets\Desktop14\mi_notification.png"
            alt="Notification icon"
            className="w-6"
          />
          <img
            src="src\assets\Desktop14\ic_baseline.png"
            alt="Logout icon"
            className="w-6"
          />
        </div>
      </nav>
      <aside>
        <div
          className={`bg-[#FFFFFF] w-56 absolute z-[1000] ${
            isopen ? "block" : "hidden"
          }`}
        >
          <div className="border-2  py-5  lg:w-48">
            <div>
              <h2 className="font-normal text-xs mx-4">MENU</h2>
              <div id="dashboard">
                <li className="flex mx-2 w-44 h-10  items-center ">
                  <div className=""></div>
                  <img
                    className="mx-2 "
                    src="src\assets\Desktop14\dashboard.png"
                    alt="Dashboard/"
                  />
                  Dashboard
                </li>
              </div>
              <li className="flex mx-2 w-44 h-10  items-center">
                <img
                  className="mx-2 "
                  src="src\assets\Desktop14\VectorSchedule.png"
                  alt="Schedule"
                />
                Schedule
              </li>
              <li className="flex mx-2 w-44 h-10  items-center">
                <img
                  className="mx-2 "
                  src="src\assets\Desktop14\task.png"
                  alt="Tasks"
                />
                Tasks
              </li>
              <li className="flex mx-2 w-44 h-10  items-center">
                <img
                  className="mx-2 "
                  src="src\assets\Desktop14\people.png"
                  alt="Patients"
                />
                Patients
              </li>
              <li className="flex mx-2 w-44 h-10  items-center">
                <img
                  className="mx-2 "
                  src="src\assets\Desktop14\VectorMail.png"
                  alt="messages"
                />
                Messages
                <span>
                  <img
                    className="mx-8"
                    src="src\assets\Desktop14\Message.png"
                  />
                </span>
              </li>
              <li className="flex mx-2 w-44 h-10  items-center">
                <img
                  className="mx-2 "
                  src="src\assets\Desktop14\analytic.png"
                  alt="analytics"
                />
                Analytics
              </li>
            </div>
            <div className="h-1 w-40 m-2 my-8 border-2"></div>
            <div className="Desktop141">
              <div>
                <h2 className="text-xs ml-2 my-2 ">GENERAL</h2>
                <div id="settings">
                  <li className="flex mx-2 w-44 h-10  items-center">
                    <img
                      className="mx-2 "
                      src="src\assets\Desktop14\settings.png"
                      alt="Settings"
                    />
                    Settings
                  </li>
                </div>
                <div id="support">
                  <li className="flex mx-2 w-44 h-10  items-center">
                    <img
                      className="mx-2 "
                      src="src\assets\Desktop14\VectorSupport.png"
                      alt="Support"
                    />
                    Support
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Topbar;

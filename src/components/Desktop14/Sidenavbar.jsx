import React from 'react'

function Desktop14() {
  return (
    <div className="border-2 hidden lg:block py-5 min-h-screen lg:w-48">
    <div>
      <h2 className="font-normal text-xs mx-4">MENU</h2>
      <div id="dashboard">
        <li  className='flex mx-2 w-44 h-10  items-center '>
        <div className=""></div>
          <img className='mx-2 '
            src="src\assets\Desktop14\dashboard.png"
            alt="Dashboard/"
          />
          Dashboard
        </li>
      </div>
      <li  className='flex mx-2 w-44 h-10  items-center'>
        <img className='mx-2 '
          src="src\assets\Desktop14\VectorSchedule.png"
          alt="Schedule"
        />
        Schedule
      </li>
      <li  className='flex mx-2 w-44 h-10  items-center'>
        <img className='mx-2 ' src="src\assets\Desktop14\task.png" alt="Tasks" />
        Tasks
      </li>
      <li  className='flex mx-2 w-44 h-10  items-center'>
        <img className='mx-2 ' src="src\assets\Desktop14\people.png" alt="Patients" />
        Patients
      </li>
      <li  className='flex mx-2 w-44 h-10  items-center'>
        <img className='mx-2 ' src="src\assets\Desktop14\VectorMail.png" alt="messages" />
        Messages
        <span>
          <img className='mx-8' src="src\assets\Desktop14\Message.png" />
        </span>
      </li>
      <li  className='flex mx-2 w-44 h-10  items-center'>
        <img className='mx-2 ' src="src\assets\Desktop14\analytic.png" alt="analytics" />
        Analytics
      </li>
    </div>
    <div className="h-1 w-40 m-2 my-8 border-2"></div>
    <div className="Desktop141">
      <div>
        <h2 className="text-xs ml-2 my-2 ">GENERAL</h2>
        <div id="settings">
          <li  className='flex mx-2 w-44 h-10  items-center'>
            <img className='mx-2 '
              src="src\assets\Desktop14\settings.png"
              alt="Settings"
            />
            Settings
          </li>
        </div>
        <div id="support">
          <li  className='flex mx-2 w-44 h-10  items-center'>
            <img className='mx-2 '
              src="src\assets\Desktop14\VectorSupport.png"
              alt="Support"
            />
            Support
          </li>
        </div>
      </div>
    </div>
  </div>

    )
}

export default Desktop14
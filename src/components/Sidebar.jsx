import {Link} from "react-router-dom";
import React from "react";

export default function Sidebar({toggleSidebar, isShowSidebar}) {
  return (
    <div className={`fixed px-8 pt-4 transition top-0 bg-white right-0 h-screen lg:hidden ${isShowSidebar ? "" : "hidden"}`}>
      <button onClick={toggleSidebar}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.3445 4.01727C10.4136 3.67426 13.5864 3.67426 16.6555 4.01727C18.3682 4.20869 19.7499 5.5581 19.9511 7.27759C20.318 10.4152 20.318 13.5849 19.9511 16.7225C19.7499 18.442 18.3682 19.7914 16.6555 19.9829C13.5864 20.3259 10.4136 20.3259 7.3445 19.9829C5.63178 19.7914 4.25002 18.442 4.04891 16.7225C3.68194 13.5849 3.68194 10.4152 4.04891 7.27759C4.25002 5.5581 5.63178 4.20869 7.3445 4.01727ZM8.46967 8.46973C8.76256 8.17684 9.23744 8.17684 9.53033 8.46973L12 10.9394L14.4697 8.46974C14.7626 8.17685 15.2374 8.17685 15.5303 8.46974C15.8232 8.76263 15.8232 9.23751 15.5303 9.5304L13.0607 12.0001L15.5303 14.4697C15.8232 14.7626 15.8232 15.2375 15.5303 15.5304C15.2374 15.8233 14.7626 15.8233 14.4697 15.5304L12 13.0607L9.53034 15.5304C9.23744 15.8233 8.76257 15.8233 8.46968 15.5304C8.17678 15.2375 8.17678 14.7626 8.46968 14.4697L10.9393 12.0001L8.46967 9.53039C8.17678 9.2375 8.17678 8.76262 8.46967 8.46973Z" fill="#385A89"/>
        </svg>
      </button>
      <div className="mt-16">
        <Link
          className="block text-gray-800 hover:text-gray-800"
          to="/register"
        >
          Register
        </Link>

        <Link
          className="block text-gray-800 hover:text-gray-800 mt-2"
          to="/login"
        >
          Login
        </Link>
      </div>
    </div>
  );
};
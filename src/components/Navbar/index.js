import React, {useState} from "react";
import {Link} from "react-router-dom";
import Sidebar from "../Sidebar";
import {useCookies} from "react-cookie";

const Navbar = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const toggleSidebar = () => setIsShowSidebar(!isShowSidebar);
  const [cookies] = useCookies(["accessToken"]);

  return (
    <>
      <nav className="fixed flex items-center justify-between flex-wrap bg-white p-6 w-full">
        <div className="flex items-center text-gray-800 mr-6 text-lg font-bold">
          <Link to="/">Logo</Link>
        </div>
        <div className="flex lg:hidden">
          <button
            onClick={toggleSidebar}
            className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-800 dark:border-gray-200"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        {/* Show profile button when user have logged in */}
        {
          cookies.accessToken ?
            <img
              src="/person-icon.png"
              alt="profile icon"
              className="h-[28px] w-[28px]"
            />
            :
            <div className="hidden lg:flex lg:items-center lg:w-auto divide-y-2 sm:divide-y-0">
              <div className="text-md lg:flex-grow">
                <Link
                  className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-800 mr-4"
                  to="/register"
                >
                  Register
                </Link>

                <Link
                  className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-800 mr-4"
                  to="/login"
                >
                  Login
                </Link>
              </div>
            </div>
        }
        <Sidebar
          isShowSidebar={isShowSidebar}
          toggleSidebar={toggleSidebar}
        />
      </nav>
    </>
  );
};

export default Navbar;

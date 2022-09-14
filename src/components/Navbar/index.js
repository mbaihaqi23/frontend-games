import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-white p-6">
        <div className="flex items-center text-gray-800 mr-6 text-lg font-bold">
          <Link to="/">Logo</Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-800 dark:border-gray-200">
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
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto divide-y-2 sm:divide-y-0">
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
      </nav>
    </>
  );
};

export default Navbar;

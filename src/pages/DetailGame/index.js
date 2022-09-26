import React from 'react'
// import "../../components/Leaderboard/style.css"
import { Leaderboard } from "../../components";
import {Link} from "react-router-dom";

const DetailGame = () => { 
  return (
    <div>
      <div className="min-h-screen bg-gray-300">
        <div className="flex h-screen flex-row justify-center items-center">
          <div className="w-64 w-max-sm rounded-lg overflow-hidden shadow-2xl bg-gray-100">
            <div className="px-6 py-4">
              <h1 className="text-gray-800 text-md font-bold">Play Games</h1>
            </div>
            <div className="px-6 py-4">
              <Link
                className="bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold py-2 mb-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                to="/room"
              >
                <span>PLAYER VS PLAYER</span>
              </Link>
              <Link
                className="bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold py-2 mb-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                to="/playgame"
              >
                <span>PLAYER VS COM</span>
              </Link>
            </div>
          </div>
          <div className="w-3/5 text-gray-800 items-center text-sm px-4">
            <Leaderboard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailGame
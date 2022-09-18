import React from 'react'
import Board from '../../components/Leaderboard'
import '../../components/Leaderboard/style.css'



const DetailGame = () => { 
  return (
    <div>
       <div className="min-h-screen bg-gray-300">
          <div className="flex h-screen justify-center items-center">
          <div className="w-80 rounded-lg overflow-hidden shadow-2xl m-4 bg-gray-100">
          <div className="px-6 py-4">
            <label className="block text-gray-800 text-sm font-bold mb-2">
             Play Games
            </label>
          </div>
          <div className="px-6 py-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mb-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              >
              PLAYER VS PLAYER
            </button>
          <div className="px-1 pt-4 ">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
              type="submit" 
              >
              PLAYER VS COM
            </button>
          </div>
          </div>
          </div>
            
            <div className='App' id='main'>
              <Board></Board>
            </div>
            
          </div>
       </div>
    </div>
  )
}

export default DetailGame
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import _axios from "../../helper/axios";

export default function Finished({ room, onClick }) {
  const [cookies] = useCookies(["accessToken", "userId"]);
  const isDraw = room.hostScore === room.guestScore;
  const [hostName, setHostName] = useState("");
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    fetchRoomById();
  }, []);

  const fetchRoomById = () => {
    _axios
      .get(`/game/${room.id}`, {
        headers: {
          Authorization: `Bearer ${cookies.accessToken}`,
        },
      })
      .then((res) => {
        const response = res.data;
        setHostName(response.hostUserName);
        setGuestName(response.guestUserName);
      })
      .catch((err) => {
        console.log(err.data.message || err.data.msg);
      });
  };

  const isWin = room.hostScore > room.guestScore ? hostName : guestName;
  // (cookies.userId.id === room.guestScore && room.hostScore < room.guestScore ? guestName : '');
  return (
    <>
      <Link to={`/room/${room.id}`} state={room}>
        {isDraw ? (
          <div
            onClick={onClick}
            className="bg-slate-500 hover:bg-slate-400 px-8 pt-4 pb-8 rounded-lg cursor-pointer"
          >
            <div className="flex justify-between w-56 items-center">
              {room.roomCode}
            </div>
            <div className="flex justify-between w-56 items-center">
              <p className="font-semibold text-lg">{room.roomName}</p>
              <p className="text-slate-900 text-sm">Draw</p>
            </div>
            <p className="text-4xl text-center mt-4">
              {room.hostScore} - {room.guestScore}
            </p>
          </div>
        ) : (
          <>
            {
              isWin ? (
                <div
                  onClick={onClick}
                  className="bg-blue-900 hover:bg-blue-800 px-8 pt-4 pb-8 rounded-lg cursor-pointer"
                >
                  <div className="flex justify-between w-56 items-center text-white">
                    {room.roomCode}
                  </div>
                  <div className="flex justify-between w-56 items-center">
                    <p className="font-bold text-white text-lg">
                      {room.roomName}
                    </p>
                    <p className="text-white font-semibold text-sm">
                      Winner: {isWin}
                    </p>
                  </div>
                  <p className="text-4xl text-center mt-4 text-yellow-600">
                    {room.hostScore} - {room.guestScore}
                  </p>
                </div>
              ) : (
                ""
              )
              // (
              //   <div
              //     onClick={onClick}
              //     className="bg-red-500 hover:bg-red-400 px-8 pt-6 pb-8 rounded-lg cursor-pointer"
              //   >
              //     <div className="flex flex-col justify-between w-52 items-center">
              //       <p className="font-semibold text-lg">Room</p>
              //       <div className="flex justify-between items-center w-full">
              //         {room.roomName}
              //         <p className="text-slate-900 text-sm">You Lose :( </p>
              //       </div>
              //     </div>
              //     <p className="text-4xl text-center mt-4">
              //       {room.hostScore} - {room.guestScore}
              //     </p>
              //   </div>
              // )
            }
          </>
        )}
      </Link>
    </>
  );
}

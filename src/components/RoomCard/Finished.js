import {useCookies} from "react-cookie";

export default function Finished({ room }) {
  const [cookies] = useCookies(["userId"]);
  const isDraw = room.hostScore === room.guestScore;
  const isWin = (cookies.userId === room.hostUserId && room.hostScore > room.guestScore) || (cookies.userId === room.guestScore && room.hostScore < room.guestScore);

  return (
    <>
      {
        isDraw ?
          <div className="bg-slate-500 hover:bg-slate-400 px-8 pt-6 pb-8 rounded-lg cursor-pointer">
            <div className="flex justify-between w-52 items-center">
              <p className="font-semibold text-lg">Room {room.roomName}</p>
              <p className="text-slate-900 text-sm">Draw</p>
            </div>
            <p className="text-4xl text-center mt-4">{room.hostScore} - {room.guestScore}</p>
          </div>
          :
          <>
            {
              isWin ?
                <div className="bg-green-500 hover:bg-green-400 px-8 pt-6 pb-8 rounded-lg cursor-pointer">
                  <div className="flex justify-between w-52 items-center">
                    <p className="font-semibold text-lg">Room {room.roomName}</p>
                    <p className="text-slate-900 text-sm">You Win!</p>
                  </div>
                  <p className="text-4xl text-center mt-4">{room.hostScore} - {room.guestScore}</p>
                </div>
                :
                <div className="bg-red-500 hover:bg-red-400 px-8 pt-6 pb-8 rounded-lg cursor-pointer">
                  <div className="flex justify-between w-52 items-center">
                    <p className="font-semibold text-lg">Room {room.roomName}</p>
                    <p className="text-slate-900 text-sm">You Lose :(</p>
                  </div>
                  <p className="text-4xl text-center mt-4">{room.hostScore} - {room.guestScore}</p>
                </div>
            }
          </>
      }
    </>
  );
};
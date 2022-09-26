import {useCookies} from "react-cookie";
import { Link } from "react-router-dom";

export default function OnGoing({ room, onClick }) {
  const [cookies] = useCookies(["userId"]);
  const isMyTurn =
    (room.hostUserId === cookies.userId.id && room.turn % 2 === 1) ||
    (room.guestUserId === cookies.userId.id && room.turn % 2 === 0);

  return (
    <div
      className={`bg-blue-100 hover:bg-blue-200 border px-8 pt-6 pb-8 rounded-lg cursor-pointer ${
        isMyTurn ? "border-blue-700" : ""
      }`}
      onClick={onClick}
    >
      <Link to={`/room/${room.id}`} state={room}>
        <div className="flex justify-between w-56 items-center">
          <p className="font-semibold text-lg">{room.roomName}</p>
          <p className="text-slate-600 text-sm">
            {isMyTurn ? "Your Turn" : "Enemy Turn"}
          </p>
        </div>
        <p className="text-4xl text-center mt-4">
          {room.hostScore} - {room.guestScore}
        </p>
      </Link>
    </div>
  );
};
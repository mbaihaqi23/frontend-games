export default function Room() {
  const rooms = [
    {
      "id": 1,
      "roomName": "Alpha",
      "roomCode": "AGJAA",
      "hostUserId": 1,
      "guestUserId": undefined,
      "hostScore": 0,
      "guestScore": 0,
      "isFinished": false,
      "createdAt": "2022-09-22T09:37:20.759Z",
      "updatedAt": "2022-09-22T09:37:20.759Z",
    },
    {
      "id": 2,
      "roomName": "Beta",
      "roomCode": "HDASJ",
      "hostUserId": 1,
      "guestUserId": 2,
      "hostScore": 1,
      "guestScore": 2,
      "isFinished": false,
      "createdAt": "2022-09-22T09:37:20.759Z",
      "updatedAt": "2022-09-22T09:37:20.759Z",
    },
    {
      "id": 3,
      "roomName": "Gamma",
      "roomCode": "DYSFA",
      "hostUserId": 1,
      "guestUserId": 2,
      "hostScore": 3,
      "guestScore": 5,
      "isFinished": true,
      "createdAt": "2022-09-22T09:37:20.759Z",
      "updatedAt": "2022-09-22T09:37:20.759Z",
    },
    {
      "id": 4,
      "roomName": "Delta",
      "roomCode": "DSGDC",
      "hostUserId": 1,
      "guestUserId": 2,
      "hostScore": 4,
      "guestScore": 1,
      "isFinished": true,
      "createdAt": "2022-09-22T09:37:20.759Z",
      "updatedAt": "2022-09-22T09:37:20.759Z",
    },
  ];

  return (
    <div className="lg:container mx-auto px-8">
      <div className="mt-4">
        <button
          className="py-2 w-[144px] rounded-lg mr-4 transition-colors bg-blue-500 text-white hover:bg-blue-700"
        >
          Join Game
        </button>
        <button
          className="py-2 w-[144px] rounded-lg transition-colors border border-blue-500 text-blue-500 hover:bg-gray-200"
        >
          Create Room
        </button>
      </div>
      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
        <div className="border border-black hover:bg-slate-100 px-8 pt-6 pb-8 rounded-lg cursor-pointer">
          <div className="flex justify-between w-52 items-center">
            <p className="font-semibold text-lg">Room {rooms[0].roomName}</p>
            <p className="text-slate-600 text-sm">Waiting..</p>
          </div>
          <p className="text-4xl text-center mt-4">{rooms[0].hostScore} - {rooms[0].guestScore}</p>
        </div>
        <div className="bg-blue-100 hover:bg-blue-200 border border-blue-700 px-8 pt-6 pb-8 rounded-lg cursor-pointer">
          <div className="flex justify-between w-52 items-center">
            <p className="font-semibold text-lg">Room {rooms[1].roomName}</p>
            <p className="text-slate-600 text-sm">Your Turn</p>
          </div>
          <p className="text-4xl text-center mt-4">{rooms[1].hostScore} - {rooms[1].guestScore}</p>
        </div>
        <div className="bg-blue-100 hover:bg-blue-200 border border-red-500 px-8 pt-6 pb-8 rounded-lg cursor-pointer">
          <div className="flex justify-between w-52 items-center">
            <p className="font-semibold text-lg">Room {rooms[1].roomName}</p>
            <p className="text-slate-600 text-sm">Enemy Turn</p>
          </div>
          <p className="text-4xl text-center mt-4">{rooms[1].hostScore} - {rooms[1].guestScore}</p>
        </div>
        <div className="bg-red-500 hover:bg-red-400 px-8 pt-6 pb-8 rounded-lg cursor-pointer">
          <div className="flex justify-between w-52 items-center">
            <p className="font-semibold text-lg">Room {rooms[2].roomName}</p>
            <p className="text-slate-900 text-sm">You Lose :(</p>
          </div>
          <p className="text-4xl text-center mt-4">{rooms[2].hostScore} - {rooms[2].guestScore}</p>
        </div>
        <div className="bg-green-500 hover:bg-green-400 px-8 pt-6 pb-8 rounded-lg cursor-pointer">
          <div className="flex justify-between w-52 items-center">
            <p className="font-semibold text-lg">Room {rooms[3].roomName}</p>
            <p className="text-slate-900 text-sm">You Win!</p>
          </div>
          <p className="text-4xl text-center mt-4">{rooms[3].hostScore} - {rooms[3].guestScore}</p>
        </div>
      </div>
    </div>
  );
};
import {RoomCard} from "../../components";

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
      "turn": 3,
      "isFinished": false,
      "createdAt": "2022-09-22T09:37:20.759Z",
      "updatedAt": "2022-09-22T09:37:20.759Z",
    }, {
      "id": 20,
      "roomName": "Beta",
      "roomCode": "HDASJ",
      "hostUserId": 1,
      "guestUserId": 2,
      "hostScore": 1,
      "guestScore": 2,
      "turn": 4,
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
      <div className="mt-8 flex flex-wrap gap-8">
        {
          rooms.map(function (room, i) {
            if (room.guestUserId === undefined) {
              return <RoomCard.Waiting
                room={rooms[i]}
                key={rooms[i].id}
              />;
            } else if (room.isFinished === true) {
              return <RoomCard.Finished
                room={rooms[i]}
                key={rooms[i].id}
              />;
            }
            return <RoomCard.OnGoing
              room={rooms[i]}
              key={rooms[i].id}
            />;
          })
        }

      </div>
    </div>
  );
};
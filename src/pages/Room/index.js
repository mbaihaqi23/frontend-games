import {RoomCard} from "../../components";
import Swal from "sweetalert2";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";
import _axios from "../../helper/axios";

export default function Room() {
  // const rooms = [
  //   {
  //     "id": 1,
  //     "roomName": "Alpha",
  //     "roomCode": "AGJAA",
  //     "hostUserId": 1,
  //     "guestUserId": undefined,
  //     "hostScore": 0,
  //     "guestScore": 0,
  //     "isFinished": false,
  //     "createdAt": "2022-09-22T09:37:20.759Z",
  //     "updatedAt": "2022-09-22T09:37:20.759Z",
  //   },
  //   {
  //     "id": 2,
  //     "roomName": "Beta",
  //     "roomCode": "HDASJ",
  //     "hostUserId": 1,
  //     "guestUserId": 2,
  //     "hostScore": 1,
  //     "guestScore": 2,
  //     "turn": 3,
  //     "isFinished": false,
  //     "createdAt": "2022-09-22T09:37:20.759Z",
  //     "updatedAt": "2022-09-22T09:37:20.759Z",
  //   }, {
  //     "id": 20,
  //     "roomName": "Beta",
  //     "roomCode": "HDASJ",
  //     "hostUserId": 1,
  //     "guestUserId": 2,
  //     "hostScore": 1,
  //     "guestScore": 2,
  //     "turn": 4,
  //     "isFinished": false,
  //     "createdAt": "2022-09-22T09:37:20.759Z",
  //     "updatedAt": "2022-09-22T09:37:20.759Z",
  //   },
  //   {
  //     "id": 3,
  //     "roomName": "Gamma",
  //     "roomCode": "DYSFA",
  //     "hostUserId": 1,
  //     "guestUserId": 2,
  //     "hostScore": 3,
  //     "guestScore": 5,
  //     "isFinished": true,
  //     "createdAt": "2022-09-22T09:37:20.759Z",
  //     "updatedAt": "2022-09-22T09:37:20.759Z",
  //   },
  //   {
  //     "id": 4,
  //     "roomName": "Delta",
  //     "roomCode": "DSGDC",
  //     "hostUserId": 1,
  //     "guestUserId": 2,
  //     "hostScore": 4,
  //     "guestScore": 1,
  //     "isFinished": true,
  //     "createdAt": "2022-09-22T09:37:20.759Z",
  //     "updatedAt": "2022-09-22T09:37:20.759Z",
  //   },
  // ];

  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();
  const [cookies] = useCookies(["accessToken", "userId"]);
  const authToken = cookies.accessToken;

  const fetchRooms = () => {
    _axios
      .get("/room/", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((res) => {
        const _rooms = res.data;
        setRooms(_rooms);
      })
      .catch((e) => alert(e));
  };

  const checkLogin = async () => {
    if (authToken === "undefined") {
      await Swal.fire({
        title: "You Need To Login First",
        confirmButtonColor: "#3b82f6",
        icon: "error",
      });
      navigate("/");
    } else {
      await fetchRooms();
    }
  };

  useEffect(() => {
    (async () => {
      await checkLogin(); // TODO
    })();
  }, []);

  const handleCreate = async () => {
    const { value: roomName } = await Swal.fire({
      title: "How Should We Call Your Room?",
      confirmButtonColor: "#3b82f6",
      input: "text",
      inputLabel: "Your Room Name",
      inputValue: "",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      },
    });

    _axios
      .post(
        "/room/create",
        { roomName },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      .then(() => {
        fetchRooms();
      })
      .catch((e) => alert(e));
  };

  const handleJoin = async () => {
    const { value: roomCode } = await Swal.fire({
      title: "What is the Room Code?",
      confirmButtonColor: "#3b82f6",
      input: "text",
      inputValue: "",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        } else {
          _axios
            .get(`/room/join/${roomCode}`, {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            })
            .then((res) => {
              // const _roomId = res.data.roomId;
              // navigate(`/room/${_roomId}`);
              const response = res.data;
              const _roomId = response.room.id;
              const room = response.room;
              navigate(`/room/${_roomId}`, { state: room });
            })
            .catch((e) => {
              alert(e);
            });
        }
      },
    });
  };

  const handleClick = async (e, room) => {
    if (cookies.userId.id !== room.hostUserId) {
      await Swal.fire({
        title: "Are you sure to join this room?",
        confirmButtonColor: "#3b82f6",
        showCancelButton: true,
        confirmButtonText: "Yes, I am sure!",
        cancelButtonText: "No, cancel it!",
        closeOnConfirm: true,
        closeOnCancel: true,
      })
        .then((result) => {
          if (result.dismiss !== "cancel") {
            _axios
              .get(`/room/join/${room.roomCode}`, {
                headers: {
                  Authorization: `Bearer ${authToken}`,
                },
              })
              .then((res) => {
                const response = res.data;
                const _roomId = response.room.id;
                const room = response.room;
                navigate(`/room/${_roomId}`, { state: room });
              })
              .catch((e) => {
                alert(e);
              });
          } else {
            console.log("cancel");
          }
        })
        .catch(function () {
          e.preventDefault();
        });
    } else {
      navigate(`/room/${room.id}`, { state: room });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="lg:container mx-auto px-8 ">
        <div className="mt-4">
          <button
            className="py-2 w-[144px] rounded-lg mr-4 transition-colors bg-blue-500 text-white hover:bg-blue-700"
            onClick={handleJoin}
          >
            Join Game
          </button>
          <button
            className="py-2 w-[144px] rounded-lg transition-colors border border-blue-500 text-blue-500 hover:bg-gray-200"
            onClick={handleCreate}
          >
            Create Room
          </button>
        </div>
        <div className="mt-8 flex flex-wrap gap-8">
          {rooms.map(function (room, i) {
            if (!room.guestUserId) {
              return (
                <RoomCard.Waiting
                  room={rooms[i]}
                  onClick={(e) => handleClick(e, rooms[i])}
                  key={rooms[i].id}
                />
              );
            } else if (room.isFinished === true) {
              return (
                <RoomCard.Finished
                  room={rooms[i]}
                  // onClick={() => handleClick(rooms[i].id)}
                  key={rooms[i].id}
                />
              );
            }
            return (
              <RoomCard.OnGoing
                room={rooms[i]}
                // onClick={() => handleClick(rooms[i].id)}
                key={rooms[i].id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
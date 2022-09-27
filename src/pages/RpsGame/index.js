import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";
import { LoadingSpinner } from "../../components";
import _axios from "../../helper/axios";

const RpsGame = () => {
  const location = useLocation();
  const roomId = location.state.id;
  const { hostUserId } = location.state;
  const { guestUserId } = location.state;
  const { isFinished } = location.state;
  const [cookies] = useCookies(["accessToken", "userId"]);
  const [hostSelectionValue, setHostSelectionValue] = useState(0);
  const [guestSelectionValue, setGuestSelectionValue] = useState(0);
  const [roomStatus, setRoomStatus] = useState(isFinished);
  const [winner, setWinner] = useState("");
  const authToken = cookies.accessToken;
  const authUser = cookies.userId;
  let { turn } = location.state;
  let selection;

  useEffect(() => {
    // if (elementRef.value) {
    // checkRoomStatus();
    // console.log(roomStatus);
    // calculate();
    // } else {
    // setRoomStatus(isFinished);
    // }
    // if (
    //   elementRef.value === "rock" ||
    //   elementRef.value === "paper" ||
    //   elementRef.value === "scissor"
    // ) {
    //   elementRef.current.addEventListener("click", play, { once: true });
    //   console.log(elementRef);
    //   calculate();
    // }
    calculate();
    getTheWinner();
  }, [hostSelectionValue, guestSelectionValue]);

  const play = (e) => {
    const selectionClass = e.target.name;
    if (selectionClass != "") {
      if (authToken !== "undefined" && authUser.id === hostUserId) {
        if (selectionClass == "rock") {
          setHostSelectionValue(1);
        } else if (selectionClass == "paper") {
          setHostSelectionValue(2);
        } else {
          setHostSelectionValue(3);
        }
      }
      if (authToken !== "undefined" && authUser.id === guestUserId) {
        console.log("sini");
        if (selectionClass == "rock") {
          setGuestSelectionValue(1);
        } else if (selectionClass == "paper") {
          setGuestSelectionValue(2);
        } else {
          setGuestSelectionValue(3);
        }
      }
    }
  };

  const calculate = () => {
    if (hostSelectionValue !== 0) selection = hostSelectionValue;
    else selection = guestSelectionValue;
    if (selection !== 0) {
      _axios
        .put(
          `/room/${roomId}`,
          {
            selection: selection,
            turn: (turn += 1),
          },
          {
            params: roomId,
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        )
        .then((res) => {
          const response = res.data;
          const { isFinished } = response;
          setRoomStatus(isFinished);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const getTheWinner = () => {
    _axios
      .get(`/game/${roomId}`, {
        headers: {
          Authorization: `Bearer ${cookies.accessToken}`,
        },
      })
      .then((res) => {
        const { hostScore } = res.data;
        const { guestScore } = res.data;
        const { hostUserName } = res.data;
        const { guestUserName } = res.data;
        const winner = hostScore > guestScore ? hostUserName : guestUserName;
        setWinner(winner);
      })
      .catch((err) => {
        console.log(err.data.message || err.data.msg);
      });
  };

  // const isMyTurn = turn % 2 === 0 ? true : false;

  // // assume that host already pick option and turn modulo 2 is 1 (next player)
  // if (isMyTurn) {
  //   return (
  //     <div className="min-h-screen">
  //       <div className="h-screen flex flex-col items-center justify-center">
  //         <LoadingSpinner />
  //         <h1 className="text-gray-800 items-center mt-2">
  //           Waiting for other player to choose their option
  //         </h1>
  //       </div>
  //     </div>
  //   );
  // }
  if (roomStatus === true && turn === 3) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="h-screen flex flex-col items-center justify-center">
          <p className="text-gray-800 font-semibold text-3xl items-center mt-2">
            This game is finished and the winner is{" "}
            <span className="font-bold">{winner}</span>!
          </p>
        </div>
      </div>
    );
  } else {
    if (
      (hostUserId === authUser.id && hostSelectionValue !== 0) ||
      (guestUserId === authUser.id && guestSelectionValue !== 0)
    ) {
      return (
        <div className="min-h-screen bg-gray-100">
          <div className="h-screen flex flex-col items-center justify-center">
            <LoadingSpinner />
            <h1 className="text-gray-800 items-center mt-2">
              Waiting for other player to choose their option
            </h1>
          </div>
        </div>
      );
    } else {
      return (
        <div className="min-h-screen bg-gray-100">
          <h1 className="text-4xl text-center font-bold mt-10">
            Rock Paper Scissor
          </h1>
          <h2 className="text-xl text-center text-gray-400 font-semibold mt-5 mb-28">
            Choose one of these options
          </h2>
          <div className="flex flex-row gap-60 justify-center items-center">
            <img
              src="/batu.png"
              alt="rock"
              className={`w-48 h-48 p-4 cursor-pointer rounded-md hover:bg-blue-200`}
              name="rock"
              onClick={(e) => play(e)}
            />
            <img
              src="/kertas.png"
              alt="paper"
              className={`w-48 h-48 p-4 cursor-pointer rounded-md hover:bg-blue-200`}
              name="paper"
              onClick={(e) => play(e)}
            />
            <img
              src="/gunting.png"
              alt="scissor"
              className={`w-48 h-48 p-4 cursor-pointer rounded-md hover:bg-blue-200`}
              name="scissor"
              onClick={(e) => play(e)}
            />
          </div>
        </div>
      );
    }
  }
};

export default RpsGame;

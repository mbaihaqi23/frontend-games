import { useState, useRef } from "react";

const PlayGame = () => {
    const [result, setResult] = useState('')
    const ref = useRef(null)

    const getPlayer2 = () => {
      const player2 = Math.random();

      if (player2 < 0.34) return "rock";
      if (player2 >= 0.34 && player2 < 0.67) return "paper";
      return "scissor";
    };

    const getResult = (player2, player1) => {
      if (player1 == player2) {
        setResult("DRAW");
      } else if (player1 == "rock") {
        setClassNameRock(`${initialClassName} bg-blue-200`);
        if (player2 == "scissor") {
          setComSelected("scissor");
          setResult("PLAYER 1 WIN");
        } else {
          setComSelected("paper");
          setResult("COM WIN");
        }
      } else if (player1 == "paper") {
        setClassNamePaper(`${initialClassName} bg-blue-200`);
        if (player2 == "rock") {
          setComSelected("rock");
          setResult("PLAYER 1 WIN");
        } else {
          setComSelected("scissor");
          setResult("COM WIN");
        }
      } else if (player1 == "scissor") {
        setClassNameScissor(`${initialClassName} bg-blue-200`);
        if (player2 == "paper") {
          setComSelected("paper");
          setResult("PLAYER 1 WIN");
        } else {
          setComSelected("rock");
          setResult("COM WIN");
        }
      }
    };

    const initialClassName = `w-48 h-48 p-4 cursor-pointer rounded-md`;
    const [classNameRock, setClassNameRock] = useState(
      `${initialClassName} player-1 img-rock`
    );
    const [classNamePaper, setClassNamePaper] = useState(
      `${initialClassName} player-1 img-paper`
    );
    const [classNameScissor, setClassNameScissor] = useState(
      `${initialClassName} player-1 img-scissor`
    );

    const [comSelected, setComSelected] = useState("");

    const play = (e) => {
      const player2 = getPlayer2();
      const player1 = e.target.name;
      getResult(player2, player1);
      // e.target.classList.add('bg-blue-200')
    };

    const resultContainer = () => {
      if (result) {
        return (
          <div className="bg-blue-200 p-2 rounded-md w-40 text-center">
            <h1 className="text-2xl">{result}</h1>
          </div>
        );
      } else {
        return <h1 className="text-8xl mb-5">vs</h1>;
      }
    };

    const endGame = (e) => {};

    const restart = () => {
      setResult("");
      setClassNameRock(`${initialClassName} bg-transparent`);
      setClassNamePaper(`${initialClassName} bg-transparent`);
      setClassNameScissor(`${initialClassName} bg-transparent`);
      setComSelected("");
    };

    return (
      <div className="min-h-screen bg-gray-100">
        <h1 className="text-4xl text-center font-bold mt-10 mb-28">
          Rock Paper Scissor
        </h1>
        <div className="flex flex-row gap-60 justify-center items-center">
          <div className="flex flex-col items-center gap-20">
            <h1 className="text-3xl font-semibold">Player</h1>
            <img
              ref={ref}
              src="/batu.png"
              alt="rock"
              className={`${classNameRock} hover:bg-blue-200`}
              name="rock"
              onClick={play}
            />
            <img
              src="/kertas.png"
              alt="paper"
              className={`${classNamePaper} hover:bg-blue-200`}
              name="paper"
              onClick={play}
            />
            <img
              src="/gunting.png"
              alt="scissor"
              className={`${classNameScissor} hover:bg-blue-200`}
              name="scissor"
              onClick={play}
            />
          </div>
          <div className="flex flex-col w-40 justify-center items-center">
            {resultContainer()}
            {result !== "" && (
              <img
                src="/refresh.png"
                alt="restart"
                className="img-rock w-22 h-20 p-4 cursor-pointer justify-self-end"
                name="restart"
                onClick={restart}
              />
            )}
          </div>
          <div className="flex flex-col items-center gap-20">
            <h1 className="text-3xl font-semibold">COM</h1>
            <img
              src="/batu.png"
              alt="rock"
              className={`player-2 img-rock w-48 h-48 p-4 ${
                comSelected === "rock" ? "bg-blue-200 rounded-md" : ""
              }`}
            />
            <img
              src="/kertas.png"
              alt="paper"
              className={`player-2 img-paper w-48 h-48 p-4 ${
                comSelected === "paper" ? "bg-blue-200 rounded-md" : ""
              }`}
            />
            <img
              src="/gunting.png"
              alt="scissor"
              className={`player-2 img-scissor w-48 h-48 p-4 ${
                comSelected === "scissor" ? "bg-blue-200 rounded-md" : ""
              }`}
            />
          </div>
        </div>
      </div>
    );
}

export default PlayGame

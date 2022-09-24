import { useState, useRef } from "react";

const PlayGame = () => {
    const [result, setResult] = useState('')
    const ref = useRef(null)

    const getPlayer2 = () => {
        const player2 = Math.random();
    
        if( player2 < 0.34 ) return  'rock';
        if( player2 >= 0.34 && player2 < 0.67 ) return 'paper';
        return 'scissor';
    }

    const getResult = (player2, player1) => {
        if( player1 == player2 ) {
            setResult('DRAW')
        } else if( player1 == 'rock' ) {
            if( player2 == 'scissor' ) {
                setResult('PLAYER 1 WIN')
            } else {
                setResult('PLAYER 2 WIN')
            }
        } else if( player1 == 'paper' ) {
            if( player2 == 'rock' ) {
                setResult('PLAYER 1 WIN')
            } else {
                setResult('PLAYER 2 WIN')
            }
        } else if( player1 == 'scissor' ) {
            if( player2 == 'paper' ) {
                setResult('PLAYER 1 WIN')
            } else {
                setResult('PLAYER 2 WIN')
            }
        }
    }

    const initialClassName = `w-48 h-48 p-4 cursor-pointer hover:bg-blue-200 rounded-md`
    const [classNameRock, setClassNameRock] = useState(`${initialClassName} player-1 img-rock`)
    const [classNamePaper, setClassNamePaper] = useState(`${initialClassName} player-1 img-paper`)
    const [classNameScissor, setClassNameScissor] = useState(`${initialClassName} player-1 img-scissor`)

    const play = (e) => {
        const player2 = getPlayer2();
        const player1 = e.target.name;
        getResult(player2, player1);
        e.target.classList.add('bg-blue-200')
    }

    const resultContainer = () => {
        if(result) {
            return (
                <div className="bg-blue-200 p-2 rounded-md w-40 text-center">
                    <h1 className="text-2xl">{result}</h1>
                </div>
            ) 
        } else {
            return (
                <h1 className="text-8xl mb-5">vs</h1>
            )
        }
    }

    const endGame = (e) => {
        
    }

    const restart = () => {
        setResult('');
    }

    return (
        <div className="min-h-screen">
            <h1 className="text-4xl text-center mt-10 mb-28">Rock Paper Scissor</h1>
            <div className="flex flex-row gap-60 justify-center items-center">
                <div className="flex flex-col gap-20">
                    <img ref={ref} src="/batu.png" alt="rock" className={`${classNameRock}`} name="rock" onClick={play}/>
                    <img src="/kertas.png" alt="paper" className={`${classNamePaper}`} name="paper" onClick={play}/>
                    <img src="/gunting.png" alt="scissor" className={`${classNameScissor}`} name="scissor" onClick={play}/>
                </div>
                <div className="flex flex-col w-40 justify-center items-center">
                    {resultContainer()}
                    <img src="/refresh.png" alt="restart" className="img-rock w-22 h-20 p-4 cursor-pointer justify-self-end" name="restart" onClick={restart}/>
                </div>
                <div className="flex flex-col gap-20">
                    <img src="/batu.png" alt="rock" className={`player-2 img-rock w-48 h-48 p-4`} />
                    <img src="/kertas.png" alt="paper" className={`player-2 img-paper w-48 h-48 p-4`} />
                    <img src="/gunting.png" alt="scissor" className={`player-2 img-scissor w-48 h-48 p-4`}  />
                </div>
            </div>
        </div>
    )
}

export default PlayGame
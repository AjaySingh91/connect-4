import React, { useState , useEffect} from "react";
import "../index.css";
import GameCircle from "./gameCircle";
import Header from "./header";
import Footer from "./footer";
import { isWinner, isDraw , getRanComputerMove} from "../helper";
import {GAME_STATE_PLAYING , NO_PLAYER, PLAYER_1 ,PLAYER_2,NO_CIRCLE, GAME_STATE_WIN, GAME_STATE_DRAW} from "../constants"


const GameBoard = () => {
  const [gameBoard, setgameBoard] = useState(Array(16).fill(NO_PLAYER));
  const [currentPlayer, setcurrentPlayer] = useState(PLAYER_1);
  const [gameState ,setGameState] = useState(GAME_STATE_PLAYING);
  const [winPlayer, setwinPlayer] = useState(NO_PLAYER);

  console.log(gameBoard);

  useEffect(() => {
  initGame();
  }, [])
  

  const initGame = () =>{
    setgameBoard(Array(16).fill(NO_PLAYER));
    setcurrentPlayer(PLAYER_1);
    setGameState(GAME_STATE_PLAYING);
  }

  const InitBoard = () => {
    const circles = [];
    for (let i = 0; i < NO_CIRCLE; i++) {
      circles.push(renderCircle(i));
    }
    return circles;
  };

  const suggest = () =>{
    circleClick(getRanComputerMove(gameBoard));
  }

  const circleClick = (id) => {
    console.log("circle clicked " + id);

    if (gameBoard[id] !== NO_PLAYER) return;
    if (gameState !== GAME_STATE_PLAYING) return;

    if (isWinner(gameBoard ,id , currentPlayer)) {
      setGameState(GAME_STATE_WIN);
      setwinPlayer(currentPlayer);
    }
    if (isDraw(gameBoard ,id , currentPlayer)) {
      setGameState(GAME_STATE_DRAW);
      setwinPlayer(NO_PLAYER);
    }

    setgameBoard((prev) => {
      return prev.map((circle, pos) => {
        if (pos === id) return currentPlayer;
        return circle;
      });
    });

   
    setcurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);

    console.log(currentPlayer);
  };

  const renderCircle = (id) => {
    return (
      <GameCircle
        key={id}
        className={`player_${gameBoard[id]}`}
        id={id}
        oncircleClicked={circleClick}
      />
    );
  };

  return (
    <>
      <Header gameState ={gameState} currentPlayer={currentPlayer} winPlayer = {winPlayer} />
      <div className=" h-screen flex justify-center items-center">
      <div className="grid grid-cols-4 grid-rows-4 bg-lime-50 border-8 border-slate-400 rounded-2xl p-5 shadow-slate-500 shadow-2xl"><InitBoard /></div>
      </div>
      <Footer onNewGameClick={initGame} onSuggestClick={suggest} gameState={gameState} />
    </>
  );
};


export default GameBoard;

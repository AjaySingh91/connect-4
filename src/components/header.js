import "../index.css";

import React from "react";
import {
  GAME_STATE_DRAW,
  GAME_STATE_PLAYING,
  GAME_STATE_WIN
} from "../constants";

const Header = ({ gameState, currentPlayer, winPlayer }) => {
  const renderLabel = () => {
    switch (gameState) {
      case GAME_STATE_PLAYING:
        return <div> Player {currentPlayer} Turn</div>;
        break;
      case GAME_STATE_WIN:
        return <div>Player {winPlayer} Win</div>;
        break;
      case GAME_STATE_DRAW:
        return <div>Game Is Draw</div>;
        break;

      default:
        break;
    }
  };
  return (
    <div className="flex justify-center">
      <div className="header-Text border-4 mt-20 h-14 text-center border-slate-500 pt-2 rounded-lg w-72  absolute text-2xl text-black font-bold ">{renderLabel()}</div>
    </div>
  );
};


export default Header;



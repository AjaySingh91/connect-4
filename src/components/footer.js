import "../index.css"
import { GAME_STATE_PLAYING} from "../constants"

import React from 'react'

const footer = ({onNewGameClick , onSuggestClick, disabled, gameState}) => {
  return (
    <div className="h-screen flex justify-center">
    <div className="absolute  bottom-12  h-14 text-center border-4 border-slate-500 rounded-lg w-72 text-2xl text-black font-bold">
      {
        gameState === GAME_STATE_PLAYING &&
        <button className=" w-full h-12" onClick={onSuggestClick}>Suggest</button>
      }
      {
        gameState !== GAME_STATE_PLAYING &&
        <button className=" w-full h-12" onClick={onNewGameClick}>New Game</button>
      }
    </div>
    </div>
  )
}

export default footer

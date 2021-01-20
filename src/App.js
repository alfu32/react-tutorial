import React from "react";
import "./style.css";
import Game from "./Game.js";
import Board from "./Board.js";
import Square from "./Square.js";

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Game />
    </div>
  );
}

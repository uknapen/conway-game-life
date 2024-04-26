import React, { useState, useEffect } from "react";
import "./grid-style.css";
import {
  generateEmptyBoard,
  generateRandomBoard,
} from "./components/ImplementBoard";
import { updateBoard } from "./components/UpdateBoard";
import {
  CreateGlider,
  CreateLWSS,
  CreateMWSS,
  CreateHWSS,
} from "./components/CreateShip";

export const numRows = 50;
export const numCols = 100;

// Main app
const Game = () => {
  // Create the board instance
  const [board, setBoard] = useState(() => generateEmptyBoard());
  const [running, setRunning] = useState(false);
  const [clickType, setClickType] = useState("singleClick");

  //   Return a empty board
  const resetBoard = () => {
    setBoard(generateEmptyBoard());
  };

  //   return an randomized board
  const randomizeBoard = () => {
    setBoard(generateRandomBoard());
  };

  const goNext = () => {
    setBoard((previousBoard) => {
      // Create a new board based on the previous board
      const nextBoard = updateBoard(previousBoard);
      return nextBoard; // Return the updated board to setBoard
    });
  };

  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(goNext, 50); // Launch goNext every 2 seconds
    }
    return () => {
      clearInterval(intervalId); // Cleanup interval on component unmount or running state change
    };
  }, [running]);

  const handleClick = (rows, i, cols, j) => {
    const newBoard = board.map((row) => [...row]);
    switch (clickType) {
      case "singleClick":
        newBoard[i][j] = board[i][j] ? 0 : 1;
        break;
      case "glider":
        CreateGlider(newBoard, i, j);
        break;
      case "LWSS":
        CreateLWSS(newBoard, i, j);
        break;
      case "MWSS":
        CreateMWSS(newBoard, i, j);
        break;
      case "HWSS":
        CreateHWSS(newBoard, i, j);
        break;
    }

    setBoard(newBoard);
  };

  const handleColor = (active) => {
    if (active) {
      return {
        color: "#ffffff",
        backgroundColor: "#0366d6",
      };
    } else {
      return {
        color: "#0366d6",
        backgroundColor: "#fafbfc",
      };
    }
  };
  return (
    <div className="app">
      <h1>Conway's Game Of Life</h1>
      <div className="command">
        <button id="reset-button" onClick={resetBoard}>
          Reset
        </button>
        <button onClick={goNext}>Go next</button>
        <button onClick={randomizeBoard}>Randomize</button>
        <button
          onClick={() => setRunning(!running)}
          style={handleColor(running ? true : false)}
        >
          {running ? "Stop" : "Start"}
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 10px)`,
          border: "solid 1px gray",
        }}
      >
        {board.map((rows, i) =>
          rows.map((cols, j) => (
            <span
              onClick={() => {
                handleClick(rows, i, cols, j);
              }}
              key={`${i} ${j}`}
              className="cases"
              style={{
                backgroundColor: board[i][j] ? "black" : "white",
                width: 10,
                height: 10,
              }}
            />
          ))
        )}
      </div>

      <div className="command">
        <button
          onClick={() => setClickType("singleClick")}
          style={handleColor(clickType === "singleClick" ? true : false)}
        >
          Single Click
        </button>
        <button
          onClick={() => setClickType("glider")}
          style={handleColor(clickType === "glider" ? true : false)}
        >
          Create a glider
        </button>
        <button
          onClick={() => setClickType("LWSS")}
          style={handleColor(clickType === "LWSS" ? true : false)}
        >
          Create a Light - weight spaceship
        </button>
        <button
          onClick={() => setClickType("MWSS")}
          style={handleColor(clickType === "MWSS" ? true : false)}
        >
          Create a Middle - weight spaceship
        </button>
        <button
          onClick={() => setClickType("HWSS")}
          style={handleColor(clickType === "HWSS" ? true : false)}
        >
          Create a Heavy - weight spaceship
        </button>
      </div>
    </div>
  );
};

export default Game;

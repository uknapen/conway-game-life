# Conway's Game of Life Web Application

## Overview

This is a web application that simulates Conway's Game of Life, a cellular automaton devised by mathematician John Conway. The application is built using React and JavaScript, with Vite as the build tool. The Game of Life consists of a grid of cells that evolve through a series of generations based on simple rules. This application allows users to interact with the grid, setting initial configurations and observing the evolution of the cells.

## Features

- **Interactive Grid**: Users can click on cells to toggle their state (alive or dead) and set up the initial configuration.
- **Start/Stop Simulation**: Users can start and stop the simulation, allowing them to observe how the cell patterns evolve over time.
- **Step Through Generations**: Users can advance the simulation one generation at a time.
- **Clear Grid**: Users can clear the grid to reset the simulation.
- **Responsive Design**: The application is designed to be responsive, ensuring a good user experience on both desktop and mobile devices.

## Technology Stack

- **React**: A JavaScript library for building user interfaces.
- **JavaScript**: The programming language used to implement the logic of the Game of Life.
- **Vite**: A fast build tool that provides an optimized development environment.

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/uknapen/conway-game-life.git
   cd conway-game-life
   ```
2. **Install Dependencies**
```bash
npm install
```

3. **Run the Application**
```bash
npm run dev
```
This will start the development server, and you can view the application in your browser at http://localhost:5173.

## Usage
- **Toggling Cells**: Click on any cell in the grid to toggle its state between alive and dead.
- **Start/Stop**: Use the "Start" button to begin the simulation and the "Stop" button to pause it.
- **Go Next**: Use the "Step" button to advance the simulation by one generation.
- **Clear**: Use the "Clear" button to reset the grid to its initial empty state.
- **Randomize**: Use the "Randomize" button to generate alive cells randomly.
- **Create Ship**: Use the buttons to select a model and clic on the grid to generate blocks of alive cells that have a special behaviour in the simulation. I suggest you to reset the board before trying.
  
## Rules of Conway's Game of Life
- Any live cell with fewer than two live neighbors dies (underpopulation).
- Any live cell with two or three live neighbors lives on to the next generation.
- Any live cell with more than three live neighbors dies (overpopulation).
- Any dead cell with exactly three live neighbors becomes a live cell (reproduction).


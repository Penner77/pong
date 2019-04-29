# Pong Game

A basic pong game using SVGs:
1. Board
2. Paddles x3 (see "Stretch Goals")
3. Ball
Board designed at 512 x 256 with scoring based on the ball element passing the threshhold "0" for player 2 and "board width" for player 1. 


##Stretch Goals
In-Game: 
1. Added a centercourt "paddle" as an obstruction to make the ball bounceback on both sides.
2. The ball speeds up after every successful hit by .5, increasing rally difficulty.
3. The paddls (player1, player2) shrink slightly on each successful hit, further increasing the difficulty of a rally. 
4. On pause, the game plays the Super Mario Bros. pause jingle.

## Setup

**Install dependencies:**

`> npm i`

**Run locally with Webpack Dev Server:**

`> npm start`

**Build for production:**

`> npm run build`

## Keys

**Player 1:**
* a: up
* z: down
Paddle speed set to 25, in this project we did not learn "smooth scrolling" so they are a bit jumpy. 

**Player 2:**
* ▲ : up
* ▼: down
Paddle speed set to 25, in this project we did not learn "smooth scrolling" so they are a bit jumpy. 
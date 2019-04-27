import { SVG_NS, KEYS } from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';


//console.log(SVG_NS);

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.gameElement =document.getElementById(this.element);
    this.board = new Board(this.width, this.height);

    this.ping = new Audio('public/sounds/smb_pause.wav');

    // START PADDLES PLAYER 1 PLAYER 2

    this.paddleWidth = 10;
    this.paddleHeight = 56;
    this.boardGap = 10;

    this.player1 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.boardGap,
      ((this.height - this.paddleHeight) / 2),
      KEYS.a, 
      KEYS.z,
      this.ogheight

    );

    this.player2 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      (this.width - this.boardGap - this.paddleWidth),
      ((this.height - this.paddleHeight) / 2),
        KEYS.up,
        KEYS.down,
        this.ogheight
      );

      this.netborder = new Paddle(
        this.height,
        this.paddleWidth,
        this.paddleHeight,
        this.width / 2 - 5,
        ((this.height - this.paddleHeight) / 2),
          this.ogheight
        );

      //START SCOREBOARD

      this.score1 = new Score(this.width / 2 - 50, 30, 30);
      this.score2 = new Score(this.width / 2 + 25, 30, 30);

      //START BALL
      this.ball = new Ball(12, this.width, this.height);

      //START PAUSE
      document.addEventListener('keydown', event => {
        console.log(event);
        switch(event.key){
          case KEYS.spaceBar:
            this.pause = !this.pause;
            this.ping.play();
          break;
        }
      }
      );
      
       } // END OF GAME CONSTRUCTOR

  render() {

    if(this.pause){
    
      return; 
      //with no additional info, 'return' will work kind of like 'break' 
    }

    this.gameElement.innerHTML = '';
    let svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttributeNS(null, 'width', this.width);
    svg.setAttributeNS(null, 'height', this.height);
    svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
    this.gameElement.appendChild(svg);
    this.board.render(svg);
    this.player1.render(svg);
    this.player2.render(svg);
    this.netborder.render(svg);
    this.ball.render(svg, this.player1, this.player2, this.netborder);//this will allow p1 and p2 accessible in Ball, and allow collision detection
    this.score1.render(svg, this.player1.score);
    this.score2.render(svg, this.player2.score);
  }
}

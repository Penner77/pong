import { SVG_NS } from '../settings';

export default class Ball {
    constructor(radius, boardWidth, boardHeight) {
      this.radius = radius;
      this.boardWidth = boardWidth;
      this.boardHeight = boardHeight;
      this.direction = 1;
      this.reset();
    }// end of constructor

    reset(){
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;

        this.vy = 0;
        while(this.vy === 0){
            this.vy = Math.floor(Math.random() * 10 - 5);
        }
        
            this.vx = this.direction * (6 - Math.abs(this.vy));
        }

        render(svg, player1, player2){      //this adding of p1 and p2 will allow collision detection
            
            this.x += this.vx;
            this.y += this.vy; //update position with vector direction 60 times per second

            let circle = document.createElementNS(SVG_NS, 'circle');
            circle.setAttributeNS(null, 'r', this.radius);
            circle.setAttributeNS(null, 'cx', this.x); // x position
            circle.setAttributeNS(null, 'cy', this.y); // y position
            circle.setAttributeNS(null, 'fill', 'red'); // or you could add this to the constructor list above and set this.color later to whatever I want
            svg.appendChild(circle);
        }

  }//end of Ball Class



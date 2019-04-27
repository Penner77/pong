import { SVG_NS } from '../settings';

export default class Ball {
    constructor(radius, boardWidth, boardHeight) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = 1;

        this.ping = new Audio('public/sounds/pong-01.wav');

        this.reset();
    }// end of constructor



    reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;
        this.vy = 0;
        while (this.vy === 0) {
            this.vy = Math.floor(Math.random() * 10 - 5);
        }

        this.vx = this.direction * (6 - Math.abs(this.vy)); 
    } //end of reset

    wallCollision() {
        const hitLeft = this.x - this.radius <= 0;
        const hitRight = this.x + this.radius >= this.boardWidth;
        const hitTop = this.y - this.radius <= 0;
        const hitBottom = this.y + this.radius >= this.boardHeight;
        if (hitLeft || hitRight) {         //left or right
            this.vx = -this.vx;     //how to flip the x vector

        } else if (hitTop || hitBottom) {                       //top or bottom
            this.vy = -this.vy;              //how to flip the y vector

        }
    } // end of wall collision

    paddleCollision(player1, player2) {
        if (this.vx > 0) {
            // ball is moving to the right and check for player 2
            let paddle = player2.coordinates(player2.x, player2.y, player2.width, player2.height);
            let [leftX, rightX, topY, bottomY] = paddle;
            if (
                (this.x + this.radius >= leftX) &&
                (this.x + this.radius <= rightX) &&
                (this.y >= topY && this.y <= bottomY)
            ) {
                this.vx = -this.vx;
                //SOUND
                this.ping.play();
                player2.height = player2.height-5; //MAKES THE PADDLES SHRINK -5 UPON EACH HIT!
                this.radius = this.radius+.5; //MAKES THE BALL GROW SLIGHTLY ON EACH HIT
            
            }
        }
        else {
            // check the player1 collision
            let paddle = player1.coordinates(player1.x, player1.y, player1.width, player1.height);
            let [leftX, rightX, topY, bottomY] = paddle;
            if (
                (this.x - this.radius <= rightX) &&
                (this.x - this.radius >= leftX) &&
                (this.y >= topY && this.y <= bottomY)
            ) {
                this.vx = -this.vx;
                //SOUND
                 this.ping.play();
                 player1.height = player1.height-5; //MAKES THE PADDLES SHRINK -5 UPON EACH HIT!
                 this.radius = this.radius+.5; //MAKES THE BALL GROW SLIGHTLY ON EACH HIT
            }
        }
    }
        // END OF PADDLE COLLISION

    //add goal/score method
        goal(player){
           player.score++;
           this.reset(); 
        }

    render(svg, player1, player2) {      //this adding of p1 and p2 will allow collision detection

        this.x += this.vx;
        this.y += this.vy; //update position with vector direction 60 times per second

        this.wallCollision();
        this.paddleCollision(player1, player2);

        let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'cx', this.x); // x position
        circle.setAttributeNS(null, 'cy', this.y); // y position
        circle.setAttributeNS(null, 'fill', 'red'); // or you could add this to the constructor list above and set this.color later to whatever I want
        circle.setAttributeNS(null, 'stroke', 'black');
        circle.setAttributeNS(null, 'stroke-width', 5);
        svg.appendChild(circle);

        const rightGoal = this.x + this.radius >= this.boardWidth;
        const leftGoal = this.x - this.radius <= 0;
        if(rightGoal){
            this.goal(player1);
            this.direction = 1;
        } else if(leftGoal){
            this.goal(player2);
            this.direction = -1;
    }}

}//end of Ball Class



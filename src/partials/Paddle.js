import { SVG_NS } from '../settings';

export default class Paddle {
    constructor(boardHeight, width, height, x, y) {
      this.boardHeight = boardHeight;
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.speed = 10;
      this.score = 0;
    }
    //...do what you did in Board.js to create one paddle, set it's attributes, 
    //..and we'll do another instance for the 2nd paddle. 
    //..create a rect and then append that rect (appendchild)

    render(svg){
        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'fill', 'red');
        rect.setAttributeNS(null, 'width', this.width);
        rect.setAttributeNS(null, 'height', this.height);
        rect.setAttributeNS(null, 'x', this.x);
        rect.setAttributeNS(null, 'y', this.y);

        svg.appendChild(rect);
    }
  }
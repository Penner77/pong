import { SVG_NS } from '../settings';

export default class Paddle {
    constructor(boardHeight, width, height, x, y, up, down) {
      this.boardHeight = boardHeight;
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.speed = 8;
      this.score = 0;
      this.ogheight = height;
      this.pressed_buttons = [false,false];

      document.addEventListener('keydown', event => {
        switch (event.key) {
          case up:
            this.pressed_buttons[0] = true;
          // this.up();
            break;
          case down:
            this.pressed_buttons[1] = true;
          // this.down();
            break;
        }
      });
      document.addEventListener('keyup', event => {
        switch (event.key) {
          case up:
            this.pressed_buttons[0] = false;
          // this.up();
            break;
          case down:
            this.pressed_buttons[1] = false;
          // this.down();
            break;
        }
      });

    }   // END OF CONSTRUCTOR

    move_paddle(){
      if(this.pressed_buttons[0] === true){
        this.y = Math.max(0, this.y - this.speed);
      }else if(this.pressed_buttons[1] === true){
        this.y = Math.min(this.boardHeight - this.height, this.y + this.speed);
      }
    }   
    coordinates(x, y, width, height){
        let leftX = x;
        let rightX = x + width;
        let topY = y;
        let bottomY = y + height;
        return [leftX, rightX, topY, bottomY];
    }

  

    render(svg){
        this.move_paddle();
        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'fill', '#f1551d');
        rect.setAttributeNS(null, 'width', this.width);
        rect.setAttributeNS(null, 'height', this.height);
        rect.setAttributeNS(null, 'x', this.x);
        rect.setAttributeNS(null, 'y', this.y);
        rect.setAttributeNS(null, 'stroke', 'black');
        rect.setAttributeNS(null, 'stroke-width', 3);
        svg.appendChild(rect);
    }
}

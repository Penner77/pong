import './styles/game.css';
import Game from './partials/Game';

// create a game instance
const game = new Game('game', 512, 256);

(function gameLoop() {
  game.render();
  if(game.player1.score===10 || game.player2.score ===10){
    game.render();
    return;
  }
  requestAnimationFrame(gameLoop);
})();

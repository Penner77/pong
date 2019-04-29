import './styles/game.css';
import Game from './partials/Game';

  var start = prompt("Are You Ready to Play Pong!?");
  if (start != null) {
    game;
  }

  const game = new Game('game', 512, 256);

(function gameLoop() {
  game.render();
  if(game.player1.score===5 || game.player2.score ===5){
    game.render();
    return;
  }
  requestAnimationFrame(gameLoop);
})();


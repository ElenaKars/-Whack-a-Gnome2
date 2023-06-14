import Game from '../Game';

describe('Game', () => {
  let game;

  beforeEach(() => {
    document.body.innerHTML = `
    <div class="container">
      <div class="header">
        <button id="start-button">Start Game</button>
      </div>
      <div id="game-board" class="game-board"></div>
      <div id="score-board">Score: 0</div>
      <div id="missed-hits-board">Missed Hits: 0</div>
    </div>
      `;
    game = new Game();
    game.createBoardGame();
    game.start();
  });

  test('create an instance of Game', () => {
    expect(game).toBeInstanceOf(Game);
  });

  test('createBoardGame method', () => {
    expect(game.fieldArr.length).toBe(16);
  });
});

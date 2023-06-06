import Game from '../app';

describe('Game', () => {
  let game;

  beforeEach(() => {
    document.body.innerHTML = `
    <div class="container">
    <div class="header">
      <button id="start-button">Start Game</button>
    </div>
    <div id="game-board" class="game-board"></div>
    </div>
      `;
    game = new Game();
  });

  test('create an instance of Game', () => {
    expect(game).toBeInstanceOf(Game);
  });

  test('createBoardGame method', () => {
    const gameCells = Array.from(document.querySelectorAll('.game-cell'));
    expect(gameCells.length).toBe(16);
  });
});

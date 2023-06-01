// TODO: write code here
const NUM_ROWS = 4;
const NUM_COLS = 4;

function createBoardGame() {
  const gameBoard = document.getElementById('game-board');

  for (let row = 0; row < NUM_ROWS; row += 1) {
    for (let col = 0; col < NUM_COLS; col += 1) {
      const cell = document.createElement('div');
      cell.className = 'game-cell';
      gameBoard.appendChild(cell);
    }
  }
}

function moveGnome() {
  const gameCells = Array.from(document.querySelectorAll('.game-cell'));
  const gnome = document.getElementById('gnome');

  const availableCells = gameCells.filter((cell) => cell !== gnome.parentElement);
  const randomCell = availableCells[(Math.floor(Math.random() * availableCells.length))];
  randomCell.appendChild(gnome);
}

function startGame() {
  const gnome = document.createElement('img');
  gnome.id = 'gnome';
  gnome.className = 'gnome';
  gnome.src = 'goblin.png';

  createBoardGame();
  moveGnome();

  setInterval(moveGnome, 1000);
}

window.addEventListener('DOMContentLoaded', startGame);

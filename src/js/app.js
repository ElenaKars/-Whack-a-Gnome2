import Gnome from './Gnome';

export default class Game {
  constructor() {
    this.fieldSize = 4;
    this.fieldArr = [];
    this.gnome = new Gnome();

    this.createBoardGame();
    this.moveGnome();

    setInterval(() => {
      this.moveGnome();
    }, 1000);
  }

  createBoardGame() {
    const gameBoard = document.getElementById('game-board');

    if (!gameBoard) {
      return;
    }

    for (let row = 0; row < this.fieldSize; row += 1) {
      for (let col = 0; col < this.fieldSize; col += 1) {
        const cell = document.createElement('div');
        cell.className = 'game-cell';
        gameBoard.appendChild(cell);
        this.fieldArr.push(cell);
      }
    }
  }

  moveGnome() {
    const availableCells = this.fieldArr.filter((cell) => !cell.querySelector('img'));
    const randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];

    if (randomCell) {
      randomCell.appendChild(this.gnome.getElement());
    }
  }
}

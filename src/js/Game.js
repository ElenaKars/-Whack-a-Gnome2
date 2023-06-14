import Gnome from './Gnome';

export default class Game {
  constructor() {
    this.fieldSize = 4;
    this.fieldArr = [];
    this.gameBoard = document.getElementById('game-board');
    this.startBtn = document.getElementById('start-button');
    this.scoreBoard = document.getElementById('score-board');
    this.missedHitsBoard = document.getElementById('missed-hits-board');
    this.gnome = new Gnome(this.onGnomeClick.bind(this), this.onMissedHit.bind(this));
    this.score = 0;
    this.missedHits = 0;
  }

  createBoardGame() {
    for (let i = 0; i < this.fieldSize ** 2; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('game-cell');
      this.gameBoard.appendChild(cell);
      this.fieldArr.push(cell);
    }

    this.startBtn.addEventListener('click', this.start.bind(this));
  }

  start() {
    if (this.startBtn) {
      this.startBtn.disabled = true;
    }
    this.score = 0;
    this.missedHits = 0;
    this.updateScoreBoard();
    this.updateMissedHitsBoard();

    this.gnome.add(this.fieldArr);

    setTimeout(() => {
      this.endGame();
    }, 10000);
  }

  endGame() {
    this.scoreBoard.textContent = 0;
    this.missedHitsBoard.textContent = 0;
    const currentCell = this.fieldArr.find((item) => item.querySelector('img'));
    this.gnome.remove(currentCell);
    this.gnome.stop();
    // if (this.score === 5) {
    //   alert('You won!');
    // } else if (this.missedHits >= 5) {
    //   alert('Game over!');
    // }

    // const playAgain = confirm('Do you want to play again?');

    // if (playAgain) {
    //   location.reload();
    // } else {
    //   location.reload();
    // }
  }

  onGnomeClick() {
    this.score += 1;
    this.updateScoreBoard();
    if (this.score >= 5) {
      this.endGame();
    }
  }

  onMissedHit() {
    this.missedHits += 1;
    this.updateMissedHitsBoard();
    if (this.missedHits >= 5) {
      this.endGame();
    }
  }

  updateScoreBoard() {
    this.scoreBoard.textContent = `Score: ${this.score}`;
  }

  updateMissedHitsBoard() {
    this.missedHitsBoard.textContent = `Missed Hits: ${this.missedHits}`;
  }
}

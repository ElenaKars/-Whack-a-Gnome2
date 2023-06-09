import Gnome from './Gnome';

export default class Game {
  constructor() {
    this.fieldSize = 4;
    this.fieldArr = [];
    this.gameBoard = document.getElementById('game-board');
    this.startBtn = document.getElementById('start-button');
    this.scoreBoard = document.getElementById('score-board');
    this.missedHitsBoard = document.getElementById('missed-hits-board');
    this.gnome = new Gnome();
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
    document.addEventListener('mousemove', (e) => {
      const hammerCursor = document.getElementById('hammer-cursor');
      hammerCursor.style.top = e.clientY + 'px';
      hammerCursor.style.left = e.clientX + 'px';
    });    
    this.startBtn.addEventListener('click', this.start.bind(this));
  }

  start() {
    this.score = 0;
    this.missedHits = 0;
    this.updateScoreBoard();
    this.updateMissedHitsBoard();

    const onMissedHit = () => {
      this.missedHits++;
      this.updateMissedHitsBoard();
      if (this.missedHits >= 5) {
        this.endGame();
      }
    };
    
    const onGnomeClick = (e) => {
      this.score += 1;
      this.updateScoreBoard();
      this.gnome.remove(e.currentTarget.parentNode);
    };
    this.gnome.add(this.fieldArr, onMissedHit.bind(this));

    setTimeout(() => {
      this.endGame();
    }, 5000);

    this.startBtn.disabled = true;

    document.getElementById('hammer-cursor').style.display = 'block';
  }

  endGame(onGnomeClick) {
    this.gnome.stop();
    document.getElementById('hammer-cursor').style.display = 'none';
    this.startBtn.disabled = false;
    this.updateMissedHitsBoard();
    this.gnome.gnomeElement.removeEventListener('click', this.gnome.onGnomeClick);
  }

  updateScoreBoard() {
    this.scoreBoard.textContent = `Score: ${this.score}`;
  }

  updateMissedHitsBoard() {
    this.gnome.add(this.fieldArr, this.updateMissedHitsBoard.bind(this));
  }
}

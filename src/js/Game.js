import Gnome from './Gnome';

export default class Game {
  constructor() {
    this.fieldSize = 4;
    this.fieldArr = [];
    this.gameBoard = document.getElementById("game-board")
    this.gnome = new Gnome();
    this.startBtn = document.querySelector(".start-button")
  }

  createBoardGame() {
    for (let i = 0; i < Math.pow(this.fieldSize, 2); i += 1) {
        const cell = document.createElement("div");
        cell.classList.add("game-cell");
        cell.addEventListener("click", this.onCellClick.bind(this))
        this.gameBoard.appendChild(cell);
        this.fieldArr.push(cell);
    }
    this.startBtn.addEventListener("click", this.start.bind(this));
  }
 
  start() {
    this.gnome.add(this.fieldArr)
}

  onCellClick(e) {
      e.preventDefault();
      if(!this.fieldArr.some((item) => item.querySelector("img"))){
        return;
      }
    }
}

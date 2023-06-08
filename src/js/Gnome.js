import goblinImage from '../pic/goblin.png';

export default class Gnome {
  constructor() {
    this.gnomeElement = document.createElement('img');
    this.gnomeElement.classList.add('gnome');
    this.gnomeElement.alt = 'Gnome';
    this.gnomeElement.src = goblinImage;
    this.idSetInterval = null;
  }

  add(fieldArr) {
    this.idSetInterval = setInterval(() => {
      const currentCell = fieldArr.find((item) => item.querySelector('img'));
      if (currentCell) {
        this.remove(currentCell);
      }
      fieldArr[Math.floor(Math.random() * fieldArr.length)].append(this.gnomeElement);
    }, 1000);
  }

  remove(cell) {
    cell.querySelector('img').remove(this);
  }

  stop() {
    clearInterval(this.idSetInterval);
  }
}

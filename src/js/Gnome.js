import goblinImage from '../pic/goblin.png';

export default class Gnome {
  constructor(onGnomeClick, onMissedHit) {
    this.gnomeElement = document.createElement('img');
    this.gnomeElement.classList.add('gnome');
    this.gnomeElement.alt = 'Gnome';
    this.gnomeElement.src = goblinImage;
    this.idSetInterval = null;
    this.onGnomeClick = onGnomeClick;
    this.onMissedHit = onMissedHit;
    // this.remove = remove;
    // this.remove = this.remove.bind(this); // Привязываем контекст метода remove
  }

  add(fieldArr) {
    if (this.idSetInterval) {
      clearInterval(this.idSetInterval); // Очистка предыдущего интервала
    }

    this.idSetInterval = setInterval(() => {
      const currentCell = fieldArr.find((item) => item.querySelector('img'));
      if (currentCell) {
        this.remove(currentCell);
        this.onMissedHit(); // Вызываем колбэк при пропущенном ударе
      }
      fieldArr[Math.floor(Math.random() * fieldArr.length)].append(this.gnomeElement);
    }, 1000);

    this.gnomeElement.addEventListener('click', () => {
      this.onGnomeClick(); // Вызываем колбэк при ударе по гному
      this.remove(this.gnomeElement.parentNode);
    });
  }

  remove(cell) {
    if (cell) {
      const image = cell.querySelector('img');
      if (image) {
        cell.removeChild(image);
      }
    }
  }

  stop() {
    clearInterval(this.idSetInterval);
  }
}

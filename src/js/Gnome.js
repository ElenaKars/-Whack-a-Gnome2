import goblinImage from '../pic/goblin.png';

export default class Gnome {
  constructor() {
    this.gnomeElement = document.createElement('img');
    this.gnomeElement.classList.add('img');
    this.gnomeElement.alt = 'Gnome';
    this.gnomeElement.src = goblinImage;
  }

  getElement() {
    return this.gnomeElement;
  }
}

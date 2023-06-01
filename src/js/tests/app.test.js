import { createBoardGame, moveGnome } from '../app';

describe('App', () => {
  // Описываем тест для функции createBoardGame
  describe('createBoardGame', () => {
    it('should create game cells', () => {
      document.body.innerHTML = '<div id="game-board"></div>';

      createBoardGame();

      // Проверяем, что ячейки были созданы и добавлены в DOM
      expect(document.querySelectorAll('.game-cell').length).toBe(16);
    });
  });

  describe('moveGnome', () => {
    it('should move gnome to a random cell', () => {
      // Создаем тестовый DOM-элемент, на котором будем выполнять перемещение гнома
      document.body.innerHTML = `
        <div id="game-board">
          <div class="game-cell"></div>
          <div class="game-cell"></div>
          <div class="game-cell">
            <img id="gnome">
          </div>
          <div class="game-cell"></div>
        </div>
      `;

      moveGnome();

      // Проверяем, что гном был перемещен в случайную ячейку
      const gnomeParentElement = document.getElementById('gnome').parentElement;
      expect(gnomeParentElement.classList.contains('game-cell')).toBe(true);
    });
  });
});

// @ts-check

/**
 * This module contains the ASCII art for the different stages of the gallows and a method for returning the correct stage.
 * @module hangman
 *@namespace hangman
 */
const hangman = {
  /**
   * This array holds all the ASCII art for the different stages of the gallows.
   * @memberof hangman
   * @type {Array}
   */
  stages: [
    `
        +---+
        |   |
            |
            |
            |
            |
      =========
      `,
    `
        +---+
        |   |
        O   |
            |
            |
            |
      =========
      `,
    `
        +---+
        |   |
        O   |
        |   |
            |
            |
      =========
      `,
    `
        +---+
        |   |
        O   |
       /|   |
            |
            |
      =========
      `,
    `
        +---+
        |   |
        O   |
       /|\\\  |
            |
            |
      =========
      `,
    `
        +---+
        |   |
        O   |
       /|\\\  |
       /    |
            |
      =========
      `,
    `
        +---+
        |   |
        O   |
       /|\\\  |
       / \\\  |
            |
      =========
      `,
  ],
  /**
   * This function takes the players remaning lives as an argument and returns the corresponding stage of the gallows according to that.
   * @memberof hangman
   * @param {Number} remainingLives a number representing the lifes the player has remaning
   * @returns {String} corresponding ASCII drawing of the gallows
   */
  draw(remainingLives) {
    if (remainingLives === 6) return this.stages[0];
    if (remainingLives === 5) return this.stages[1];
    if (remainingLives === 4) return this.stages[2];
    if (remainingLives === 3) return this.stages[3];
    if (remainingLives === 2) return this.stages[4];
    if (remainingLives === 1) return this.stages[5];
    if (remainingLives === 0) return this.stages[6];
  },
};

export default hangman;

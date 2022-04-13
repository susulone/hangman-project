// @ts-check

/**
 * @license
 * Copyright 2022 Suvi Sulonen <suvi.sulonen@gmail.com>
 *
 * This file is part of Hangman Test Project.
 *
 * Hangman Test Project is free software: you can redistribute it and/or modify it under the terms of the
 * GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Hangman Test Project is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the
 * implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with Hangman Test Project. If not, see <https://www.gnu.org/licenses/>.
 */

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
                                ===========
      `,
    `
                                   +---+
                                   |   |
                                   O   |
                                       |
                                       |
                                       |
                                ===========

      `,
    `
                                   +---+
                                   |   |
                                   O   |
                                   |   |
                                       |
                                       |
                                ===========
      `,
    `
                                   +---+
                                   |   |
                                   O   |
                                  /|   |
                                       |
                                       |
                                ===========
      `,
    `
                                   +---+
                                   |   |
                                   O   |
                                  /|\\\  |
                                       |
                                       |
                                ===========
      `,
    `
                                   +---+
                                   |   |
                                   O   |
                                  /|\\\  |
                                  /    |
                                       |
                                ===========
      `,
    `
                                   +---+
                                   |   |
                                   O   |
                                  /|\\\  |
                                  / \\\  |
                                       |
                                ===========
      `,
  ],
  /**
   * This function takes the players remaning lives as an argument and returns the corresponding stage of the gallows according to that.
   * @memberof hangman
   * @param {Number} remainingLives a number representing the lifes the player has remaning
   * @returns {String} corresponding ASCII drawing of the gallows
   */
  draw(remainingLives) {
    if (remainingLives === 6) return hangman.stages[0];
    if (remainingLives === 5) return hangman.stages[1];
    if (remainingLives === 4) return hangman.stages[2];
    if (remainingLives === 3) return hangman.stages[3];
    if (remainingLives === 2) return hangman.stages[4];
    if (remainingLives === 1) return hangman.stages[5];
    if (remainingLives === 0) return hangman.stages[6];
  },
};

export default hangman;

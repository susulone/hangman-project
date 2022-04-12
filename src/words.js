// @ts-check

/**
 * @license
 * @copyright 2022
 * @author Suvi Sulonen <suvi.sulonen@gmail.com>
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
 * Contains everything to do with the words.
 * @module words
 * @namespace words
 */
const words = {
  /**
   * This array holds all the words used in the game
   * @memberof words
   * @type {Array}
   */
  list: ["ardvark", "baboon", "camel"],
  /**
   * This method generates one random word from a the array of words given as an argument.
   * @memberof words
   * @returns {String}  one randomly selected word from the <tt>words</tt> array
   */
  getWord() {
    const randomWord =
      words.list[Math.floor(Math.random() * words.list.length)];

    return randomWord.toUpperCase();
  },
  /**
   * This method takes the word given as an argument and returns an equal amount of blank spaces (<tt>'_'</tt>).
   * @memberof words
   * @param {any} chosenWord a word of random length
   * @returns {Array} the same amount of underscores as the <tt>chosenWords</tt> has letters
   */
  displayWord: (chosenWord) => {
    const answerArray = [];

    for (const char in chosenWord) {
      answerArray.push("_");
    }

    return answerArray;
  },
};

export default words;

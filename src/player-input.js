// @ts-check

import readlineSync from "readline-sync";
import align from "./align.js";

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
 * Contains everything related to the player. Includes the methods that handle getting the users input and reformatting it to fit the criterias given.
 * @module playerInput
 * @namespace playerInput
 * @requires align
 */
const playerInput = {
  /**
   * This method asks the player to give a single letter and return the players answer.
   * @memberof playerInput
   * @returns {String} a string of undetermined length
   */
  get: () => {
    const formattedQuestion =
      align.newLine + align.centerS + "GUESS A LETTER: ";
    return readlineSync.question(formattedQuestion);
  },
  /**
   * This method modifies the input to contain only a single capitalized letter.
   * @memberof playerInput
   * @param {String} input a string of undetermined length
   * @returns {String} a single capitalised letter
   */
  validate: (input) => {
    const guessedLetter = input;
    return guessedLetter[0].toUpperCase();
  },
};

export default playerInput;

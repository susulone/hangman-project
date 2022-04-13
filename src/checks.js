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
 * This object holds all the functionality used to check if the player's guess was right and if all the letters have been guessed.
 * @module checks
 * @namespace checks
 * @type {Object}
 */
const checks = {
  /**
   * This method takes three parameters: a word, a letter and an array. It checks if any of the character in the given word,
   * matches the given letter. If a character matches with the letter, the method will update the given array at that index.
   * After all the characters have been checked, it returns the updated array.
   * @memberof checks
   * @param {String} chosenWord a word of random length
   * @param {String} guessedLetter a single letter
   * @param {Array} anwserArray an array with as many blank spaces as the <tt>chosenWords</tt> has letters
   * @returns {Array} a copy of the <tt>anwserArray</tt> with possible letters replacing some of the blank spaces
   */
  forLetterInWord: (chosenWord, guessedLetter, anwserArray) => {
    let updatedAnwserArray = anwserArray.map((letter) => letter);
    let index = -1;
    for (const char of chosenWord) {
      index++;
      if (char == guessedLetter) {
        updatedAnwserArray[index] = guessedLetter;
      }
    }
    return updatedAnwserArray;
  },
  /**
   * This method calculates how many blanks spaces (<tt>'_'</tt>) there are in the given array.
   * @memberof checks
   * @param {Array} answerArray an array with a mix of blanks spaces and letters
   * @returns {Number} the amount of of blank spaces in the array
   */
  forRemaningLetters: (answerArray) => {
    let results = answerArray.includes("_");
    let count = 0;

    if (results === true) {
      for (let i = 0; i < answerArray.length; i++) {
        if (answerArray[i] === "_") count++;
      }
    } else if (results === false) {
      count = 0;
    }
    return count;
  },
  /**
   * This method checks if the two given arrays are equal. If the arrays are equal, the method's return value
   * will be changed to be 1, otherwise it will stay as 0.
   * @memberof checks
   * @param {Array} answerArray an array with a mix of blanks spaces and letters
   * @param {Array} updateAnswerArray an array with a mix of blanks spaces and letters, this array also includes the players last guess
   * @returns {Number} 0 unless the arrays are equal, in that case it will return 1
   */
  forWrongAnswer: (answerArray, updateAnswerArray) => {
    let value = 0;
    let isEqual = updateAnswerArray.every(
      (value, index) => value === answerArray[index]
    );
    if (isEqual === true) {
      value++;
    } else {
      value = 0;
    }
    return value;
  },
};

export default checks;

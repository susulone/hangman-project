// @ts-check

import readlineSync from "readline-sync";

/**
 * Contains everything related to the player. Includes the methods that handle getting the users input and reformatting it to fit the criterias given.
 * @module playerInput
 * @namespace playerInput
 */
const playerInput = {
  /**
   * This method asks the player to give a single letter and return the players answer.
   * @memberof playerInput
   * @returns {String} a string of undetermined length
   */
  get: () => {
    return readlineSync.question("\n GUESS A LETTER: ");
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

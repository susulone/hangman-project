import words from "./src/words.js";
import hangman from "./src/hangman.js";
import checks from "./src/checks.js";
import states from "./src/states.js";
import playerInput from "./src/player-input.js";

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
 * @requires words
 * @requires hangman
 * @requires checks
 * @requires states
 * @require playerInput
 * This is the entry point for the game. This function will contain the game loop and call the other methods when they are needed.
 */
const main = () => {
  let remainingLetters;
  let remainingLives = 6;

  console.log("\n    HANGMAN!");

  const chosenWord = words.getWord();
  let answerArray = words.displayWord(chosenWord);
  remainingLetters = answerArray.length;

  // GameLoop
  while (remainingLetters >= 0 || remainingLives >= 0) {
    const theGallows = hangman.draw(remainingLives);

    // Set the screen for the current round
    console.log(`\n  LIVES LEFT: ${remainingLives}`);
    console.log(theGallows);
    console.log("  ", answerArray.join(" "));

    const input = playerInput.get();
    const playerGuess = playerInput.validate(input);

    const updateAnswerArray = checks.forLetterInWord(
      chosenWord,
      playerGuess,
      answerArray
    );

    const results = checks.forWrongAnswer(answerArray, updateAnswerArray);
    remainingLives -= results;

    answerArray = updateAnswerArray;

    remainingLetters = checks.forRemaningLetters(answerArray);

    if (remainingLetters === 0) {
      const result = states.win(remainingLives, answerArray);
      process.exit(result);
    }
    if (remainingLives === 0) {
      const result = states.lose(remainingLives, chosenWord);
      process.exit(result);
    }
    // Clear screen
    console.clear();
  }
};

main();

export default main;

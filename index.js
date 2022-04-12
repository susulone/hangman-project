import words from "./src/words.js";
import hangman from "./src/hangman.js";
import checks from "./src/checks.js";
import states from "./src/states.js";
import playerInput from "./src/player-input.js";

/**
 * @requires words
 * @requires hangman
 * @requires checks
 * @requires states
 * @require playerInput
 * This is the entry point for the game.
 */
const main = () => {
  let remainingLetters;
  let remainingLives = 6;

  console.log("\nHANGMAN!\n");

  const chosenWord = words.getWord();
  let answerArray = words.displayWord(chosenWord);
  remainingLetters = answerArray.length;

  // GameLoop
  while (remainingLetters >= 0 || remainingLives >= 0) {
    const theGallows = hangman.draw(remainingLives);

    // Set the screen for the current round
    console.log(`  LIVES LEFT: ${remainingLives}`);
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

    if (remainingLetters === 0) states.win(remainingLives, answerArray);
    if (remainingLives === 0) states.lose(remainingLives, chosenWord);

    // Clear screen
    console.clear();
  }
};

main();

export default main;

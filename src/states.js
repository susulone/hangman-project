// @ts-check

import hangman from "./hangman.js";
import chalk from "chalk";

/**
 * Description to be added
 * @module states
 * @namespace states
 */
const states = {
  /**
   * This will be shown if the player has won the game.
   * @memberof states
   * @param {Number} remainingLives
   * @param {Array} answerArray
   */
  win: (remainingLives, answerArray) => {
    // console.clear();
    // console.log(`  LIVES LEFT: ${remainingLives}`);
    // const lastStage = hangman.draw(remainingLives);
    // console.log(lastStage);
    // console.log("  ", answerArray.join(" "));
    // console.log(`\n    YOU WON!\n`);
    // process.exit(0);

    //Using chalk
    console.clear();
    console.log(chalk.dim(`  LIVES LEFT: ${remainingLives}`));
    const lastStage = hangman.draw(remainingLives);
    console.log(chalk.dim(lastStage));
    console.log(chalk.dim("  ", answerArray.join(" ")));
    console.log(chalk.green.bold(`\n    YOU WON!\n`));
    return 0;
  },
  /**
   * This will be shown if the player has lost the game.
   * @memberof states
   * @param {Number} remainingLives
   * @param {String} chosenWord
   */
  lose: (remainingLives, chosenWord) => {
    // console.clear();
    // console.log(`  LIVES LEFT: ${remainingLives}`);
    // console.log(hangman.stages[6]);
    // console.log(`    GAME OVER`);
    // console.log(`\nTHE WORD WAS ${chosenWord}`);
    // process.exit(0);

    // Using Chalk
    console.clear();
    console.log(chalk.dim(`  LIVES LEFT: ${remainingLives}`));
    console.log(chalk.dim(hangman.stages[6]));
    console.log(chalk.red.bold(`    GAME OVER`));
    console.log(chalk.dim(`\nTHE WORD WAS ${chosenWord}`));
    return 0;
  },
};

export default states;

// @ts-check

import hangman from "./hangman.js";
import align from "./align.js";
import chalk from "chalk";

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
 * This object holds the game screens that are called when the player wins or loses. It also holds the game logo that is called multiple times through out the code.
 * @module states
 * @namespace states
 * @requires align
 * @requires hangman
 */
const states = {
  /**
   * This method returns the game logo.
   * @memberof states
   * @returns {String} the game logo
   */
  intro: () => {
    const welcome = chalk.red(`
     ██░ ██  ▄▄▄       ███▄    █   ▄████  ███▄ ▄███▓ ▄▄▄       ███▄    █ 
    ▓██░ ██▒▒████▄     ██ ▀█   █  ██▒ ▀█▒▓██▒▀█▀ ██▒▒████▄     ██ ▀█   █ 
    ▒██▀▀██░▒██  ▀█▄  ▓██  ▀█ ██▒▒██░▄▄▄░▓██    ▓██░▒██  ▀█▄  ▓██  ▀█ ██▒
    ░▓█ ░██ ░██▄▄▄▄██ ▓██▒  ▐▌██▒░▓█  ██▓▒██    ▒██ ░██▄▄▄▄██ ▓██▒  ▐▌██▒
    ░▓█▒░██▓ ▓█   ▓██▒▒██░   ▓██░░▒▓███▀▒▒██▒   ░██▒ ▓█   ▓██▒▒██░   ▓██░
     ▒ ░░▒░▒ ▒▒   ▓▒█░░ ▒░   ▒ ▒  ░▒   ▒ ░ ▒░   ░  ░ ▒▒   ▓▒█░░ ▒░   ▒ ▒ 
     ▒ ░▒░ ░  ▒   ▒▒ ░░ ░░   ░ ▒░  ░   ░ ░  ░      ░  ▒   ▒▒ ░░ ░░   ░ ▒░
     ░  ░░ ░  ░   ▒      ░   ░ ░ ░ ░   ░ ░      ░     ░   ▒      ░   ░ ░ 
     ░  ░  ░      ░  ░         ░       ░        ░         ░  ░         ░ 
                                                                         `);
    return welcome;
  },
  /**
   * This method will print all the relevant information when the player has won the game.
   * @memberof states
   * @param {Number} remainingLives number of lives left at the end of the game
   * @param {Array} answerArray the fully filled array with no blank spaces left
   * @param {String} chosenWord the right word the user was trying to quess
   * @returns {Number} 0 for the process.exit
   */
  win: (remainingLives, answerArray, chosenWord) => {
    console.clear();
    console.log(states.intro());
    console.log(
      align.newLine,
      align.centerS,
      chalk.dim(`LIVES LEFT: ${remainingLives}`)
    );
    const lastStage = hangman.draw(remainingLives);
    console.log(chalk.dim(lastStage));
    console.log(
      chalk.dim(align.adjustAlignment(chosenWord), answerArray.join(" "))
    );
    console.log(align.newLine, align.centerXL, chalk.green.bold(`YOU WIN!\n`));
    return 0;
  },
  /**
   * This method will print all the relevant information when the player has lost the game.
   * @memberof states
   * @param {Number} remainingLives number of lives left at the end of the game
   * @param {String} chosenWord the right word the user was trying to quess
   * @returns {Number} 0 for the process.exit
   */
  lose: (remainingLives, chosenWord) => {
    console.clear();
    console.log(states.intro());
    console.log(
      align.newLine,
      align.centerS,
      chalk.dim(`LIVES LEFT: ${remainingLives}`)
    );
    console.log(chalk.dim(hangman.stages[6]));
    console.log(align.centerXL, chalk.red.bold(`GAME OVER`));
    console.log(
      align.newLine,
      align.centerXS,
      chalk.dim(`THE WORD WAS: ${chosenWord}`)
    );
    return 0;
  },
};

export default states;

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
 * This object holds all the functionality needed to make the games output look more polished.
 * @module align
 * @namespace align
 */
const align = {
  /**
   * This is the XS adjuster with 26 invisible characters to align console.log statements to the center of the play screen.
   * @memberof align
   * @type {String}
   */
  centerXS: chalk.hidden("--------------------------"),
  /**
   *  This is the S adjuster with 29 invisible characters to align console.log statements to the center of the play screen.
   * @memberof align
   * @type {String}
   */
  centerS: chalk.hidden("-----------------------------"),
  /**
   *  This is the M adjuster with 30 invisible characters to align console.log statements to the center of the play screen.
   * @memberof align
   * @type {String}
   */
  centerM: chalk.hidden("------------------------------"),
  /**
   *  This is the L adjuster with 31 invisible characters to align console.log statements to the center of the play screen.
   * @memberof align
   * @type {String}
   */
  centerL: chalk.hidden("-------------------------------"),
  /**
   *  This is the XL adjuster with 32 invisible characters to align console.log statements to the center of the play screen.
   * @memberof align
   * @type {String}
   */
  centerXL: chalk.hidden("--------------------------------"),
  /**
   * This will align our console.log statements to new line.
   * @memberof align
   * @type {String}
   */
  newLine: "\n",
  /**
   * This method takes the given word and calculates it's length and returns the suitable "alignment adjuster" that we can
   * use to align our output to the center of the play screen.
   *
   * @memberof align
   * @param {String} chosenWord a words of varying lenght
   * @returns {String} an invisible string of varying length.
   */
  adjustAlignment(chosenWord) {
    if (chosenWord.length >= 8) return align.centerS;
    if (chosenWord.length === 7) return align.centerM;
    if (chosenWord.length === 6) return align.centerL;
    if (chosenWord.length <= 5) return align.centerXL;
  },
};

export default align;

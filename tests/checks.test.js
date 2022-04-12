import checks from "../src/checks";

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

describe("checks", () => {
  it("should be an object", () => {
    expect(checks).toBeObject();
  });

  it("should contain a key  called 'forLetterInWord'", () => {
    expect(checks).toContainKey("forLetterInWord");
  });
  it("should contain a key  called 'forRemaningLetters'", () => {
    expect(checks).toContainKey("forRemaningLetters");
  });

  it("should contain a key  called 'forWrongAnswer'", () => {
    expect(checks).toContainKey("forWrongAnswer");
  });
});

describe("forLetterInWord", () => {
  const forLetterInWord = checks.forLetterInWord;

  it("should be a method", () => {
    expect(forLetterInWord).toBeFunction();
  });

  it("should return an array", () => {
    let chosenWord = "camel";
    let guessedLetter = "A";
    let anwserArray = ["_", "_", "_", "_", "_"];
    expect(forLetterInWord(chosenWord, guessedLetter, anwserArray)).toBeArray();
  });
});

describe("forRemaningLetters", () => {
  const forRemaningLetters = checks.forRemaningLetters;

  it("should be a method", () => {
    expect(forRemaningLetters).toBeFunction();
  });

  it("should return the number of blanks('_') found", () => {
    let anwserArray = ["_", "_", "_", "_", "_"];
    expect(forRemaningLetters(anwserArray)).toBeNumber();
  });

  it("should return 0 if no blanks('_') were found", () => {
    let anwserArray = ["c", "a", "m", "e", "l"];
    expect(forRemaningLetters(anwserArray)).toEqual(0);
  });
});

describe("forWrongAnswer", () => {
  const forWrongAnswer = checks.forWrongAnswer;

  it("should be a method", () => {
    expect(forWrongAnswer).toBeFunction();
  });

  it("if the arrays are the same it should return 1", () => {
    const answerArray = ["_", "_", "_", "_", "_"];
    const updateAnswerArray = ["_", "_", "_", "_", "_"];
    expect(forWrongAnswer(answerArray, updateAnswerArray)).toEqual(1);
  });

  it("if the arrays are not the same it should return 0", () => {
    const answerArray = ["_", "_", "_", "_", "_"];
    const updateAnswerArray = ["_", "A", "_", "_", "_"];
    expect(forWrongAnswer(answerArray, updateAnswerArray)).toEqual(0);
  });
});

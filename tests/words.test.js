import words from "../src/words";

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

describe("words", () => {
  it("should be an object", () => {
    expect(words).toBeObject();
  });

  it("should contain a key called 'list'", () => {
    expect(words).toContainKey("list");
  });

  it("the key 'list' should be an array", () => {
    expect(words.list).toBeArray();
  });

  it("'list' should not be empty", () => {
    expect(words.list).not.toBeNull();
  });

  it("'list' should contain only strings", () => {
    words.list.map((word, index) => {
      expect(words.list[index]).toBeString();
    });
  });

  it("should contain a key called 'getWord'", () => {
    expect(words).toContainKey("getWord");
  });

  it("should contain a key called 'displayWord'", () => {
    expect(words).toContainKey("displayWord");
  });
});

describe("getWord", () => {
  const getWord = words.getWord;

  it("sould be a method", () => {
    expect(getWord).toBeFunction();
  });

  it("should return a string from the array given as a param", () => {
    expect(getWord()).toBeString();
  });
});

describe("displayWord", () => {
  const displayWord = words.displayWord;

  it("should be a method", () => {
    expect(displayWord).toBeFunction();
  });

  it("should return an array", () => {
    const chosenWord = "camel";
    expect(displayWord(chosenWord)).toBeArray();
  });

  it("returned array should not be empty", () => {
    const chosenWord = "camel";
    expect(displayWord(chosenWord)).not.toBeArrayOfSize(0);
  });

  it("should return equal amount of blanks('_') as the given parameter has characters", () => {
    let chosenWord = "camel";
    expect(displayWord(chosenWord)).toBeArrayOfSize(5);
  });
});

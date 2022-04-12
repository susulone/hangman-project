import hangman from "../src/hangman";

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

describe("hangman", () => {
  it("should be an object", () => {
    expect(hangman).toBeObject();
  });

  it("should contain a key called 'stages'", () => {
    expect(hangman).toContainKey("stages");
  });

  it("the key 'stages' should be an array", () => {
    expect(hangman.stages).toBeArray();
  });

  it("'stages' should not be empty", () => {
    expect(hangman.stages).not.toBeNull();
  });

  it("'stages' should contain only strings", () => {
    hangman.stages.map((stage, index) => {
      expect(hangman.stages[index]).toBeString();
    });
  });

  it("should contain a key called 'draw'", () => {
    expect(hangman).toContainKey("draw");
  });

  it("'draw' should be a method", () => {
    expect(hangman.draw).toBeFunction();
  });
});

describe("draw", () => {
  [
    {
      input: 6,
      expected: hangman.stages[0],
    },
    {
      input: 5,
      expected: hangman.stages[1],
    },
    {
      input: 4,
      expected: hangman.stages[2],
    },
    {
      input: 3,
      expected: hangman.stages[3],
    },
    {
      input: 2,
      expected: hangman.stages[4],
    },
    {
      input: 1,
      expected: hangman.stages[5],
    },
    {
      input: 0,
      expected: hangman.stages[6],
    },
  ].forEach(({ input: currentLives, expected: hangmanStage }) => {
    it(`should return the correct stage of the hangman when the player has ${currentLives} lives left`, () => {
      expect(hangman.draw(currentLives)).toEqual(hangmanStage);
    });
  });
});

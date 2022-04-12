import states from "../src/states";

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

describe("states", () => {
  it("should be an object", () => {
    expect(states).toBeObject();
  });

  //   it("should contain a key  called 'intro'", () => {
  //     expect(states).toContainKey("intro");
  //   });

  //   it("the key 'intro' should be an method", () => {
  //     expect(states.intro).toBeFunction();
  //   });

  it("should contain a key  called 'win'", () => {
    expect(states).toContainKey("win");
  });

  it("the key 'win' should be an method", () => {
    expect(states.win).toBeFunction();
  });

  it("should contain a key  called 'lose'", () => {
    expect(states).toContainKey("lose");
  });

  it("the key 'lose' should be an method", () => {
    expect(states.lose).toBeFunction();
  });
});

describe("win", () => {
  it("spying using original implementation", () => {
    const spy = jest.spyOn(states, "win");
    const anwserArray = ["C", "A", "M", "E", "L"];
    const remainingLives = 6;

    expect(states.win(remainingLives, anwserArray)).toBe(0);
    expect(spy).toHaveBeenCalledWith(6, ["C", "A", "M", "E", "L"]);
  });
});

describe("lose", () => {
  it("spying using original implementation", () => {
    const spy = jest.spyOn(states, "lose");
    const chosenWord = "CAMEL";
    const remainingLives = 6;

    expect(states.lose(remainingLives, chosenWord)).toBe(0);
    expect(spy).toHaveBeenCalledWith(6, "CAMEL");
  });
});

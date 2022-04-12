import playerInput from "../src/player-input";

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

describe("playerInput", () => {
  it("should be an object", () => {
    expect(playerInput).toBeObject();
  });

  it("should contain a key  called 'get'", () => {
    expect(playerInput).toContainKey("get");
  });

  it("the key 'get' should be an method", () => {
    expect(playerInput.get).toBeFunction();
  });

  it("'get' should return a string", () => {
    const spy = jest.spyOn(playerInput, "get");
    spy.mockImplementation((input) => "a");

    expect(playerInput.get("a")).toBe("a");
    expect(spy).toHaveBeenCalledWith("a");
  });

  it("'get' should not return empty", () => {
    const spy = jest.spyOn(playerInput, "get");
    spy.mockImplementation((input) => "a");

    expect(playerInput.get("a")).not.toBeNull();
    expect(spy).toHaveBeenCalledWith("a");
  });

  it("should contain a key  called 'validate'", () => {
    expect(playerInput).toContainKey("get");
  });

  it("the key 'validate' should be an method", () => {
    expect(playerInput.validate).toBeFunction();
  });

  it("'validate' should return a string", () => {
    const input = "AA";
    expect(playerInput.validate(input)).toBeString();
  });

  it("'validate' should return a single capitalized letter", () => {
    const input = "aa";
    expect(playerInput.validate(input)).toBe("A");
  });

  it.todo(
    "'validate' should check and handle other invalid inputs like numbers"
  );
});

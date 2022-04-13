import align from "../src/align";

/**
 * @copyright 2022
 * @author Suvi Sulonen <suvi.sulonen@gmail.com>
 * @license
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

describe("align", () => {
  it("should be an object", () => {
    expect(align).toBeObject();
  });

  it("should contain a key  called 'centerXS'", () => {
    expect(align).toContainKey("centerXS");
  });
  it("should contain a key  called 'centerS'", () => {
    expect(align).toContainKey("centerS");
  });
  it("should contain a key  called 'centerM'", () => {
    expect(align).toContainKey("centerM");
  });
  it("should contain a key  called 'centerL'", () => {
    expect(align).toContainKey("centerL");
  });
  it("should contain a key  called 'centerXL'", () => {
    expect(align).toContainKey("centerXL");
  });
  it("should contain a key  called 'newLine'", () => {
    expect(align).toContainKey("newLine");
  });
  it("should contain a key  called 'adjustAlignment'", () => {
    expect(align).toContainKey("adjustAlignment");
  });
});

describe("adjustAlignment", () => {
  [
    {
      input: "ox",
      expected: align.centerXL,
    },
    {
      input: "camel",
      expected: align.centerXL,
    },
    {
      input: "baboon",
      expected: align.centerL,
    },
    {
      input: "ardvark",
      expected: align.centerM,
    },
    {
      input: "bullcalf",
      expected: align.centerS,
    },
    {
      input: "salamander",
      expected: align.centerS,
    },
  ].forEach(({ input: chosenWord, expected: hangmanStage }) => {
    it(`should return the correct "align adjustment" when chosenWord has ${chosenWord.length} letters`, () => {
      expect(align.adjustAlignment(chosenWord)).toBe(hangmanStage);
    });
  });
});

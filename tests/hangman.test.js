import hangman from "../src/hangman";

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

  it("'draw' should be a function", () => {
    expect(hangman.draw).toBeFunction();
  });

  it("'draw' should return the correct stage of the hangman when the player has 6 lives left", () => {
    const remaningLives = 6;
    expect(hangman.draw(remaningLives)).toEqual(hangman.stages[0]);
  });

  it("'draw' should return the correct stage of the hangman when the player has 0 lives left", () => {
    const remaningLives = 0;
    expect(hangman.draw(remaningLives)).toEqual(hangman.stages[6]);
  });
});

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

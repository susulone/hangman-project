import words from "../src/words";

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

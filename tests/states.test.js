import states from "../src/states";

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

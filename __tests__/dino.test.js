import DinoGame from "../src/dino.js";
describe("DinoGame", () => {

  test("it should return a string", () => {
    let dinoGame = new DinoGame("Alaskacephale");
    dinoGame.processUserGuess("ae");
    expect(dinoGame.getDisplayString()).toEqual("a_a__a_e__a_e");
    });

  test("it should add a new guess to the userGuess string", () => {
    let dinoGame = new DinoGame("Alaskacephale");
    dinoGame.processUserGuess("a");
    expect(dinoGame.processUserGuess("e")).toEqual("ae");
  });
});
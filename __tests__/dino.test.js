import getDisplayString from "../src/dino.js";
describe("Dino", () => {

  test("it should return a string", () => {
    expect(getDisplayString()).toEqual("Alaskacephale");
    });
});
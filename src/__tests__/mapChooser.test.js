import mapChooser from "../mapChooser";

describe("mapChooser", () => {
  it("returns an image file name based on input given to it", () => {
    const expected = "portland.jpg";
    const actual = mapChooser("portland");
    expect(actual).toEqual(expected);
  });

  it("returns an default image when no input is given", () => {
    const expected = "default.jpg";
    const actual = mapChooser();
    expect(actual).toEqual(expected);
  });
});

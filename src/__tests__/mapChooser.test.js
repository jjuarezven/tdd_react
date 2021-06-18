import mapChooser from "../mapChooser";

describe("mapChooser", () => {
  it("returns an image file name based on input given to it", () => {
    const expected = "portland.png";
    const actual = mapChooser("portland");
    expect(actual).toEqual(expected);
  });

  it("returns a default image when no input is given", () => {
    const expected = "none.png";
    const actual = mapChooser();
    expect(actual).toEqual(expected);
  });
});

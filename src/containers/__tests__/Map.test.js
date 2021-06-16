import React from "react";
import { shallow } from "enzyme";
import Map from "../Map";

describe("Map", () => {
  let mountedMap;

  beforeEach(() => {
    mountedMap = shallow(<Map />);
  });

  it("renders without crashing", () => {
    expect(mountedMap.length).toBe(1);
  });

  it("contains an image", () => {
    const img = mountedMap.find("img");
    expect(img.length).toBe(1);
  });
});

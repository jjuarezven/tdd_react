import React from "react";
import { shallow } from "enzyme";
import StoreLocator from "../StoreLocator";

describe("StoreLocator", () => {
  let mountedStoreLocator;

  beforeEach(() => {
    mountedStoreLocator = shallow(<StoreLocator />);
  });

  it("renders without crashing", () => {
    expect(mountedStoreLocator.length).toBe(1);
  });

  it("renders two buttons", () => {
    const buttons = mountedStoreLocator.find("Button");
    expect(buttons.length).toBe(2);
  });

  it("renders a map", () => {
    const map = mountedStoreLocator.find("Map");
    expect(map.length).toBe(1);
  });
});
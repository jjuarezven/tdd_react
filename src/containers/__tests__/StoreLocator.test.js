import React from "react";
import { shallow } from "enzyme";
import StoreLocator from "../StoreLocator";
import axios from "axios";

describe("StoreLocator", () => {
  let mountedStoreLocator;

  beforeEach(() => {
    mountedStoreLocator = shallow(<StoreLocator />);
  });

  it("calls axios.get in #componentDidMount", () => {
    return mountedStoreLocator
      .instance()
      .componentDidMount()
      .then(() => {
        expect(axios.get).toHaveBeenCalled();
      });
  });

  it("calls axios.get with correct url", () => {
    return mountedStoreLocator
      .instance()
      .componentDidMount()
      .then(() => {
        expect(axios.get).toHaveBeenCalledWith(
          "http://localhost:3000/data/shops.json"
        );
      });
  });

  it("renders without crashing", () => {
    expect(mountedStoreLocator.length).toBe(1);
  });

  /* it("renders 3 buttons", () => {
    const buttons = mountedStoreLocator.find("Button");
    expect(buttons.length).toBe(3);
  }); */

  it("renders a map", () => {
    const map = mountedStoreLocator.find("Map");
    expect(map.length).toBe(1);
  });
});

describe("choose map", () => {
  it("updates this.state.currentMap using the location passed to it", () => {
    let mountedStoreLocator = shallow(<StoreLocator />);
    let mockEvent = { target: { value: "testland" } };
    mountedStoreLocator.instance().chooseMap(mockEvent);
    expect(mountedStoreLocator.instance().state.currentMap).toBe(
      "testland.png"
    );
  });
});

import React from "react";
import { shallow } from "enzyme";
import StoreLocator from "../StoreLocator";
import axios from "axios";
import renderer from "react-test-renderer";

describe("StoreLocator", () => {
  let mountedStoreLocator;

  beforeEach(() => {
    mountedStoreLocator = shallow(<StoreLocator />);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<StoreLocator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("calls axios.get in #componentDidMount", () => {
    mountedStoreLocator
      .instance()
      .componentDidMount()
      .then(() => {
        expect(axios.get).toHaveBeenCalled();
      });
  });

  it("calls axios.get with correct url", () => {
    mountedStoreLocator
      .instance()
      .componentDidMount()
      .then(() => {
        expect(axios.get).toHaveBeenCalledWith(
          "http://localhost:3000/data/shops.json"
        );
      });
  });

  it("updates state with api data", () => {
    mountedStoreLocator
      .instance()
      .componentDidMount()
      .then(() => {
        expect(mountedStoreLocator.state()).toHaveProperty("shops", [
          {
            location: "test location",
            address: "test address"
          }
        ]);
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

import React from "react";
import { shallow } from "enzyme";
import Button from "../Button";

describe("Button", () => {
  let mountedButton;

  beforeEach(() => {
    mountedButton = shallow(<Button />);
  });

  it("renders without crashing", () => {
    expect(mountedButton.length).toBe(1);
  });

  it("renders a button", () => {
    const button = mountedButton.find("button");
    expect(button.length).toBe(1);
  });
});

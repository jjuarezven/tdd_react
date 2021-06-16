import React from "react";
import { shallow } from "enzyme";
import Header from "../Header";

describe("Header", () => {
  let mountedHeader;

  beforeEach(() => {
    mountedHeader = shallow(<Header />);
  });

  it("renders without crashing", () => {
    expect(mountedHeader.length).toBe(1);
  });

  it("renders a logo", () => {
    const logoImg = mountedHeader.find(
      'img[src="images/wired-brain-coffee-logo.png"]'
    );
    expect(logoImg.length).toBe(1);
  });
});

import { React } from "React";
import { shallow } from "enzyme";
import App from "../App";

describe("App", () => {
  it("renders without crashing", () => {
    const mountedApp = shallow(<App />);
    expect(mountedApp.length).toBe(1);
  });

  it("renders a StoreLocator", () => {
    const mountedApp = shallow(<App />);
    const locator = mountedApp.find("StoreLocator");
    expect(locator.length).toBe(1);
  });
});

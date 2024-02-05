import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });

  it("check that CourseList is not displayed when isLoggedIn is false", () => {
    const component = shallow(<App isLoggedIn={false} />);
    expect(component.contains(<CourseList />)).toBe(false);
  });

  describe("when isLoggedIn is true", () => {
    let component;
    beforeEach(() => {
      component = shallow(<App isLoggedIn={true} />);
    });

    it("does not include Login component", () => {
      expect(component.contains(<Login />)).toBe(false);
    });
    it("includes CourseList component", () => {
      expect(component.contains(<CourseList />)).toBe(true);
    });
  });
});

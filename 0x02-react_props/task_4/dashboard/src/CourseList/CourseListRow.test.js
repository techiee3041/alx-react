import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

describe("CourseListRow", () => {
  it("renders one cell with colspan = 2 when textSecondCell does not exist", () => {
    const props = {
      isHeader: true,
      textFirstCell: "Header 1",
    };
    const wrapper = shallow(<CourseListRow {...props} />);
    const cell = wrapper.find("th");

    expect(cell.props().colSpan).toBe("2");
  });

  it("renders two cells when textSecondCell is present", () => {
    const props = {
      isHeader: true,
      textFirstCell: "Header 1",
      textSecondCell: "Header 2",
    };

    const wrapper = shallow(<CourseListRow {...props} />);
    const cell = wrapper.find("th");

    expect(cell.length).toBe(2);
  });

  it(" renders correctly two td elements within a tr element when isHeader is false", () => {
    const props = {
      isHeader: false,
      textFirstCell: "Header 1",
      textSecondCell: "Header 2",
    };

    const wrapper = shallow(<CourseListRow {...props} />);
    const row = wrapper.find("tr");
    const cell = row.find("td");

    expect(row.exists(), true);
    expect(cell.length).toBe(2);
  });
});

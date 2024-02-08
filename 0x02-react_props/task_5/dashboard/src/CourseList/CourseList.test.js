import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("CourseList", () => {
  it("renders CourseList component without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper).toBeDefined();
  });

  it("renders correctly with an empty array or without the listCourses property", () => {
    const wrapperEmptyArray = shallow(<CourseList listCourses={[]} />);
    expect(wrapperEmptyArray.find(CourseListRow)).toHaveLength(0);

    const wrapperNotPassed = shallow(<CourseList />);
    expect(wrapperNotPassed.find(CourseListRow)).toHaveLength(0);
  });

  it("renders the correct rows when a list of courses is passed", () => {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(listCourses.length + 2); // Header row + number of courses
    expect(wrapper.find(CourseListRow).at(0).props()).toEqual({
      textFirstCell: "Available courses",
      isHeader: true,
    });
    expect(wrapper.find(CourseListRow).at(1).props()).toEqual({
      textFirstCell: "Course name",
      textSecondCell: "Credit",
      isHeader: true,
    });

    listCourses.forEach((course, index) => {
      expect(
        wrapper
          .find(CourseListRow)
          .at(index + 2)
          .props()
      ).toEqual({
        textFirstCell: course.name,
        textSecondCell: course.credit.toString(),
        isHeader: false,
      });
    });
  });
});

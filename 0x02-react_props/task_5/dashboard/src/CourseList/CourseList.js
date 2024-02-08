import React from "react";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import PropTypes from "prop-types";
import "./CourseList.css";

const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList">
      <CourseListRow textFirstCell="Available courses" isHeader={true} />
      <CourseListRow
        textFirstCell="Course name"
        textSecondCell="Credit"
        isHeader={true}
      />
      <tbody>
        {listCourses === 0 ? (
          <CourseListRow
            textFirstCell="No course available yet
"
          />
        ) : (
          listCourses.map((course) => {
            return (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
                isHeader={false}
              />
            );
          })
        )}
      </tbody>
    </table>
  );
};

CourseList.PropTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;

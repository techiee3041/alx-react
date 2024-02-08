import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import "./App.css";

function App({ isLoggedIn }) {
  const listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  const listNotifications = [
    {
      id: 1,
      html: { __html: "Notification 1" },
      type: "type1",
      value: "value1",
    },
    {
      id: 2,
      html: { __html: "Notification 2" },
      type: "type2",
      value: "value2",
    },
    {
      id: 3,
      html: { __html: "Notification 3" },
      type: "type3",
      value: "value3",
    },
  ];

  return (
    <React.Fragment>
      <Notifications listNotifications={listNotifications} />
      <div className="App">
        <Header />
        {isLoggedIn ? <Login /> : <CourseList listCourses={listCourses} />}
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;

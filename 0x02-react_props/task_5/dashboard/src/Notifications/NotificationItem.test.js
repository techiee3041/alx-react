import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notifications", () => {
  it("renders without crashing", () => {
    shallow(<Notifications />);
  });

  it("renders correctly when listNotifications is an empty array or not passed", () => {
    const wrapperEmptyArray = shallow(<Notifications listNotifications={[]} />);
    expect(wrapperEmptyArray.find(NotificationItem)).toHaveLength(0);

    const wrapperNotPassed = shallow(<Notifications />);
    expect(wrapperNotPassed.find(NotificationItem)).toHaveLength(0);
  });

  it("renders list of notifications correctly and with the right number of NotificationItem", () => {
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

    const wrapper = shallow(
      <Notifications listNotifications={listNotifications} />
    );
    expect(wrapper.find(NotificationItem)).toHaveLength(
      listNotifications.length
    );
  });

  it("displays correct messages when listNotifications is empty", () => {
    const wrapperEmptyArray = shallow(<Notifications listNotifications={[]} />);
    expect(wrapperEmptyArray.find("p").text()).toEqual(
      "No new notification for now"
    );

    const wrapperNotPassed = shallow(<Notifications />);
    expect(wrapperNotPassed.find("p").text()).toEqual(
      "No new notification for now"
    );
  });

  it("does not display message when listNotifications is not empty", () => {
    const listNotifications = [
      {
        id: 1,
        html: { __html: "Notification 1" },
        type: "type1",
        value: "value1",
      },
    ];

    const wrapper = shallow(
      <Notifications listNotifications={listNotifications} />
    );
    expect(wrapper.find("p")).toHaveLength(0);
  });
});

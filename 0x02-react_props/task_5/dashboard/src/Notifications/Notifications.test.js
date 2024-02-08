import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notification component tests", () => {
  it("renders Notification component without crashing", () => {
    const notification = shallow(<Notifications />);

    expect(notification).toBeDefined();
  });

  it("renders ul", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("ul")).toBeDefined();
  });

  it("renders three list items", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("li")).toHaveLength(3);
  });

  it("renders correct text", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("p").text()).toBe("Here is the list of notifications");
  });

  it('check that the menu item is being displayed when displayDrawer is false', () => {
    const notification = shallow(<Notifications displayDrawer={false} />);
    expect(notification.contains(<div className="menuItem">Your notifications</div>)).toBe(true);
  });

  it('check that the div.Notifications is not being displayed when displayDrawer is false', () => {
    const notification = shallow(<Notifications displayDrawer={false} />);
    expect(notification.contains(<div className="Notifications" />)).toBe(false);
  });

  it('check that the menu item is being displayed when displayDrawer is true', () => {
    const notification = shallow(<Notifications displayDrawer={true} />);
    expect(notification.contains(<div className="menuItem">Your notifications</div>)).toBe(true);
  });
  
  it('check that the div.Notifications is being displayed when displayDrawer is true', () => {
    const notification = shallow(<Notifications displayDrawer={true} />);
    expect(notification.contains(<div className="Notifications" />)).toBe(true);
  });
});

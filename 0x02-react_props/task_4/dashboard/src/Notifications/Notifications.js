import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

const Notifications = ({ displayDrawer }) => {
  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          <p style={{ display: "inline", marginRight: "80%" }}>
            Here is the list of notifications
          </p>
          <button
            aria-label="Close"
            onClick={console.log("Close button has been clicked")}
          >
            <img style={{ display: "inline" }} src={closeIcon} alt="Close" />
          </button>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem type="urgent" html={getLatestNotification()} />
          </ul>
        </div>
      )}
    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.boolean,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;

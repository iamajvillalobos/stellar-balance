import React from "react";

function Notification({ message, onClick }) {
  function handleCloseAction(event) {
    event.preventDefault();
    onClick();
  }

  return (
    <div className="notification">
      <span className="message">{message}</span>
      <a href="" className="close-button" onClick={handleCloseAction}>
        Close
      </a>
    </div>
  );
}

export default Notification;

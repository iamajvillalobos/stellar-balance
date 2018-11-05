import React from "react";

function Notification({ message, onClick }) {
  function handleCloseAction(event) {
    event.preventDefault();
    onClick();
  }

  return (
    <div className="notification">
      <span className="message">{message}</span>
      <button className="close-button is-link" onClick={handleCloseAction}>
        Close
      </button>
    </div>
  );
}

export default Notification;

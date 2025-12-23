import React from "react";
import "../../styles/HomePage/EmptyState.css";

function EmptyState({ icon, message }) {
  return (
    <div className="empty-state">
      <p className="empty-state-icon">{icon}</p>
      <p>{message}</p>
    </div>
  );
}

export default EmptyState;


import React from "react";
import "../../styles/HomePage/AddRoomForm.css";

function AddRoomForm({ newRoomName, onRoomNameChange, onCreateRoom }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateRoom();
  };

  return (
    <div className="add-room-section">
      <form className="add-room-form" onSubmit={handleSubmit}>
        <div className="add-room-input-group">
          <label htmlFor="room-name">Room Name</label>
          <input
            id="room-name"
            type="text"
            placeholder="Enter room name (e.g., Living Room)"
            value={newRoomName}
            onChange={(e) => onRoomNameChange(e.target.value)}
          />
        </div>
        <button type="submit" className="add-room-button btn-primary">
          Add Room
        </button>
      </form>
    </div>
  );
}

export default AddRoomForm;


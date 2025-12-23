import React from "react";
import "../../styles/Room/RoomHeader.css";

function RoomHeader({ roomName, roomType, onRoomTypeChange }) {
  const roomTypes = ["Select", "Bathroom/WC", "Bedroom", "Kitchen"];

  return (
    <div className="room-header">
      <h2 className="room-title">{roomName}</h2>
      <select
        className="room-type-select"
        value={roomType}
        onChange={(e) => onRoomTypeChange(e.target.value)}
      >
        {roomTypes.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RoomHeader;


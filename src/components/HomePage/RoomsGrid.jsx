import React from "react";
import RoomCard from "../Room/RoomCard";
import "../../styles/HomePage/RoomsGrid.css";

function RoomsGrid({ rooms }) {
  return (
    <div className="rooms-grid">
      {rooms.map((room) => (
        <RoomCard key={room.id} roomName={room.name} />
      ))}
    </div>
  );
}

export default RoomsGrid;


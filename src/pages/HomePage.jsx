import React from "react";
import { useState } from "react";
import RoomCard from "../components/RoomCard";

function HomePage() {
  const [rooms, setRooms] = useState([]);

  const [newRoomName, setNewRoomName] = useState("");

  const createNewRoom = () => {
    if (newRoomName.trim() === "") return;

    const newRoom = {
      id: Date.now(),
      name: newRoomName,
    };

    setRooms([...rooms, newRoom]);

    setNewRoomName("");
  };

  return (
    <div>
      <h2>Welcome to the Smart Home System</h2>

      <div>
        <input
          type="text"
          placeholder="New Room Name"
          value={newRoomName}
          onChange={(e) => setNewRoomName(e.target.value)}
        />

        <button onClick={createNewRoom}>Add Room</button>
      </div>

      <div>
        {rooms.map((room) => (
          <RoomCard key={room.id} roomName={room.name} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;

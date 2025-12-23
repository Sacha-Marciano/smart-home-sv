import React from "react";
import { useState } from "react";
import HomePageHeader from "../components/HomePage/HomePageHeader";
import AddRoomForm from "../components/HomePage/AddRoomForm";
import RoomsGrid from "../components/HomePage/RoomsGrid";
import EmptyState from "../components/HomePage/EmptyState";
import "../styles/HomePage/HomePage.css";

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
    <div className="homepage">
      <div className="container">
        <HomePageHeader />

        <AddRoomForm
          newRoomName={newRoomName}
          onRoomNameChange={setNewRoomName}
          onCreateRoom={createNewRoom}
        />

        {rooms.length > 0 ? (
          <RoomsGrid rooms={rooms} />
        ) : (
          <EmptyState
            icon="🏡"
            message="No rooms yet. Create your first room to get started!"
          />
        )}
      </div>
    </div>
  );
}

export default HomePage;

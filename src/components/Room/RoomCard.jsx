import React from "react";
import { useState } from "react";
import RoomHeader from "./RoomHeader";
import AppliancesSection from "./AppliancesSection";
import "../../styles/Room/RoomCard.css";

function RoomCard({ roomName }) {
  const [appliances, setAppliances] = useState([]);
  const [roomType, setRoomType] = useState("Select");

  const createNewAppliance = () => {
    const appliance = {
      id: Date.now(),
    };

    setAppliances([...appliances, appliance]);
  };

  return (
    <div className="room-card">
      <RoomHeader
        roomName={roomName}
        roomType={roomType}
        onRoomTypeChange={setRoomType}
      />

      <AppliancesSection
        appliances={appliances}
        onAddAppliance={createNewAppliance}
      />
    </div>
  );
}

export default RoomCard;


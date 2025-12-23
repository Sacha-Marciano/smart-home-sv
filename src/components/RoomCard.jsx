import React from "react";
import { useState } from "react";
import ApplianceCard from "./ApplianceCard";

function RoomCard({ roomName }) {
  const roomTypes = ["Select", "Bathroom/WC", "Bedroom", "Kitchen"];

  const [appliances, setAppliances] = useState([]);

  const createNewAppliance = () => {
    const appliance = {
      id: Date.now(),
    };

    setAppliances([...appliances, appliance]);
  };

  return (
    <div>
      <div>
        <h2>{roomName}</h2>

        <select>
          {roomTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <div>
          <h3>Appliances</h3>
          <button onClick={createNewAppliance}>Add Appliance</button>
        </div>

        {appliances.map((appliance) => (
          <ApplianceCard key={appliance.id} />
        ))}
      </div>
    </div>
  );
}

export default RoomCard;

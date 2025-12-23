import React from "react";
import { useState } from "react";
import "../../styles/Appliances/ApplianceCard.css";

function ApplianceCard() {
  const applianceTypes = ["Select", "A/C", "Heater", "Light", "Stereo"];

  const [status, setStatus] = useState(false);
  const [applianceType, setApplianceType] = useState("Select");

  return (
    <div className="appliance-card">
      <select
        className="appliance-select"
        value={applianceType}
        onChange={(e) => setApplianceType(e.target.value)}
      >
        {applianceTypes.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
      <button
        className={`appliance-toggle ${status ? "on" : "off"}`}
        onClick={() => setStatus(!status)}
        disabled={applianceType === "Select"}
        aria-label={`Turn ${status ? "off" : "on"} ${applianceType}`}
      >
        {status ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default ApplianceCard;


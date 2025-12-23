import React from "react";
import { useState } from "react";

import "./../styles/ApplianceCard.css";

function ApplianceCard() {
  const applianceTypes = ["Select", "A/C", "Heater", "Light", "Stereo"];

  const [status, setStatus] = useState(false);

  return (
    <div>
      <select>
        {applianceTypes.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
      <button
        className={status ? "on" : "off"}
        onClick={() => setStatus(!status)}
      >
        On/Off
      </button>
    </div>
  );
}

export default ApplianceCard;

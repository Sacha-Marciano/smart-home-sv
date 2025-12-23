import React from "react";
import ApplianceCard from "../Appliances/ApplianceCard";
import EmptyAppliancesState from "./EmptyAppliancesState";
import "../../styles/Room/AppliancesSection.css";

function AppliancesSection({ appliances, onAddAppliance }) {
  return (
    <div className="appliances-section">
      <div className="appliances-header">
        <h3 className="appliances-title">Appliances</h3>
        <button
          className="add-appliance-button"
          onClick={onAddAppliance}
        >
          + Add Appliance
        </button>
      </div>

      {appliances.length > 0 ? (
        <div className="appliances-list">
          {appliances.map((appliance) => (
            <ApplianceCard key={appliance.id} />
          ))}
        </div>
      ) : (
        <EmptyAppliancesState />
      )}
    </div>
  );
}

export default AppliancesSection;


import { useState } from "react";
import MilestoneLog from "./MilestoneLog";

interface MilestoneCheckBoxProps {
    month: any;
}

const MilestoneCheckbox: React.FC<MilestoneCheckBoxProps> = ({ month }) =>  {
  const [isLogPopupOpen, setLogPopupOpen] = useState(false);

  const handleLogClosePopup = () => {
    setLogPopupOpen(false);
  };

  const [isChecked, setIsChecked] = useState(false);
  const circleStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "solid 3px var(--navy-blue)",
    cursor: "pointer",
    backgroundColor: isChecked ? "var(--light-green)" : "white",
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
        setLogPopupOpen(true);
    }
  };

  return (
    <div className="checkbox-container">
      <div onClick={handleCheckboxChange} style={circleStyle}></div>
      <MilestoneLog
        age={month}
        isPopupOpen={isLogPopupOpen}
        handleClosePopup={handleLogClosePopup}
      />
    </div>
  );
}

export default MilestoneCheckbox;

import { useState } from "react";

interface MilestoneCheckboxProps {
  onCheck: () => void;
}

function MilestoneCheckbox({onCheck}: MilestoneCheckboxProps) {
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
    onCheck();
  };

  return (
    <div className="checkbox-container">
      <div onClick={handleCheckboxChange} style={circleStyle}></div>
    </div>
  );
}

export default MilestoneCheckbox;

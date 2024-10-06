import { useState } from "react";
import MilestoneLog from "./MilestoneLog";

interface MilestoneCheckboxProps {
  onCheck: () => void;
  onNoteSubmit: (note: string) => void;  // New prop to pass note to parent (MilestoneCard)
}

function MilestoneCheckbox({ onCheck, onNoteSubmit }: MilestoneCheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);
  const [isLogPopupOpen, setLogPopupOpen] = useState(false);

  const handleLogClosePopup = () => {
    setLogPopupOpen(false);
  };

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
    if (!isChecked) {
      setLogPopupOpen(true);
    }
  };

  const handleNoteSubmit = (note: string) => {
    onNoteSubmit(note);  // Pass the note to the parent component (MilestoneCard)
    setLogPopupOpen(false);  // Close the popup after submitting the note
  };

  return (
    <div className="checkbox-container">
      <div onClick={handleCheckboxChange} style={circleStyle}></div>
      <MilestoneLog
        isPopupOpen={isLogPopupOpen}
        handleClosePopup={handleLogClosePopup}
        onSubmitNote={handleNoteSubmit}
      />
    </div>
  );
}

export default MilestoneCheckbox;

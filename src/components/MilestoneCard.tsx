import React, { useState, useEffect } from 'react';
import MilestoneCheckbox from './MilestoneCheckbox';

interface MilestoneCardProps {
    className?: string; 
    milestone: string;
}

const MilestoneCard : React.FC<MilestoneCardProps> = ({ className , milestone}) => {
  const [date, setDate] = useState<string>('');
  const[note, setNote] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const updateDate = () => {
    if (isChecked) {
      setDate('');
      setNote('');  // Clear the note if unchecking
    } else {
      const currentDate = new Date().toLocaleDateString();
      setDate(currentDate);
      setNote('');
    }
    setIsChecked(!isChecked);
  };

  const handleNoteSubmit = (submittedNote: string) => {
    setNote('Notes: ' + submittedNote);  // Update the note when submitted from MilestoneLog
  };

  return (
    <div>
      <div className='d-flex align-items-center justify-content-center gap-3'>
        <MilestoneCheckbox onCheck={updateDate} onNoteSubmit={handleNoteSubmit} />
        <h1>Milestone: {milestone}</h1>
      </div>
      <p>Acheived On:<br></br>{date || "Not yet achieved"}</p>
      <p>{note}</p>
    </div>
  );
}

export default MilestoneCard;
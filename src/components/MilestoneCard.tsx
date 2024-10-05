import React, { useState, useEffect } from 'react';
import MilestoneCheckbox from './MilestoneCheckbox';

interface MilestoneCardProps {
    className?: string; 
    milestone: string;
    note: string;
}

const MilestoneCard : React.FC<MilestoneCardProps> = ({ className , milestone, note}) => {
  const [date, setDate] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const updateDate = () => {
    if (isChecked) {
      setDate('');
    } else {
      const currentDate = new Date().toLocaleDateString();
      setDate(currentDate);
    }
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div className='d-flex align-items-center justify-content-center gap-3'>
        <MilestoneCheckbox onCheck={updateDate}/>
        <h1>Milestone: {milestone}</h1>
      </div>
      <p>Acheived On:<br></br>{date || "Not yet achieved"}</p>
      <p>{note}</p>
    </div>
  );
}

export default MilestoneCard;
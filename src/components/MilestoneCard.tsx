import React, { ReactNode } from 'react';
import MilestoneCheckbox from './MilestoneCheckbox';

interface MilestoneCardProps {
    className?: string; 
    milestone: string;
    date: string;
    note: string;
    age: any;
}

const MilestoneCard : React.FC<MilestoneCardProps> = ({ className , milestone, date, note, age }) => {
  return (
    <div>
      <div className='d-flex align-items-center justify-content-center gap-3'>
        <MilestoneCheckbox 
          month={age}
        />
        <h1>Milestone: {milestone}</h1>
      </div>
      <p>Acheived On:<br></br>{date}</p>
      <p>{note}</p>
    </div>
  );
}

export default MilestoneCard;
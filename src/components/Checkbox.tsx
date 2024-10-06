import { useState } from 'react';

interface CheckboxProps {
  isChecked: boolean,
}

const Checkbox : React.FC<CheckboxProps> = ({ isChecked }) =>{
  const circleStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%', 
    border: 'solid 3px white',
    backgroundColor: isChecked ? 'var(--baby-pink)' : 'var(--teal)'
  };

  return (
    <div className="checkbox-container">
      <div style={circleStyle}></div>
    </div>
  );
}

export default Checkbox;
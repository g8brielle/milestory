import { useState } from 'react';

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);
  const circleStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%', 
    border: 'solid 3px white',
    cursor: 'pointer',
    backgroundColor: isChecked ? 'var(--baby-pink)' : 'var(--teal)'
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); 
  };

  return (
    <div className="checkbox-container">
      <div onClick={handleCheckboxChange} style={circleStyle}></div>
    </div>
  );
}

export default Checkbox;
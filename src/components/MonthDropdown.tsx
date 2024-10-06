import React, { useState } from 'react';

const MonthDropdown = () => {
    // Step 2: Initialize state for the selected option
    const [selectedOption, setSelectedOption] = useState('');

    // Step 3: Handle option selection
    const handleOptionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedOption(event.target.value); // Update state with the selected option
    };

    return (
        <div>
            <select value={selectedOption} onChange={handleOptionChange}>
                <option value="" disabled>Select a month</option>
                <option value="January">1 Month</option>
                <option value="February">2 Months</option>
                <option value="March">3 Months</option>
                <option value="April">4 Months</option>
                <option value="May">5 Months</option>
                <option value="June">6 Months</option>
                <option value="July">7 Months</option>
                <option value="August">8 Months</option>
                <option value="September">9 Months</option>
                <option value="October">10 Months</option>
                <option value="November">11 Months</option>
                <option value="December">12 Months</option>
            </select>
        </div>
    );
};

export default MonthDropdown;
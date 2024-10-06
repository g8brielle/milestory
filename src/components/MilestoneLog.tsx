import React, { useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import MonthDropdown from "./MonthDropdown";

interface MilestoneLogProps {
  age: any;
  isPopupOpen: boolean;
  handleClosePopup: () => void;
}

const MilestoneLog: React.FC<MilestoneLogProps> = ({
  age,
  isPopupOpen,
  handleClosePopup,
}) => {
  const [milestoneInputValue, setMilestoneInputValue] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleMilestoneInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setMilestoneInputValue(event.target.value);
  };

  const handleDateChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDate(event.target.value);
  };

  const handleNotesChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setNotes(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const handlePopupCloseAndClear = () => {
    setMilestoneInputValue("");
    setDate("");
    setNotes("");
    handleClosePopup();
  };

  return (
    <div>
      <Modal show={isPopupOpen} onHide={handlePopupCloseAndClear}>
        <div className="popup-container">
          <Modal.Body>
            <button className="close-button" onClick={handlePopupCloseAndClear}>
              &times;
            </button>
            <div className="log-popup">
              <h1>Log a Milestory</h1>
              <div className="d-flex justify-content-center align-items-center gap-4 m-3">
                <p>age: {age} Months</p>
              </div>
              <div className="d-flex justify-content-center align-items-center gap-4 m-3">
                <p>milestone:</p>
                <input
                  type="text"
                  value={milestoneInputValue}
                  onChange={handleMilestoneInputChange}
                  placeholder="Enter text here"
                  style={{ width: "100%", height: "40px" }}
                />
              </div>
              <div className="d-flex justify-content-center align-items-center gap-4 m-3">
                <p>date achieved:</p>
                <input
                  type="date"
                  value={date}
                  onChange={handleDateChange}
                  placeholder="Enter text here"
                  style={{ width: "100%", height: "40px" }}
                />
              </div>
              <div className="d-flex justify-content-center align-items-center gap-4 m-3">
                <p>notes:</p>
                <input
                  type="text"
                  value={notes}
                  onChange={handleNotesChange}
                  placeholder="Enter text here"
                  style={{ width: "100%", height: "40px" }}
                />
              </div>
              <div className="log-submit mt-4">
                <button type="submit">submit</button>
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default MilestoneLog;

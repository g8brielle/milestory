import { useState } from "react";
import "../styles.css";
import MilestoneLog from "./MilestoneLog";
import { Modal } from "react-bootstrap";

const NavBar = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <nav>
        <div className="navbar-container">
          <div className="row align-items-center w-100">
            <div className="col-2">
              <div className="navbar-logo">
                <a href="/">Milestory</a>
              </div>
            </div>
            <div className="col-10">
              <div className="navbar-links">
                <a onClick={handleOpenPopup}>
                  <p>view reminders</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Modal show={isPopupOpen} onHide={handleClosePopup}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment Reminders</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>
              <strong>2-3 days after birth: </strong>First well baby checkup
            </li>
            <li>
              <strong>1 month: </strong> Well baby checkup
            </li>
            <li>
              <strong>2 months:</strong> Well baby checkup
              <br />
              <span>Recommended immunizations:</span>
              <ul>
                <li>Pneumococcal (PCV)</li>
                <li>Rotavirus (RV), oral vaccine (mouth drops)</li>
                <li>Haemophilus influenzae type b (Hib)</li>
                <li>Polio (IPV)</li>
                <li>Diphtheria/Tetanus/Pertussis (DTaP)</li>
                <li>
                  Second dose of hepatitis B (if baby didn’t get it at the
                  one-month appointment)
                </li>
              </ul>
            </li>
            <li>
              <strong>4 months:</strong> Well baby checkup
              <br />
              <span>Recommended second dose of 2 month immunizations</span>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClosePopup}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NavBar;

import { useState } from 'react';
import '../styles.css';
import MilestoneLog from './MilestoneLog';
import { Modal } from 'react-bootstrap';

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
    
          {/* Modal for Reminders */}
          <Modal show={isPopupOpen} onHide={handleClosePopup}>
            <Modal.Header closeButton>
              <Modal.Title>Appointment Reminders</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ul>
                <li><strong>2 months:</strong> First vaccination</li>
                <li><strong>4 months:</strong> Second vaccination</li>
                <li><strong>6 months:</strong> Health check-up</li>
                {/* Add more reminders as needed */}
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
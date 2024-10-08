import { useState } from "react";
import "../styles.css";
import ProfilePopup from "./ProfilePopup";
import { Modal } from "react-bootstrap";

interface NavBarProps {
    onAgeSubmit: (age: string) => void;
    onNamesSubmit: (name: string, babyName:string) => void;
}

const NavBar : React.FC<NavBarProps> = ({ onAgeSubmit, onNamesSubmit }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isReminderPopupOpen, setReminderPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleOpenReminderPopup = () => {
    setReminderPopupOpen(true);
  }

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const handleCloseReminderPopup = () => {
    setReminderPopupOpen(false);
  }

  const handleAgeSubmit = (age: string) => {
    onAgeSubmit(age);  // Pass the age to the parent component (BannerInfo)
    setPopupOpen(false);  // Close the popup after submitting the age
  };

  const handleNamesSubmit = (name: string, babyName: string) => {
    onNamesSubmit(name, babyName);  // Pass the names to the parent component (BannerInfo)
    setPopupOpen(false);  // Close the popup after submitting the names
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
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 72 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M52 53V49C52 46.8783 51.1571 44.8434 49.6569 43.3431C48.1566 41.8429 46.1217 41 44 41H28C25.8783 41 23.8434 41.8429 22.3431 43.3431C20.8429 44.8434 20 46.8783 20 49V53M44 25C44 29.4183 40.4183 33 36 33C31.5817 33 28 29.4183 28 25C28 20.5817 31.5817 17 36 17C40.4183 17 44 20.5817 44 25Z"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M36 68C54.7174 68 70 53.2848 70 35C70 16.7152 54.7174 2 36 2C17.2826 2 2 16.7152 2 35C2 53.2848 17.2826 68 36 68Z"
                      stroke-width="4"
                    />
                  </svg>
                </a>
                <p onClick={handleOpenReminderPopup}>view reminders</p>
              </div>
            </div>
            <ProfilePopup isPopupOpen={isPopupOpen} handleClosePopup={handleClosePopup} onAgeSubmit={handleAgeSubmit} onNamesSubmit={handleNamesSubmit}/>
          </div>
        </div>
      </nav>

      <Modal show={isReminderPopupOpen} onHide={handleCloseReminderPopup}>
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
      </Modal>
    </div>
  );
};

export default NavBar;

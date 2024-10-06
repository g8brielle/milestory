import { useState } from 'react';
import '../styles.css';
import MilestoneLog from './MilestoneLog';

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
            <div className='navbar-container'>
                <div className='row align-items-center w-100'>
                    <div className='col-2'>
                        <div className="navbar-logo">
                            <a href="/">Milestory</a>
                        </div>
                    </div>
                    <div className='col-10'>
                        <div className="navbar-links">
                            <a><p>view reminders</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  );
};

export default NavBar;
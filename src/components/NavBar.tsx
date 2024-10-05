import '../styles.css';

const NavBar = () => {
  return (
    <nav>
        <div className='navbar-container'>
            <div className='row align-items-center w-100'>
                <div className='col-2'>
                    <div className="navbar-logo">
                        <a href="/">Milestory</a>
                    </div>
                </div>
                <div className='col-10'>
                    <ul className="navbar-links">
                        <li><a href="#home">log a milestory</a></li>
                        <li><a href="#about">view reminders</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default NavBar;
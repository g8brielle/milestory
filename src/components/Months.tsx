import { useNavigate } from 'react-router-dom';
import Checkbox from './Checkbox';
import '../styles.css';

const Months = () => {
    const navigate = useNavigate();

    const handleLearnMoreClick = () => {
        navigate('/milestone-page');
    };

    const handleMonthClick = (month: any) => {
        navigate(`/month/${month}`);
    };

    const months = [1,2,3,4,5,6,7,8,9,10,11,12];

    return (
        <div className='months-section pb-5'>
            <div className='container pt-4 text-center'>
                {months.map((month) => (
                    <div className='month-container' key={month}> 
                        <Checkbox />
                        <div className='month-box' onClick={() => handleMonthClick(month)}>
                            Month {month}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Months;
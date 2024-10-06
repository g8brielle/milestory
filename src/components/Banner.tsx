import { useState } from 'react';
import '../styles.css';
import BannerInfo from './BannerInfo';
import SkyScatter from './SkyScatter';

interface BannerProps {
  onMonthsSubmit: (months: string) => void;
}

const Banner : React.FC<BannerProps> = ({ onMonthsSubmit }) => {
  const [months, setMonths] = useState<string>("");
  const handleMonthsSubmit = (ageSubmitted: string) => {
    setMonths(ageSubmitted);
    onMonthsSubmit(months);
  };

  return (
    <div className='banner'>
        <div className='z-2 position-absolute start-0 w-100 h-100'><BannerInfo onMonthsSubmit={handleMonthsSubmit} /></div>
        <div className='banner-bg z-0 w-100 h-100'><SkyScatter /></div>
    </div>
  );
}

export default Banner;
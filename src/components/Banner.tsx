import '../styles.css';
import BannerInfo from './BannerInfo';
import SkyScatter from './SkyScatter';
import NavBar from './NavBar';

const Banner = () => {
  return (
    <div className='banner'>
        <div className='z-3 position-absolute start-0 w-100 h-100'><NavBar /></div>
        <div className='z-2 position-absolute start-0 w-100 h-100'><BannerInfo /></div>
        <div className='banner-bg z-0 w-100 h-100'><SkyScatter /></div>
    </div>
  );
}

export default Banner;
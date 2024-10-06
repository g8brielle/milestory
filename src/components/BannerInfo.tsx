import { useState } from "react";
import "../styles.css";
import NavBar from "./NavBar";

interface BannerInfoProps {
    onMonthsSubmit: (months: string) => void;
}

const BannerInfo : React.FC<BannerInfoProps> = ({ onMonthsSubmit }) => {
  const [age, setAge] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [babyName, setBabyName] = useState<string>("");

  const handleAgeSubmit = (ageSubmitted: string) => {
    setAge(ageSubmitted);
  };

  const handleNamesSubmit = (nameSubmitted: string, babyNameSubmitted: string) => {
    setName(nameSubmitted);
    setBabyName(babyNameSubmitted);
  };

  const handleMonthsSubmit = (ageSubmitted: string) => {
    onMonthsSubmit(ageSubmitted);
  };

  let splittedAge = age.split('/');
  let months = splittedAge[0] || '0';
  let weeks = splittedAge[1] || '0';
  let days = splittedAge[2] || '0';
  handleMonthsSubmit(months);

  return (
    <div className="container text-center">
      <div className="nav-bar z-3 position-absolute w-100 h-100">
        <NavBar onAgeSubmit={handleAgeSubmit} onNamesSubmit={handleNamesSubmit}/>
      </div>
      <div className="banner-info row align-items-center pt-4 mt-4">
        <div className="info">
          <div className="welcome-tag">
            <h1 className="welcome">Welcome {name}</h1>
            <p className="tag">today {babyName} is {months} months, {weeks} weeks, {days} days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerInfo;

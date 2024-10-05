import { useNavigate, useParams } from "react-router-dom";
import MilestoneCard from "./MilestoneCard";

const MilestonePage = () => {
  const { month } = useParams();
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate("/");
  };

  const renderMilestoneContent = () => {
    switch (month) {
      case "1":
        return (
          <div className="milestone-page text-center d-flex justify-content-center align-items-center">
            <div className="milestone-page-container">
              <a href="" onClick={handleLearnMoreClick}>
                <svg
                  className="arrow-left"
                  width="32"
                  height="32"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38 24H10M10 24L24 38M10 24L24 10"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <h1 className="mb-3">Month {month}</h1>
              <div className="milestone-page-divider"></div>
              <div className="milestones text-center py-5">
                <div className='container'>
                    <div className='row-container'>
                        <div className="milestone-card">
                            <MilestoneCard
                                milestone="Head Movement"
                                date="9/25/2024"
                                note="She lifted her head during tummy time."
                            />
                        </div>
                        <div className="milestone-card">
                            <MilestoneCard
                                milestone="First Smile"
                                date="10/14/2024"
                                note="She smiled for the first time."
                            />
                        </div>
                        <div className="milestone-card">
                            <MilestoneCard
                                milestone="First Smile"
                                date="10/14/2024"
                                note="She smiled for the first time."
                            />
                        </div>
                        <div className="milestone-card">
                            <MilestoneCard
                                milestone="First Smile"
                                date="10/14/2024"
                                note="She smiled for the first time."
                            />
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "2":
        return (
            <div className="milestone-page text-center d-flex justify-content-center align-items-center">
            <div className="milestone-page-container">
              <a href="" onClick={handleLearnMoreClick}>
                <svg
                  className="arrow-left"
                  width="32"
                  height="32"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38 24H10M10 24L24 38M10 24L24 10"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <h1 className="mb-3">Month {month}</h1>
              <div className="milestone-page-divider"></div>
              <div className="milestones">
                <div className="milestone-card">
                  <MilestoneCard
                    milestone="Grabbed Mommy's Finger"
                    date="10/30/2024"
                    note="Gabby held mommy's pinky for the first time!"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case "3":
        return (
            <div className="milestone-page text-center d-flex justify-content-center align-items-center">
            <div className="milestone-page-container">
              <a href="" onClick={handleLearnMoreClick}>
                <svg
                  className="arrow-left"
                  width="32"
                  height="32"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38 24H10M10 24L24 38M10 24L24 10"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <h1 className="mb-3">Month {month}</h1>
              <div className="milestone-page-divider"></div>
              <div className="milestones">
                <div className="milestone-card">
                  <MilestoneCard
                    milestone="Grabbed Mommy's Finger"
                    date="10/30/2024"
                    note="Gabby held mommy's pinky for the first time!"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
            <div className="milestone-page text-center d-flex justify-content-center align-items-center">
            <div className="milestone-page-container">
              <a href="" onClick={handleLearnMoreClick}>
                <svg
                  className="arrow-left"
                  width="32"
                  height="32"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38 24H10M10 24L24 38M10 24L24 10"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              
              <h1>No milestones available for this month.</h1>
            </div>
          </div>
        );
    }
  };

  return (
    <div>
        {renderMilestoneContent()}
    </div>
  );
};

export default MilestonePage;

import React from "react";
import "./index.css";
import MessageBlock from "../../molecules/MessageText";
import Button from "../../atoms/Button";
import bgImage from "../../../assets/background-celebration.jpg";

const FundingCard: React.FC = () => {
  return (
    <div
      className="funding-card"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="funding-overlay">
        <MessageBlock />
        <Button text="Learn More" />
      </div>
    </div>
  );
};

export default FundingCard;

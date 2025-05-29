import React from "react";
import "./index.css";

const MessageBlock: React.FC = () => {
  return (
    <div className="message-block">
      <h1>Congratulations you are ready to start!</h1>
      <p>
        You are approved for funding. We are ready to advance you upto{" "}
        <strong>$8.8M</strong>
      </p>
    </div>
  );
};

export default MessageBlock;

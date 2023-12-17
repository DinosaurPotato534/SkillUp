import React, { useState } from "react";
import "../../Styles/Mentors.css";

function MentorsComponent() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="toggleContainer">
        <div
          className={`toggleBackground ${isToggled ? "toggled" : ""}`}
          onClick={handleToggle}
        >
          <span className="leftText">Mentors</span>
          <span className="rightText">Find Mentors</span>
          <div className="toggleAccentContainer">
            <div className={`toggleAccent ${isToggled ? "toggled" : ""}`} />
          </div>
        </div>
        <img src="/profile.png" className="profileImage" />
      </div>
    </div>
  );
}

export default MentorsComponent;

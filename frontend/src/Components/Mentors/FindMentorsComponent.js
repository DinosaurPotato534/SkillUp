import * as React from "react";
import "../../Styles/Mentors.css";

function MentorsComponent() {
  const [isToggled, setIsToggled] = React.useState(false);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
    
  };

  return (
    <div className="container">
      <div className="header">
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
          {/* <div className="profileImage"><img src="/profile.png"/></div> */}
        </div>
      </div>
      <div className="mentorsContainer">
          <div className="mentorInfo">
            <h2 className="mentorName">Mentor Name</h2><span className="mentorNumbers">50 members</span>
            <p className="mentorDescription">
              Software Engineer at Meta</p>
            <p className="mentorDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        <div className="mentorButtonContainer">
          <button className="mentorButton">Request Mentoring</button>
      </div>
    </div>
    <div className="mentorsContainer">
          <div className="mentorInfo">
            <h2 className="mentorName">Mentor Name</h2><span className="mentorTitle">50 members</span>
            <p className="mentorDescription">
              Software Engineer at Meta</p>
            <p className="mentorDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        <div className="mentorButtonContainer">
          <button className="mentorButton">Request Mentoring</button>
      </div>
    </div>
    <div className="mentorsContainer">
          <div className="mentorInfo">
            <h2 className="mentorName">Mentor Name</h2><span className="mentorTitle">50 members</span>
            <p className="mentorDescription">
              Software Engineer at Meta</p>
            <p className="mentorDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        <div className="mentorButtonContainer">
          <button className="mentorButton">Request Mentoring</button>
      </div>
    </div>

    </div>
  
  );
}

export default MentorsComponent;

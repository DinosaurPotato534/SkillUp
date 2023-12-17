import * as React from "react";
import "../../Styles/Mentors.css";

function AcceptMentors() {
  const [isToggled, setIsToggled] = React.useState(false);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <>
      <div className="header"></div>
      <div className="mentorsContainer">
        <div className="mentorInfo">
          <h2 className="mentorName">Mentor Name</h2>
          <span className="mentorNumbers">50 members</span>
          <p className="mentorDescription">Software Engineer at Meta</p>
          <p className="mentorDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mentorButtonContainer row-btn">
          <button className="btn-collection warning col-btn">
            Cancel Meeting
          </button>
          <button className="btn-collection danger col-btn">
            Remove Mentor
          </button>
        </div>
      </div>
      <div className="mentorsContainer">
        <div className="mentorInfo">
          <h2 className="mentorName">Mentor Name</h2>
          <span className="mentorTitle">50 members</span>
          <p className="mentorDescription">Software Engineer at Meta</p>
          <p className="mentorDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mentorButtonContainer row-btn">
          <button className="btn-collection warning col-btn">
            Cancel Meeting
          </button>
          <button className="btn-collection danger col-btn">
            Remove Mentor
          </button>
        </div>
      </div>
      <div className="mentorsContainer">
        <div className="mentorInfo">
          <h2 className="mentorName">Mentor Name</h2>
          <span className="mentorTitle">50 members</span>
          <p className="mentorDescription">Software Engineer at Meta</p>
          <p className="mentorDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mentorButtonContainer row-btn">
          {/* <button className="btn-collection col-btn">Request Mentor</button> */}
          <button className="btn-collection warning col-btn">
            Cancel Meeting
          </button>
          <button className="btn-collection danger col-btn">
            Remove Mentor
          </button>
        </div>
      </div>
    </>
  );
}

export default AcceptMentors;

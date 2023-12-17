import "../Styles/Mentors.css";
import MentorsComponent from "../Components/Mentors/FindMentorsComponent";
import AcceptMentors from "../Components/Mentors/AcceptMentors";
import * as React from 'react';

function Mentors() {
  return (
    <div className="container">
      {/* <MentorsComponent /> */}
      <AcceptMentors/>
    </div>
  );
}

export default Mentors;


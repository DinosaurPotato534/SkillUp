import "../Styles/Mentors.css";
import MentorsComponent from "../Components/Mentors/FindMentorsComponent";
import AcceptMentors from "../Components/Mentors/AcceptMentors";
import * as React from 'react';
import AcceptStudents from "../Components/Mentors/AcceptStudents";
import Students from "../Components/Mentors/Students";
import MeetingPrompt from "../Components/Mentors/MeetingPrompt";
import Header from "../Components/Mentors/Header";


function Mentors() {
  return (
    <div className="container">
      {/* <MentorsComponent /> */}
      {/* <AcceptMentors/> */}
      {/* <AcceptStudents/> */}
      {/* <Students /> */}
      <Header />
      <MeetingPrompt />
    </div>
  );
}

export default Mentors;


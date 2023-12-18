import { Routes, Route, Outlet } from "react-router-dom";
import AcceptMentors from "../Components/Mentors/AcceptMentors";
import AcceptStudents from "../Components/Mentors/AcceptStudents";
import Students from "../Components/Mentors/Students";
import MeetingPrompt from "../Components/Mentors/MeetingPrompt";
import Header from "../Components/Mentors/Header";
import FindMentorsComponent from "../Components/Mentors/FindMentorsComponent";

function Mentors() {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<FindMentorsComponent />} />
        <Route path="acceptMentors" element={<AcceptMentors />} />
        <Route path="acceptStudents" element={<AcceptStudents />} />
        <Route path="students" element={<Students />} />
        <Route path="header" element={<Header />} />
        <Route path="meetingPrompt" element={<MeetingPrompt />} />
      </Route>
    </Routes>
  );
}

export default Mentors;

import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Hero from './components/Hero';
import { Routes, Route } from "react-router-dom";
import MentorsPage from './Pages/MentorsPage';
import AcceptMentors from "./Components/Mentors/AcceptMentors";
import AcceptStudents from "./Components/Mentors/AcceptStudents";
import Students from "./Components/Mentors/Students";
import MeetingPrompt from "./Components/Mentors/MeetingPrompt";
import Header from "./Components/Mentors/Header";
import FindMentorsComponent from "./Components/Mentors/FindMentorsComponent";


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <Hero/> } />
      <Route path="/signIn" element={ <SignIn/> } />
      <Route path="/signUp" element={ <SignUp/> } />
      <MentorsPage />
    </Routes>
    </div>
  );
}

export default App;

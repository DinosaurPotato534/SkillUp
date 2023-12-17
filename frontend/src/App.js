import './App.css';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import Hero from './Components/Hero';
import { Routes, Route } from "react-router-dom";
import MentorsPage from './Pages/MentorsPage.tsx';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <Hero/> } />
      <Route path="/signIn" element={ <SignIn/> } />
      <Route path="/signUp" element={ <SignUp/> } />
      <Route path="/mentors" element={ <MentorsPage /> } />
      
    </Routes>
    </div>
  );
}

export default App;

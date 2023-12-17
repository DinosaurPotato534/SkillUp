import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Hero from './components/Hero';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <Hero/> } />
      <Route path="/signIn" element={ <SignIn/> } />
      <Route path="/signUp" element={ <SignUp/> } />
    </Routes>
    </div>
  );
}

export default App;

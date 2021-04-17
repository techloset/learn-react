import logo from './logo.svg';
import './App.css';
import LandingPage from "./modules/landingPage";
import {useState} from "react"

// import "bootstrap/css/bootstrap.min.css";
// import "materialize/css/materialze.min.css";
// if import does not contain relative path syntax it will auto find the folder from node modules
function App() {
  return (
    <div className="App">
     <LandingPage />
    </div>
  );
}

export default App;

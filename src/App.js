import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;

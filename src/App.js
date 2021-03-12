import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomePage from "./Pages/HomePage/HomePage";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const showHideSidebar = (command) => {
    if (command === "show") setShowSidebar(true);
    else {
      document.getElementsByClassName("Sidebar")[0].classList.add("hide");
      setTimeout(() => {
        setShowSidebar(false);
      }, 500);
    }
  };

  return (
    <div className="App">
      <Navbar sidebar={showHideSidebar} />
      <Sidebar show={showSidebar} />
      <HomePage />
    </div>
  );
};

export default App;

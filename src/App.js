import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomePage from "./Pages/HomePage/HomePage";
import { Switch, Route } from "react-router-dom";
import BlogsPage from "./Pages/BlogsPage/BlogsPage";
import LoginPage from "./Pages/LoginPage/LoginPage";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const showHideSidebar = (command) => {
    if (command === "show") setShowSidebar(true);
    else {
      document.getElementsByClassName("Sidebar")[0].classList.add("hide");
      setTimeout(() => {
        setShowSidebar(false);
      }, 900);
    }
  };

  return (
    <div className="App">
      <Navbar showStatus={showSidebar} sidebar={showHideSidebar} />
      <Sidebar show={showSidebar} close={showHideSidebar} />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/blogs" component={BlogsPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
};

export default App;

import React from "react";
import Router from "./components/Router";
import Header from "./components/Header/Header";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Router />
    </div>
  );
};

export default App;

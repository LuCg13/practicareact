import React, { useState } from "react";
import Index from "../src/Components/Login/index";
import Dashboard from "../src/Components/Dashboard/dashboard";
import "./App.css";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    setAuthenticated(true);
  };

  return <div className="container">{!authenticated ? <Index onLogin={handleLogin} /> : <Dashboard />}</div>;
}

export default App;

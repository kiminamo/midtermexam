import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState("10 Things That Require Zero Talent");
  const fullName = "Kimberly G. Manaloto - IT3A";

  const handleKeyPress = (key) => {
    const items = {
      1: "Being On Time",
      2: "Making An Effort",
      3: "Being High Energy",
      4: "Having A Positive Attitude",
      5: "Being Passionate",
      6: "Using Good Body Language",
      7: "Being Coachable",
      8: "Doing A Little Extra",
      9: "Being Prepared",
      0: "Having A Strong Work Ethic",
    };

    if (key === "RESET") {
      setDisplay("10 Things That Require Zero Talent");
    } else if (key === "NAME") {
      setDisplay(fullName.toUpperCase());
    } else if (items[key]) {
      setDisplay(items[key]);
    }
  };

  return (
    <div className="app">
      <h1 className='head'>{fullName}</h1>
      <div className="display">{display}</div>
      <div className="buttons">
        {Object.keys({ 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 0: null }).map(key => (
          <button key={key} onClick={() => handleKeyPress(key)}>{key}</button>
        ))}
        <button onClick={() => handleKeyPress("RESET")}>RESET</button>
        <button onClick={() => handleKeyPress("NAME")}>NAME</button>
      </div>
    </div>
  );
}

export default App;

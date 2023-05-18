import React, { useState } from "react";
import "./App.scss";

function App() {
  const [hp, setHp] = useState(100);
  const [inv, setInv] = useState({
    knife:false,
    flashlight: false
  });


  const handleChange = (event) => {
    let value = parseInt(event.target.value);
    switch (value) {
      case 1:
        setInv(prevInv => ({
          ...prevInv,
          knife: true
        }))
        break
      default:
        console.log("Error")
        break
    }
  };

  return (
    <div className="app">
      {inv.knife && "You have knife"}
      Health: {hp}
      <button onClick={handleChange} value={1}>
        Pick up knife
      </button>
    </div>
  );
}

export default App;

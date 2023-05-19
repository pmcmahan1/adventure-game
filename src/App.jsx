import React, { useState } from "react";
import "./App.scss";
import heart from "./assets/heart.png";
import backpack from "./assets/backpack.png";
import knife from "./assets/knife.png";
import flashlight from "./assets/flashlight.png";

function App() {
  const [hp, setHp] = useState(100);
  const [inv, setInv] = useState({
    knife: false,
    flashlight: false,
  });

  const handleChange = (event) => {
    let value = parseInt(event.target.value);
    switch (value) {
      case 1:
        setInv((prevInv) => ({
          ...prevInv,
          knife: !prevInv.knife,
        }));
        break;
      case 2:
        setInv((prevInv) => ({
          ...prevInv,
          flashlight: !prevInv.flashlight,
        }));
        break;
      default:
        console.log("Error");
        break;
    }
  };

  return (
    <div className="app">
      <div className="status">
        <div className="health">
          <img src={heart} alt="" />
          {hp}
        </div>
        <div className="inventory">
          <img src={backpack} alt="" />
          {inv.knife && <img src={knife} alt="" className="inventory-item" />}
          {inv.flashlight && (
            <img src={flashlight} alt="" className="inventory-item" />
          )}
        </div>
      </div>
      <button onClick={handleChange} value={1}>
        knife
      </button>
      <button onClick={handleChange} value={2}>
        flashlight
      </button>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Choices from "./Choices";
import "./App.scss";
import heart from "./assets/heart.png";
import backpack from "./assets/backpack.png";
import knife from "./assets/knife.png";
import flashlight from "./assets/flashlight.png";
import hallway from './assets/hallway.jpg'

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
      <div className="image-display">
        <img src={hallway} alt="" className="story-image" />
      </div>
      <div className="text-display">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt possimus sunt, autem quod deserunt quaerat, culpa sed fugit omnis, exercitationem veritatis itaque aliquid ab quo laborum recusandae excepturi eligendi quae!
      </div>
      <Choices />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.scss";
import heart from "./assets/heart.png";
import backpack from "./assets/backpack.png";
import knife from "./assets/knife.png";
import flashlight from "./assets/flashlight.png";
import hallway from "./assets/hallway.jpg";
import livingroom from "./assets/livingroom.jpg";

function App() {
  const [hp, setHp] = useState(100);
  const [inv, setInv] = useState({
    knife: false,
    flashlight: false,
  });
  const [displayText, setDisplayText] = useState(
    "You awaken to find yourself in a dimly lit hallway."
  );
  const [choiceOne, setChoiceOne] = useState(
    "Try to open the door to your left."
  );
  const [choiceTwo, setChoiceTwo] = useState("Look outside the window.");
  const [choiceThree, setChoiceThree] = useState("Walk through the doorway.");
  const [choiceFour, setChoiceFour] = useState("");
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(2);
  const [value3, setValue3] = useState(3);
  const [value4, setValue4] = useState(99);
  const [background, setBackground] = useState(hallway);

  const handleChange = (event) => {
    let value = parseInt(event.target.value);
    switch (value) {
      case 1:
        setDisplayText("You attempt to open the door, but the door is locked.");
        setValue1(99);
        break;
      case 2:
        setDisplayText(
          "You look out the window and see a large metal fence surrounding the building."
        );
        setValue2(99);
        break;
      case 3:
        setDisplayText(
          "You walk through the doorway and enter a large and dark living room. In the corner of the room is a wooden cupboard."
        );
        setValue1(4);
        setValue2(5);
        setValue3(6);
        setValue4(7);
        setChoiceOne("Search the cupboard.");
        setChoiceTwo("Try to find a light switch.");
        setChoiceThree("Waste no time and continue through the building");
        setChoiceFour("Turn around.");
        setBackground(livingroom);
        break;
      case 4:
        setDisplayText(
          "You search the cupboard and find a knife and stow it away in your bag."
        );
        setValue1(99);
        setInv((prevInv) => ({
          ...prevInv,
          knife: !prevInv.knife,
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
        <img src={background} alt="" className="story-image" />
      </div>
      <div className="text-display">{displayText}</div>
      <div className="choice-container">
        {choiceOne && (
          <button
            onClick={handleChange}
            value={value1}
            className={value1 == 99 ? "choice-item line" : "choice-item"}
          >
            {choiceOne}
          </button>
        )}
        {choiceTwo && (
          <button
            onClick={handleChange}
            value={value2}
            className={value2 == 99 ? "choice-item line" : "choice-item"}
          >
            {choiceTwo}
          </button>
        )}
        {choiceThree && (
          <button
            onClick={handleChange}
            value={value3}
            className={value3 == 99 ? "choice-item line" : "choice-item"}
          >
            {choiceThree}
          </button>
        )}
        {choiceFour && (
          <button
            onClick={handleChange}
            value={value4}
            className={value4 == 99 ? "choice-item line" : "choice-item"}
          >
            {choiceFour}
          </button>
        )}
      </div>
    </div>
  );
}

export default App;

// setInv((prevInv) => ({
//   ...prevInv,
//   flashlight: !prevInv.flashlight,
// }));

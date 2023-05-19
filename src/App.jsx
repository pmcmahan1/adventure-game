import React, { useState } from "react";
import "./App.scss";
import heart from "./assets/heart.png";
import backpack from "./assets/backpack.png";
import knife from "./assets/knife.png";
import flashlight from "./assets/flashlight.png";
import key from "./assets/key.png"
import hallway from "./assets/hallway.jpg";
import livingroom from "./assets/livingroom.jpg";
import frontdoor from './assets/frontdoor.jpg'

function App() {
  const [hp, setHp] = useState(100);
  const [inv, setInv] = useState({
    knife: false,
    flashlight: false,
    key: false,
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
  const [isHurt, setIsHurt] = useState(false)

  const handleChange = (event) => {
    let value = parseInt(event.target.value);
    switch (value) {
      case 1:
        setDisplayText("You attempt to open the door, but the door is jammed from the other side.");
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
        setChoiceThree("Waste no time and continue through the building.");
        setChoiceFour("Do nothing.");
        setBackground(livingroom);
        break;
      case 4:
        setDisplayText(
          "You search the cupboard and find a key and stow it away in your pocket."
        );
        setValue1(99);
        setInv((prevInv) => ({
          ...prevInv,
          key: !prevInv.key,
        }));
        setChoiceThree("Continue through the building.");
        break;
      case 5:
        setDisplayText("You try to find a light switch, however you step on a broken piece of glass doing so.")
        setHp(prevHp => prevHp - 10)
        setIsHurt(true)
        setTimeout(() => {
          setIsHurt(false);
        }, 2500)
        setValue2(99)
        setChoiceThree("Continue through the building.");
        break;
      case 6:
        setBackground(frontdoor)
        setDisplayText("You walk through the next doorway, and find what seems to be the entrance to the building.")
        setValue1(8)
        setValue2(9)
        setValue3(10)
        setValue4(11)
        setChoiceOne("Try to open the door.")
        setChoiceTwo("")
        setChoiceThree("Study your surroundings.")
        setChoiceFour("Turn around.")
        break;
      case 7:
        setDisplayText("You stand in the middle of the room, pondering about how you came to be in this place.")
        setValue4(99)
        break;
      case 8:
        setDisplayText("You pull on the door but it is locked.")
        setValue1(99)
        if (inv.key) {
          setChoiceTwo("Use your key on the locked door.")
        }
        break;
      case 9:
        setInv((prevInv) => ({
          ...prevInv,
          key: !prevInv.key,
        }));
        setDisplayText("Congratulations! You escaped the house. Game over.")
        setChoiceOne("")
        setChoiceTwo("")
        setChoiceThree("")
        setChoiceFour("")
        break;
      case 10:
        setDisplayText("You study the room, however you see no options besides turning around or finding a way to open the locked door.")
        setValue3(99)
        break;
        case 11:
          setBackground(livingroom)
          setDisplayText("You return to the living room.")
          setChoiceOne("Search the cupboard.")
          setChoiceTwo("Explore the room.")
          setChoiceThree("Return to the front door.")
          setChoiceFour("")
          setValue1(12)
          setValue2(13)
          setValue3(14)
          break;
        case 12:
          if (inv.key) {
            setDisplayText("You search the cupboard once again and find nothing new.")
            setValue1(99)
            break
          } else {
            setDisplayText("You search the cupboard and find a key and stow it away in your pocket.")
            setInv((prevInv) => ({
              ...prevInv,
              key: !prevInv.key,
            }));
            setValue1(99)
            break
          }
        case 13:
          setDisplayText("You find nothing worthwhile.")
          setValue2(99)
          break;
        case 14:
          setBackground(frontdoor)
          setDisplayText("You return to the front door.")
          setValue1(8)
          setValue2(9)
          setValue3(10)
          setValue4(11)
          setChoiceOne("Try to open the door.")
          setChoiceTwo("")
          setChoiceThree("Study your surroundings.")
          setChoiceFour("Turn around.")
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
          {isHurt && <div className="hurt">-10</div>}
        </div>
        <div className="inventory">
          <img src={backpack} alt="" />
          {inv.key && <img src={key} alt="" className="inventory-item" />}
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


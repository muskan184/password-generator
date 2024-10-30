import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { LC, NC, SC, UC } from "./data/passChar";

function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [Passwordlen, setPasswordlen] = useState(10);
  let [fpass, setFpass] = useState(" ");

  let createPassword = () => {
    let charSet = "";
    let finalpass = "";
    if (uppercase || lowercase || number || symbols) {
      if (uppercase) {
        charSet += UC;
      }

      if (lowercase) {
        charSet += LC;
      }

      if (number) {
        charSet += NC;
      }

      if (symbols) {
        charSet += SC;
      }

      for (let i = 0; i < Passwordlen; i++) {
        finalpass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      setFpass(finalpass);
    } else {
      alert("please select one checkbox");
    }
  };
  let copyPass = () => {
    navigator.clipboard.writeText(fpass);
  };

  return (
    <>
      <div className="passwordBox">
        <h2>Password Generator</h2>
        <div className="passwordboxin">
          <input type="text" readOnly value={fpass} />{" "}
          <button onClick={copyPass}>copy</button>
        </div>
        <div className="passlength">
          <label>Password length</label>
          <input
            type="number"
            max={20}
            min={10}
            value={Passwordlen}
            onChange={(event) => setPasswordlen(event.target.value)}
          />
        </div>
        <div className="passlength">
          <label>Including upper case</label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
        </div>
        <div className="passlength">
          <label>Including lower case</label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
        </div>
        <div className="passlength">
          <label>Including number</label>
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber(!number)}
          />
        </div>
        <div className="passlength">
          <label>Including symbols</label>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
        </div>
        <button className="btn" onClick={createPassword}>
          Generator Password
        </button>
      </div>
    </>
  );
}

export default App;

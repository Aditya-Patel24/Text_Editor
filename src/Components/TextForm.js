import React, { useState } from "react";

export default function TextForm(props) {
  const onUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const onLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const onClear = () => {
    let newText = "";
    setText(newText);
    console.log(text.split(" "));
  };
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Text Here");
  let myP = {
    color: "cyan",
    border: "1px solid black",
  };
  const [mystyle, setMystyle] = useState({
    color: "black",
    border: "1px solid black",
    backgroundColor: "white",
  });
  const [Mode, setMode] = useState();

  const toggleonClick = (cls) => {
    document.body.classList.add("bg-" + Mode);
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <div className="container mx-2 my-2 " style={mystyle}>
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label"
        ></label>
        <div>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="exampleFormControlTextarea1"
            rows="12"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2 " onClick={onUpper}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2 " onClick={onLower}>
          Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={onClear}>
          Clear
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={() => {
            props.toggleonClick("null");
          }}
        >
          ChangeMode
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={() => {
            props.toggleonClick("primary");
          }}
        ></button>
        <button
          className="btn btn-success mx-2 my-2"
          onClick={() => {
            props.toggleonClick("success");
          }}
        ></button>
        <h3>Your text details</h3>
        <p>No of Words are {text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
        <p>No of alphabets are {text.length}</p>
        <p>Approx {0.008 * text.split(" ").length} Minitues required to read</p>
        <h3>Your Text Preview Here</h3>
        <p className="mx-2" style={myP}>{text}</p>
      </div>
    </>
  );
}

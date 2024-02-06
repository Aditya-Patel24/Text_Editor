import React, { useState } from "react";

export default function TextForm() {
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
  };
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Text Here");
  return (
    <>
      <div className="container" mx-2>
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
        <button className="btn btn-primary mx-3 my-3" onClick={onUpper}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-3 my-3" onClick={onLower}>
          Lowercase
        </button>
        <button className="btn btn-primary mx-3 my-3" onClick={onClear}>
          Clear
        </button>
        <h3>Your text details</h3>

        <p>No of Words are {text.split(" ").length}</p>
        <p>No of alphabets are {text.length}</p>
        <p>Approx {0.008 * text.split(" ").length} Minituse required to read</p>

        <h3>Your Text Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

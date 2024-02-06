import React, { useState } from "react";

export default function TextForm() {
  const onUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    console.log(newText);
  };
  const onLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    console.log(newText);
  };
  const onLength = () => {
    let newText = text.length;
    setText(newText);
    console.log(newText);
  };
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter here");
  return (
    <>
      <div>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
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
        <button className="btn btn-primary mx-3 my-3" onClick={onLength}>
          Length
        </button>
      </div>
    </>
  );
}

import React, { useState } from "react";
import './TextForm.css'
export default function TextForm() {
  const [searchTerm, setSearchTerm] = useState(''); 
  const onSearch = () => {
    const count = text.split(/\s+/).filter(word => word === searchTerm).length;
    alert(`The word "${searchTerm}" occurs ${count} times.`);
  }
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
    console.log(text.split(" "))
  };
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
let myP={
color:"cyan",
border: "1px solid black",
padding:"10px",
boxShadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
borderRadius:"4px"
  }
  const[mystyle, setMystyle]=useState({
    color:"black",
      })
   const toggleonClick =()=>{
        if(mystyle.color === "white")
        setMystyle({
          color:"black",
          backgroundColor:"white"
        })
        else{
         setMystyle({ color:"white",
         backgroundColor:"black"})
        }
      }

      const onSpeech =()=>{
        let speech = new SpeechSynthesisUtterance();
        speech.text = text;
        window.speechSynthesis.speak(speech);
      }
     const onCopy =()=>{
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
      }
      const onRemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
  return (
    <div className="out-container">
      <div className="container mx-2 my-2" style={mystyle}>
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label"
        ></label>
      <div>
        <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="12" placeholder="Enter your text here" ></textarea> </div>
        <button className="btn btn-primary mx-2 my-2 " onClick={onUpper}>Uppercase</button>
        <button className="btn btn-primary mx-2 my-2 " onClick={onLower}>Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={onCopy}>Copy</button>
        <button className="btn btn-primary mx-2 my-2" onClick={onClear}>Clear</button>
        <button className="btn btn-primary mx-2 my-2" onClick={onRemoveExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2 my-2" onClick={onSpeech}>Speak</button>
        <button className="btn btn-primary mx-2 my-2" onClick={toggleonClick}>ChangeMode</button>
        <input className=" m-2 " style={{width:"200px", border:'1px solid #ccc', borderRadius: '4px', padding: '6px 12px'}} type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Enter word to search" />
        <button className="btn btn-outline-primary" onClick={onSearch}>Search</button>
        <div ClassName="text-container">
        <br/>
        <h3>Your text details</h3>
        <p>No of characters are {text.replace(/\s+/g, '').length}</p>
        <p>No of Words are {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
        <p>No of sentences are {text.split(/[.!?]+/).filter((element)=>{return element.length!==0}).length}</p>
        <p>Approx {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minitues are required to read</p>
        </div>
        <h3>Your Text Preview Here</h3>
        <p className="mx-2" style={myP}>{text}</p>
      </div>
    </div>
  );
}

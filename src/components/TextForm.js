import React, { useState } from "react";

export default function TextForm(props) {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btntext, setBtnText] = useState("Enable dark mode");

  const toggleStyle = () => {
    if (myStyle.color == "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable light mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable dark mode");
    }
  };

  const handleUpClick = () => {
    //console.log("uppercase is clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleChange = (event) => {
    //console.log("On change")
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter a text here..");

  return (
    <>
      <div className="container" style={myStyle}>
        <div className="d-flex flex-row bd-highlight my-3 mx-3">
          <h1>{props.heading}</h1>
          <form className="d-flex flex-row bd-highlight my-3 mx-3">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                onClick={toggleStyle}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                class="form-check-label"
                onClick={toggleStyle}
                for="flexSwitchCheckDefault"
              >
                {btntext}
              </label>
            </div>
          </form>
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-success mx-1" onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn btn-success mx-1" onClick={handleLoClick}>
          Lowercase
        </button>
      </div>

      <div className="container my-3" style={myStyle}>
        <h1>Your text summary :</h1>
        <p>
          Total {text.split("").length} words and {text.length} characters
        </p>
        <p>Time: {0.008 * text.split("").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

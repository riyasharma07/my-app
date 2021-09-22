import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("uppercase is clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleChange=(event)=>{
        //console.log("On change")
        setText(event.target.value)
    }
    const[text ,setText]=useState("Enter a text here..");
    
    return (
        <div>
         <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="8"></textarea>
        </div> 
        <button className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
        </div>
       
    )
}

import React,{useState} from 'react'

export default function (props) {
    const handleUpClick=()=>{
        console.log("uppercase is clicked")
    }
    const handleChange=()=>{
        console.log("uppercase is clicked")
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

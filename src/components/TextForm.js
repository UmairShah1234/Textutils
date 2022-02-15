import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("")
  const handleUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnchange = (event) => {
    setText(event.target.value)
  }
  const handleLowercase = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleCleartext = ()=>{
    let newText = '';
    setText(newText);
  }
  const handleCopy=()=>{
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const removeSpace = ()=>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
  }

  return (
    <>
    <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <label htmlFor="exampleFormControlTextarea1" className="form-label"><h2>Your textarea</h2></label>
      <textarea className="form-control border-3" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} rows={8} value={text} placeholder={"Please enter your text here!"} onChange={handleOnchange} id='myBox'/>
      <button className='btn btn-primary m-2' onClick={handleUppercase}>Convert to Uppercase</button>
      <button className='btn btn-primary m-2' onClick={handleLowercase}>Convert to Lowercase</button>
      <button className='btn btn-primary m-2' onClick={handleCleartext}>Clear Text</button>
      <button className='btn btn-primary m-2' onClick={handleCopy}>Copy Text</button>
      <button className='btn btn-primary m-2' onClick={removeSpace}>Remove space</button>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary here!</h1>
      <p>There {text.split(" ").filter((ele)=>{return ele.length !==0}).length} are {text.length} characters</p>
      <p >{text.length>0?text:"Write down something"}</p>
    </div>
    </>
  )
}

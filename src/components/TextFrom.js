// Using Hooks or Implementing using useState
//usestate is a hook

import React, {useState} from 'react'



export default function TextFrom(props) {

    const handleUpCase =() =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showalert("Converted to Uppercase", "success")
        // Onclick we getting this SetText Output, But in TextArea We are not able type any text because of onchange Function
        //If we use event in onChange then we can write text on area
    }
    const handleLoCase =() =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showalert("Converted to LowerCase", "success")
    }

    const handleClearCase =() =>{
        let newText = '';
        setText(newText)
        props.showalert("Text is clear now", "success")
    }


    const handleOnChange =(event) =>{
        setText(event.target.value)
    }

    const handelCopytext =(event) => {
        var text = document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Copied", "success")
    }

    const handelExtraSpace =(event) =>{
        let textlet = text.split(/[ ]+/);
        setText(textlet.join(" "));
        props.showalert("Removed extra spaces", "success")
    }

    const [text, setText] = useState('Enter Text Here');
    // text="new Text" //Wrong Way to set Text
    // setText("Enter Your Text") // Correct way to update Text
  return (
    <div>
        <>
        <div className="container" style={{color : props.mode==='dark' ? 'white' : '#01132e'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control my-3" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark' ? '#01132e' : 'white', color : props.mode==='dark' ? 'white' : '#01132e'}}id="MyBox" rows="8"></textarea>
            </div>
                <button className="btn btn-primary mx-1" onClick={handleUpCase}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoCase}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearCase}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handelCopytext}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handelExtraSpace}>Remove Extra Space</button>
        </div>    

        <div className="container my-3" style={{color : props.mode==='dark' ? 'white' : '#01132e'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to Read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter Something in textbox to preview it here"}</p>
        </div>
        </>
    </div>
  )
}

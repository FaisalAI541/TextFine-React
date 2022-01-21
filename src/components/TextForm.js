import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)  
        props.showAlert("Converted to uppercase", "success");      
    }
    const handleLoClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)        
        props.showAlert("Converted to lowercase", "success");
    }
    const handleOnChange = (event)=>{
        console.log("On change") 
        setText(event.target.value)               
    }
    const handleCopy = () => {
    var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied text", "success"); 
        }
    const handleExtraSpaces = () => {
     let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed extra Spaces", "success");
            }   

    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
             <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundcolour: props.mode==='dark'? 'grey':'white', color: props.mode=== 'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary" onClick={handleLoClick}>Convert to lowercase</button>
            <button className= "btn btn-primary mx-1" onClick={handleCopy}> Copy Text</button>
            <button className= "btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>
        <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary :</h2>
            <p>{text.split(" ").length} words and {text.length} characters </p>
            <p>You can read it in {0.008 * text.split(" ").length} minutes</p>
            <h3>Preview :</h3>
            <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
        </div>
        </>
    )
}

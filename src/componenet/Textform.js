import React, {useState} from 'react'

export default function Textform(props) {
    const handeUpclick = (event) => {
        console.log("button clicked" + text);
        let newtext = text.toUpperCase()
        setText(newtext)
    }
    const handeLoclick = (event) => {
      console.log("button clicked" + text);
      let newtext = text.toLowerCase()
      setText(newtext)
      
  }
  const handeClearclick = (event) => {
    console.log("button clicked" + text);
    let newtext = ""
    setText(newtext)
    
}
const handelCopyText = () => {
  var copy = document.getElementById("exampleFormControlTextarea1");
  copy.select();
navigator.clipboard.writeText(copy.value);
  
}
    const handelOnchange = (event) => {
        console.log("on change");
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    
  return (
    <div>

  <div className="mb-3 my-3" style={{color : props.mode==='dark'?'white':'#0a0233'}}>
    <label htmlFor="exampleFormControlTextarea1" className="form-label"><b>{props.heading}</b></label>
    <textarea className="form-control"  value={text} onChange={handelOnchange} style={{background : props.mode==='dark'?'#0a0233':'light', color : props.mode==='dark'?'white':'#0a0233'}} id="exampleFormControlTextarea1" rows="8"></textarea>
   
  </div>
  <button type="submit" onClick={handeUpclick} className="btn btn-primary mb-3 ">click to UpperCase</button>
  <button type="submit" onClick={handeLoclick} className="btn btn-primary mb-3 mx-3" >click to LowarCase</button>
  <button type="submit" onClick={handeClearclick} className="btn btn-primary mb-3 " >Clear text</button>
  <button type="submit" onClick={handelCopyText} className="btn btn-primary mb-3 mx-3" >Copy text</button>
  {/* <button type="submit" onClick={handeExtraSpace} className="btn btn-primary mb-3 mx-3" >Remove Extra Sapace</button> */}


  <div className='container my-3' style={{color : props.mode==='dark'?'white':'#0a0233'}}>
    <h1>count the word and cherector</h1>
    <p>word <b>{text.split(' ').length}</b> and cherector <b>{text.length}</b></p>
    <p>time to read the folloing paragraph<b> {0.008 * text.split(' ').length} </b>mintes</p>
    
    <div className="card mb-3">
  
  <div className="card-body" style={{background : props.mode==='dark'?'#0a0233':'light', color : props.mode==='light'?'dark':'white'}}>
    <h5 className="card-title">Priview</h5>
    <hr></hr>
    <p className="card-text"> {text.length>0?text:"enter something avobe to priview "}</p>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
  </div>

  </div>
  </div>
  </div>

  
  )
}

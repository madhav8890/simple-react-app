import "./App.css";
import Nevbar from "./componenet/Nevbar";

import Textform from "./componenet/Textform";


import React, {useState} from 'react'

function App() {
  const [mode, setMode] = useState("light")
 
  const taggelmode = ()=>{
    if (mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = '#0a0233'
    }
    else
    {
      setMode("light")
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <div>    
     <Nevbar title="🎃" title2="madhav" title3="contect" mode={mode} taggelmode={taggelmode} ></Nevbar>
    
     <div className="container">
     <Textform mode={mode} heading="Enter the Text to Anlize"/>
     </div>
          
    </div>
      
   
  );
}

export default App;

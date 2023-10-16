
import React from "react"
import '../../App.css';
export default function Home() {

  const indentStyle = {
    whiteSpace: 'pre-line',
    fontFamily : 'Arial', 
};

  return (
    <div><h1 className="home" style={indentStyle}>
                    Hand 
                    <br/>&nbsp; &nbsp;&nbsp;&nbsp; To
                    <br/>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hand
                    
    </h1></div>
  )
}

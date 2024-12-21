

import { useState } from "react";





const cardStyle = {
  backgroundColor: "white",
  width: "350px",
  height: "200px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "1.5rem",
  border: "2px solid grey",
  borderRadius: "15px",
};

const active = { 
  backgroundColor: "#ae3ec9",
  color:"white",
}
const numStyle = {
  
  borderRadius: "100%",
  backgroundColor: "yellow",
  color: "black",
  width: "3rem",
  height: "3rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontWeight:"bold",
};

const numContainer={
    display: "flex",
    width:"100%",
    marginBottom:"2rem",
    alignItems: "baseline",
    justifyContent: "space-between",
    fontWeight:"bold",
};

const msgStyle={
    textAlign:"center",
    fontSize:"1.5rem",
    fontWeight:"bold",
    marginBottom:"2rem",
};

const btnContainer={
    display: "flex",
    alignItems:"center",
    justifyContent:"space-between",
    width:"100%",
    marginBottom:"1rem",
    fontWeight:"bold",
}
const preBtnstyle={
    backgroundColor:"#ae3ec9",
    padding: "0.5rem",
    border: "none",
    borderRadius: "15px",
    color:"#fff",
    cursor:"pointer",
    fontWeight:"bold",

};

const nxtBtnStyle={
    backgroundColor:"#ae3ec9",
    padding: "0.5rem",
    border: "none",
    borderRadius: "15px",
    color:"#fff",
cursor:"pointer",
fontWeight:"bold",
};

const Messages = ["Learn HTML", "Learn CSS", "Learn JavaScript", "Learn React"];

function Card() {
  const [step, setStep]= useState(1);
    
    console.log(step)
      function minusStep(){
if (step === 1) return;
    setStep(step - 1);
      }

    function plusStep(){
if (step === 4) return;
    setStep(step + 1);
    }


  return (
    <div style={cardStyle}>

      <ul style={numContainer}>

        <div style={ (step>=1) ? {...numStyle, ...active}:numStyle}>

          <span>1</span>
        </div>

        <div  style={ (step>=2) ? {...numStyle, ...active}:numStyle}>
          <span>2</span>
        </div>

        <div  style={ (step>=3) ? {...numStyle, ...active}:numStyle}>
          <span>3</span>
        </div>

        <div  style={ (step>=4) ? {...numStyle, ...active}:numStyle}>
          <span>4</span>
        </div>

      </ul>

      <p style={msgStyle}>{Messages[step-1]}</p>

      <div style={btnContainer}>
        <button onClick={minusStep} style={preBtnstyle}>Previous</button>
        <button onClick={plusStep} style={nxtBtnStyle}>Next</button>
      </div>
    </div>
  );
}

export default Card;

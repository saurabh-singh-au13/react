import './App.css';
import React from "react"

function App() {
  const curDate = new Date().toLocaleString()
  const curTime = new Date().toLocaleTimeString()
  

  return (
    <div className="App">
      <>
        <h1>Display Today Date and Time</h1> 
        <h3> Today Date is {`${curDate}`}</h3>
        <h3> Today Time is {`${curTime}`}</h3>
      </>
    </div>
  );
}

export default App;

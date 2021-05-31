import './App.css';
import React from "react"

function App() {
  const myTeam = "Alpha"
  const myAge = 23
  const Sum = "5"
  return (
    <div className="App">
      <>
        <h1> Saurabh </h1>
        
        <h2> I love to work with my {myTeam}</h2>
        <p> And also my age is {myAge} </p>
        <span> what is 2+3 </span>
        <span> The sum of 2 and 3 is {Sum} </span>
        <p> sum of 4 and 5 is {4+5}</p>
      </>
      

     
    </div>
  );
}

export default App;

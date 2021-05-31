import './App.css';
import React from "react"

function App() {
  const myStyle = {
    color: "green",
    fontSize:"50px"

  }
  const myStyle1 = {
    color: "tomato",
    fontSize: "50px"

  }
  return(
    

    <div className="App">
      <>
      <h1 style={{color: "red", background:"black"}}> My name is Saurabh Kumar Singh </h1>
      <h1 style={myStyle}> My name is Saurabh Kumar Singh lorem10
      </h1>
      <p contentEditable="true" style = {myStyle1}> Note: In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces.</p>
      </>
    </div>
  );
}

export default App;

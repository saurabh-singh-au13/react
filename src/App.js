import './App.css';
import React from "react"

function App() {
  const img = "https://picsum.photos/200/300"
  const img1 = "https://picsum.photos/300/300"
  const img2 = "https://picsum.photos/300/250"
  const img3 = "https://picsum.photos/400/300"
  return (
    <div className="App">
      <>
      <h1 contentEditable='true' spellCheck="true"> What is your name ---</h1>
      <img src={img} alt="kuch"/>
      <a href="https://google.com/" target="_xyz"><img src={img1} alt="kuch"/> </a>
      
      <img src={img2} alt="kuch1"/>
      <img src={img3} alt="kuch"/>
      </>
    </div>
  );
}

export default App;

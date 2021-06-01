import './App.css';
import React from "react"

function App() {
  let curDate = new Date();
  curDate = curDate.getHours();
  let greeting = '';
  const cssStyle = { }


  if(curDate >= 1 && curDate < 12 ) {
    greeting = 'Good Morning'
    cssStyle.color="tomato";

  }else if( curDate >= 12 && curDate <= 17 ){
    greeting = "Good Afternoon"
    cssStyle.color="green";
  }else if( curDate >= 17 && curDate <= 20 ){
    greeting = "Good Evening"
    cssStyle.color="blue";
  }else{
    greeting = "Good Night "
    cssStyle.color="black";
  }

  return(
    

    <div className="App">
      <>
      <h1 className="xyz"> Hello Saurabh,<span style={cssStyle}>{greeting} </span>  </h1>
      
      </>
    </div>
  );
}

export default App;

import React from 'react'
import './Main.css'
function Main() {
    let curDate = new Date();
    curDate = curDate.getHours();
    let greeting = " ";

    if(curDate >= 12 && curDate <= 15){
        greeting = "Good Afternoon"
    }else if(curDate > 15 && curDate <= 18 ){
        greeting = "Good Evening"
    }else if(curDate >= 18 && curDate <= 24){
        greeting = "Good Night"
    }else{
        greeting = "Good Morning"
    }

    return (
        <div>
            <>
            Computer Says {greeting}  

            </>
            
        </div>
    )
}

export default Main

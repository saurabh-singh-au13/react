import React from 'react'
import sum from './Sum';
import Sub from './Sub';
import mult from './Mult'
import div from './Div'


function Calc() {
   const myStyle = {
       color: "red"
   }
   const myStyle1 = {
       color:"green"
   }
   const myStyle2 = {
       color:"yellow"
   }
   const myStyle3 = {
       color:"blue"
   }
    return (
        <div style={{display:"bolck", textAlign:"center", marginTop:"150px", backgroundColor:"black", width:"100%", justifyItems:"center"}}>

            <h2> <span style={{color:"white"}}> sum of two number is</span> <span style={myStyle}> {sum(10, 20)} </span> </h2>
            <h2> <span style={{color:"white"}}> Sub of two number is </span><span style={myStyle1}>{Sub(10, 20)}</span></h2>
            <h2> <span style={{color:"white"}}> Mult of two number is</span> <span style={myStyle2}>{mult(10, 20)}</span></h2>
            <h2> <span style={{color:"white"}}> Divide of two number is</span> <span style={myStyle3}>{div(10, 20)}</span></h2>
            
        </div>
    )
}

export default Calc



// React component for the front side of the card


// React component for the back side of the card
import React, { Component } from "react";
import { BackSide } from "react-flippy";
import content from "../mock/mock";
import "./Main.css";
import "./Card.css";
import Card from "./Card";


export default class CardBack extends React.Component {
// class CardBack extends React.Component {
  render() {
    console.log(this.props.src, "srcccc");
    // const number = content.List.map((u,index)=>{    
    //   return(
    //     <div>
    //       <div className="card">
    //        <img src={u.image} height={100} width={100} />
    //       </div>
    //     </div>
    //   )
    //   })
    return(
      
      <div className="cards">
        {/* {number} */}
        {/* </div> */}
       {/* <div className='card-side side-back'> */}
       {/* <div className='container-fluid'> */}
          {/* <h1>Let's get in touch!</h1> */}
          
          <img src={this.props.src} height={100} width={100}></img>
      {/* //     {/* <div className="cards"> */}
          {/* {number} */}
          {/* </div> */}
         </div> 
      // </div>
    )
  }
}

// React component for the card (main component)


// Render Card component
// ReactDOM.render(<Card />, cardContainer);
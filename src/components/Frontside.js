import React, { Component } from "react";
import { BackSide } from "react-flippy";
import content from "../mock/mock";
import "./Main.css";


export default class FrontSide extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        moves: 0,
        bestScore: 0,
        text:"click to view image",
        buttonText:"click",
        image:0
      };
      this.changeCard=this.changeCard.bind(this)
      const timeout = null;
    }

changeCard(){
  this.props.changeCard
  console.log("huiooo");
  // <BackSide/>
  this.setState({text:"hello world", })
}
render(){
    return(
        <div onClick={this.changeCard}>
          <button onClick={this.changeCard}>{this.state.buttonText}</button>
            {this.state.text}
            {/* <img src="https://th.bing.com/th/id/OIP.D0X8pDYidShPEPQxpVM6CAHaEK?pid=ImgDet&w=3200&h=1800&rs=1" height={100} width={100}></img> */}
            {/* {this.state.image} */}
        </div>

    )
}
}
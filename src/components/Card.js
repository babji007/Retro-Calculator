import React, { Component } from "react";
import { BackSide } from "react-flippy";
import content from "../mock/mock";
import CardBack from "./Back";
import Front from "./Front";
import "./Main.css";
import "./Card.css";
import ReactCardFlip from "react-card-flip";
// import CardBack from "./Back";

export default class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
      Flip:true,
      clicked:{},

      // isFlipped[required]:this.state.isFlipped
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick=(item)=> {
    // e.preventDefault();
    // console.log(item.index);
    // console.log("card handle click");
    // this.setState({ isFlipped: !this.state.isFlipped });
    // const timer = setTimeout(() => {
    //   console.log("first");
    //   this.setState({ isFlipped: !this.state.isFlipped });
    // }, 2000);
    // return () => { 
    //   clearInterval(timer);
    
    // };



    console.log(item);
    console.log("card handle click", this.state.clicked);
    // let required = index
    // this.setState(prevState => ({
    //   clicked:{
    //     ...prevState.clicked,
    //     // [item.index]:!prevState.clicked[item.index],
    //     // [item.index]:this.state.isFlipped
    //   }
    // })
      // )
    this.setState( { isFlipped :  !this.state.isFlipped}  );
      console.log(this.state.Flip, "flip");
    const timer = setTimeout(() => {
      console.log("first");
      this.setState({ isFlipped: this.state.isFlipped });
    }, 2000);
    return () => {
      clearInterval(timer);
      console.log(this.state.isFlipped);
      // this.setState({ isFlipped: !this.state.isFlipped });
    };
    
  }
 
  // class Card extends React.Component {
  render() {
    console.log(this.state.isFlipped);
    
    return (
      <div className="cards">
        {content.List.map((u, index) => {
          return (
            <div>
              {/* //   <div className="cards" isFlipped={this.state.isFlipped}>
          //   <div className='card-container'> */}
              <ReactCardFlip
                flipDirection="vertical"
                isFlipped={this.state.isFlipped}
              >
                <div
                  style={{
                    width: "300px",
                    height: "200px",
                    background: "#d7fbda",
                    fontSize: "40px",
                    color: "green",
                    margin: "20px",
                    borderRadius: "4px",
                    textAlign: "center",
                    padding: "20px",
                  }}
                  isFlipped={this.state.isFlipped}
                >
                  Welcome to GFG.
                  {/* <br />
                <br /> */}
                  <button
                    style={{
                      width: "150px",
                      padding: "10px",
                      fontSize: "20px",
                      background: "#f5d9fa",
                      fontWeight: "bold",
                      borderRadius: "5px",
                    }}
                    onClick={() => this.handleClick(u.id)}
                  >
                    Flip
                  </button>
                </div>
                {/* {this.state.clicked===index &&  */}
               {/* {  this.state.Flip && */}
                <div
                  style={{
                    width: "300px",
                    height: "200px",
                    background: "#fbd7f8",
                    fontSize: "40px",
                    color: "blue",
                    margin: "20px",
                    borderRadius: "4px",
                    textAlign: "center",
                    padding: "20px",
                    
                    // isFlipped:this.state.isFlipped
                  }}
                  isFlipped={this.state.isFlipped}
                >
                  <img src={u.image} height={100} width={100}></img>
                  {/* <br /> */}
                  {/* <button
                    style={{
                      width: "150px",
                      padding: "10px",
                      fontSize: "20px",
                      background: "#f5d9fa",
                      fontWeight: "bold",
                      borderRadius: "5px",
                    }}
                    onClick={() => this.handleClick()}
                  >
                    Flip
                  </button> */}
                </div>
                     {/* }   */}
              </ReactCardFlip>

              {/* <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection='vertical'>
          <div className='card-body' style={{
                width: 180,
                height: 150,
                marginLeft: 100,
                marginTop: 20,
                backgroundColor: "green",
              }}
              // isFlipped={this.state.isFlipped}
              >
                <Front style={{
                width: 180,
                height: 150,
                marginLeft: 100,
                marginTop: 20,
                backgroundColor: "green",

              }} handleClick={(e)=>this.handleClick(e)}>
             {/* <img src={u.image} height={100} width={100} />   */}
              {/* </Front>
            </div>
            <div>
            <CardBack src={u.image} onClick={(e)=>this.handleClick(e)}></CardBack>
             </div>
             
             
             </ReactCardFlip> 
             </div>
            </div> */}
            </div>
          );
        })}
        {/* {number} */}
        {/* <CardBack />
  
            <Front /> */}
      </div>
    );
  }
}

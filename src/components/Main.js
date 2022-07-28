import React, { Component } from "react";
import content from "../mock/mock";
import "./Main.css";
import Flippy, { FrontSide, BackSide } from "react-flippy";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: 0,
      bestScore: 0,
      isFlipped: false,
      clicked: {              
        id:1,
        
        
      },
    };
    // const timeout = null;
  }

  shufle = () => {
    console.log("clicked this event");
    this.setState({ moves: this.state.moves+1 });
    // shuffle(content.List)
    // window.location.reload()

    if (content.List.length > 0) {
      // let number
      for (let i = content.List.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = content.List[i];
        content.List[i] = content.List[j];
        content.List[j] = temp;
      }
    }
    // flipOnClick:{true}
    // window.location.reload()
    // setstate={this.state.moves=(this.state.moves+2)}
    // setCards(shuffleCards(uniqueCardsArray.concat(uniqueCardsArray)));
  };
  totalMoves = (item) => {
    

    this.setState({ moves: this.state.moves+1  });
    console.log(this.state.moves);
    // this.setState({ isFlipped: !this.state.isFlipped });
  };
  handleClick(item) {
    // e.preventDefault();
    // this.setState({ isFlipped: !this.state.isFlipped });
    // if(this.state.moves==2){
      console.log(item.index);
    console.log("card handle click" , this.state.clicked);
    // this.setState({ isFlipped: !this.state.isFlipped });
    this.setState({ isFlipped: !this.state.isFlipped });
    console.log(this.state.isFlipped, 5333);
    // this.setState({ isFlipped: !this.state.isFlipped });
    // console.log(this.state.isFlipped, 54444);
    this.setState(prevState => ({
        clicked:{
          ...prevState.clicked,
          id:item.index,
          [item.index]:!prevState.clicked[item.index],
          // [item.index]:this.state.isFlipped
        }
      })
        )
    console.log(this.state.clicked);
    const timer = setTimeout(() => {
      console.log("first");
      // this.setState({ isFlipped: !this.state.isFlipped });
      console.log(this.state.isFlipped, 55555);
      this.setState({ isFlipped: !this.state.isFlipped });
      console.log(this.state.isFlipped, 55555);
    }, 2000);
    return () => {
      clearInterval(timer);
    };
    
   }

     // this.setState({ isFlipped: !this.state.isFlipped });
  // }

  render() {
    const number = content.List.map((item, index) => {
      return (
        // <div className="cards">
        <div>
          <a onClick={this.totalMoves}>
            <Flippy
              isFlipped={this.state.isFlipped}
              // flipOnHover={false} // default false
              // flipOnClick={true} // default false
              // flipDirection="horizontal" // horizontal or vertical
              // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
              style={{
                width: 180,
                height: 150,
                marginLeft: 100,
                marginTop: 20,
                backgroundColor: "green",
              }}
              className="flip"
              // setstate={this.state.moves=(this.state.moves+2)}
              // style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
            >
              <FrontSide
                // style={{
                //   backgroundColor: '#41669d',
                // }}
                onClick={() => this.handleClick(item)}
              >
                Card
              </FrontSide>
              {/* {this.state.isFlipped && ( */}
              {this.state.clicked.id===item.index && (
                <BackSide
                  style={{
                    width: 180,
                    height: 150,
                    // marginLeft: 100,
                    // marginTop: 20,
                    backgroundColor: "blue",
                  }}

                  // setstate={this.state.moves=(this.state.moves+2)}
                >
                  ROCKS
                  <img src={item.image} height={100} width={100} />
                </BackSide>
              ) 
               }
            </Flippy>
          </a>
        </div>
      );
    });
  
    return (
      <div className="cards">
        {number}
        <div
          style={{
            marginLeft: 100,
            marginTop: 20,
            textAlign: "right",
            // backgroundColor: "green",
          }}
        >
          moves: {this.state.moves}{" "}
          <button
            type="button"
            class="btn btn-primary"
            onClick={this.shufle}
            flipOnClick={true}
          >
            reset
          </button>
        </div>
        {/* <button  class="btn btn-primary" onClick={this.getImage()}>Go somewhere</button> */}
      </div>
      // </div>
    );
  }
}



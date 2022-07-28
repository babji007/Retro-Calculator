import React, { Component } from "react";
import content from "../mock/mock";
import "./Main.css";
import Front from "../components/Front";
import Flippy from "react-flippy";
import FrontSide from "./Frontside";
import BackSide from "./Back";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: 0,
      bestScore: 0,
    };
    const timeout = null;
  }

  shufle = () => {
    console.log("clicked this event");
    this.setState({ moves: 0 });
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
  totalMoves = () => {
    // console.log(<BackSide />);
    
    // <BackSide/>
    const timeout = setTimeout(() => {
      
      console.log(<img src="https://th.bing.com/th/id/R.a0fdc5ac021f1a219df086d2c8bf6e38?rik=rZg3Xl3nIk9S4A&riu=http%3a%2f%2ftop10tale.com%2fwp-content%2fuploads%2f2016%2f09%2f62296056cd1a94640d900e968fde25f4.jpg&ehk=xrOxHhfOkrZrqjdoKbOFuhlYtZWjUomE1jYrxiuXvXw%3d&risl=&pid=ImgRaw&r=0"></img>);
    }, 1);
    return () => clearTimeout(timeout);

    // this.setState({ moves: this.state.moves + 1 });
  };

  Change_text() {
    // { <FrontSide />?<BackSide/>:<FrontSide/>}
    // <BackSide/>
    console.log("clicked");
  }
  changeCard() {}

  render() {
    const number = content.List.map((item, index) => {
      return (
        // <div className="cards">
        <div>
          <a onClick={this.totalMoves}>
            <Flippy>
              <div
                style={{
                  width: 180,
                  height: 150,
                  marginLeft: 100,
                  marginTop: 20,
                  backgroundColor: "green",
                }}
                // onClick={this.Change_text}
              >
                {<FrontSide onClick={this.changeCard} />}

                {/* <BackSide/> */}
              </div>
            </Flippy>
          </a>
        </div>
      );
    });

    return (
      <div className="cards" onClick={this.Change_text}>
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

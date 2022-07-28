import React, { Component } from "react";
import content from "../mock/mock";
import "./Main.css";
import "./Card.css"
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Card from "./Card";


// export default class Front extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         moves:0,
//         isOpen:false
       
//       };
      
    
//     this.totalMoves=this.totalMoves.bind(this)
//     }

    

// totalMoves(item){
//   console.log(item);
//  const timeout=setTimeout(() => {
//     this.setState({moves:this.state.moves+1})
//     if(this.state.moves==2){
//       console.log(this.state.moves);
//       console.log("2 cards opened");
//       // console.log(item.image)
//       this.setState({moves:0})

//     }
//     console.log("hellloww");
//   }, 100);
  
//   return () => clearTimeout(timeout);
//   // clearTimeout(this.timeout)

// }

// render(){
//   const number = content.List.map((item, index) => {
//     return (
//       // <div className="cards">
//       <div>
//         <a >
//           <Flippy
//             // flipOnHover={false} // default false
//             // flipOnClick={true} // default false
//             // flipDirection="horizontal" // horizontal or vertical
//             // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
//             // if you pass isFlipped prop component will be controlled component.
//             // and other props, which will go to div
//             style={{
//               width: 180,
//               height: 150,
//               marginLeft: 100,
//               marginTop: 20,
//               backgroundColor: "green",
//             }}
//             // onClick={this.totalMoves}
//             // setstate={this.state.moves=(this.state.moves+2)}
//             // style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
//           >
//             <FrontSide
//             // style={{
//             //   backgroundColor: '#41669d',
//             // }}
//             onClick={e=>this.totalMoves(e)}
//             >
//               Card
//             </FrontSide>
//             <BackSide
//               style={{
//                 width: 180,
//                 height: 150,
//                 // marginLeft: 100,
//                 // marginTop: 20,
//                 backgroundColor: "blue",
//               }}
//               // setstate={this.state.moves=(this.state.moves+2)}
//             >
//               {/* ROCKS */}
//               <img src={item.image} height={100} width={100} />
//             </BackSide>
//           </Flippy>
//         </a>
//       </div>
//     );
//   });
//     return(
      

//         <div className="cards">
//             {number}
//             <div
//           style={{
//             marginLeft: 100,
//             marginTop: 20,
//             textAlign: "right",
//             // backgroundColor: "green",
//           }}
//         >
//           moves: {this.state.moves}{" "}
//           </div>
//         </div>

//     )
// }
// }

export default class Front extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
    // this.props.handleClick = this.props.handleClick.bind(this)
  }

  handleClick=(e)=> {
    e.preventDefault();
    console.log("handle click");
    this.props.handleClick(e);
    console.log("handle click");
    // this.setState({ isFlipped: !this.state.isFlipped });
  }


  render() {
    
    return(
      
      <div className='card-side side-front'>
        <div className='container-fluid'>
          
              <h2>Czech based</h2>
              <button onClick={this.handleClick}>Click to flip</button>
              {/* {number} */}
              <h1>UI/UX Designer</h1>

              {/* <p>Andrey is driven by turning ideas into scalable and and empowering experiences that solve real life problems.</p> */}

              {/* <p>He is currently the founder of Dvorak Media. Previously, Andrey was a product designer at Dropbox.</p>

              <p>Over the years, Michael has been priviledged to have worked with Adobe, Evernote, Square and more.</p> */}
            </div>
          </div>
        
      // </div>
    )
  }
}
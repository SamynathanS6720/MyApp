// import logo from './logo.svg';
// import './App.css';
// import FunctionalComp from './components/FunctionalComp';
// import ClassComp from './components/ClassComp';
// import ClickComp from './components/ClickComp';

// function App() {
//   return (
//     // <h1>Hello World!</h1>
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         {/* <FunctionalComp></FunctionalComp>
//         <ClassComp></ClassComp> */}
//         <ClickComp></ClickComp>
//       </header>
//       <body>
//       </body>
//     </div>
//   );
// }


import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      subject: ""
    };
  }

  handleChange = event => {
    this.setState({
      subject: event.target.value
    })
  }

  cleartext = event => {
    this.setState({
      subject: ""
    }) 
  }

  clearbox = Event => {
    document.getElementById("box").innerHTML = "";
  }

  onClear = () => {
    ref.current.value = "";
  };


  render() {
    return (
      <div>
        <center>
          {/* <form onSubmit={this.cleartext}> */}
            <h4 style={{ color: "#68cf48" }}>Welcome Application</h4>
            <input id="box" placeholder="Enter Subject" //></input> 
              onChange={this.handleChange} ></input>
            <button onClick={this.onClear}>hello there !</button>
            <p><b>{this.state.subject}</b> </p>
          {/* </form> */}
        </center>
      </div>
    )
  }
}

export default App;

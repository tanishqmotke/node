import React, { Component } from "react";

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  HandleClick = () =>{

   this.setState({count : this.state.count +1 });

  }
  render() {
    let { count } = this.state;
    return (
         <div>
            <h1>You clicked the button {count} times </h1>
            <span>
                <button onClick={(e)=>this.HandleClick()}>Click me</button>
            </span>
        </div>
     );
  }
}
export default Application;

import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increase() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h3>Counter App using Class Component : </h3>
        <h2> {this.state.count}</h2>
        <button onClick={this.increase.bind(this)}> Add</button>
      </div>
    );
  }
}

export default Counter;

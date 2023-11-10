import "./styles.css";

import { Component } from "react";
class App extends Component {
  state = { count: 1950 };
  increase = () => {
    this.setState((prevstate) => ({ count: prevstate.count + 50 }));
  };
  decrease = () => {
    this.setState((prevstate) => ({ count: prevstate.count + 500 }));
  };
  render() {
    let { count } = this.state;
    return (
      <>
        <div className="container">
          <h1>Sarah williams</h1>
          <p>Your balance is {count}</p>
          <div>
            <button onClick={this.increase}>50</button>
            <button onClick={this.decrease}>500</button>
          </div>
        </div>
      </>
    );
  }
}
export default App;

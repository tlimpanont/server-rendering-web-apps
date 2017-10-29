import React, {Component} from 'react';

class App extends Component {
  buttonStyle = {
    background: 'red',
    color: 'white',
    width: 100,
    height: 40,
    borderRadius: "4px 4px 4px 4px"
  };

  clickHandler() {
    alert(new Date);
  }
  render() {
    return (
      <div>
        <h1>Hello React :)</h1>
        <button style={this.buttonStyle} onClick={this.clickHandler}>Get Date</button>
      </div>
    );
  }
}
export default App;

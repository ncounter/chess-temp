import React from 'react';
import './App.css';


class App extends React.Component<> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render () {
    var output = [];
    for (var i=0; i<5; i++) {
        output.push(<div className={i%2==0 ? "black" : "white"}>{i}</div>);
    }
    
    return (
      <div className="App">
        { output }
      </div>
    );
  }
}

export default App;

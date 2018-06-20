import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    input: '',
  };

  onChangeHandler = () => {

  }

  onClickHandler = () => {

  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.input} onChange={this.onChangeHandler} />
        <input type="button" value="Add" onClick={this.onClickHandler} />
      </div>
    );
  }
}

export default App;

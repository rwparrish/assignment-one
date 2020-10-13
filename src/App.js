import React from 'react';
import './App.css';
import { Component } from 'react';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';

class App extends Component {

  state = {
    username: 'Ryan'
  }

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render () {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div>
        <UserInput
          changeUsername={this.changeUsernameHandler}
          username={this.state.username} />
        <UserOutput
          click={this.changeUsernameHandler}
          username={this.state.username} />
        <UserOutput 
          username={this.state.username} />
        <UserOutput 
          username={this.state.username}/>
      </div>
    );
  }
}

export default App;

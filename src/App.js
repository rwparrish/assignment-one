import React from 'react';
import './App.css';
import { Component } from 'react';
import UserOutput from './User/UserOutput';

class App extends Component {

  state = {
    username: 'Ryan'
  }

  changeUsernameHandler = () => {
    this.setState({
      username: 'RINO'
    })
  }

  render () {
    return (
      <div>
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

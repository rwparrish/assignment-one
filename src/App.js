import React from 'react';
import './App.css';
import { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {

  state = {
    username: 'Ryan'
  }

  changeUsernameHandler = event => {
    this.setState({
      username: event.target.value
    });
  }

  render () {

    return (
      <div>
        <UserInput changedUsername={this.changeUsernameHandler} userName={this.state.username} currentName={this.state.username} />
        <UserOutput click={this.changeUsernameHandler} userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username}/>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import LoggedIn from './LoggedIn';
import StartPage from './StartPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  LogIn(userName, password) {

    fetch("localhost:3002/users/logIn", {
      method: "POST",
      headers: {
        "Content-type": 'application/json',
      },
      body: JSON.stringify({
        userName: userName,
        password: password
      })
    })
      .then(response => response.json())
      .then(json =>{ this.setState({loggedIn: json})})
  }

  render() {
    return (
      this.state.loggedIn ? <LoggedIn /> : <StartPage LogIn = {this.LogIn} />
    )
  }
}

export default App;

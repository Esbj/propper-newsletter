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

    fetch("http://localhost:3002/users/logIn", {
      method: "POST",
      headers: {
        "Content-type": 'application/json',
      },
      "body": JSON.stringify({
        userName: "Pelle",
        password: "12345"
      })
    })
      .then(response => response.json())
      .then(logInStatus => {
        console.log("Får logga in: " + logInStatus);
        this.setState({loggedIn: logInStatus})
      });
  }

  render() {
    return (
      this.state.loggedIn ? <LoggedIn /> : <StartPage LogIn={this.LogIn} />
    )
  }
}

export default App;

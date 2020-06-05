import React from 'react';
import './App.css';
import AccountPage from './AccountPage';
import StartPage from './StartPage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      wantsEmail: false
    }
  }

  LogIn = (userName, password) => {

    fetch("http://localhost:3002/users/logIn", {
      method: "POST",
      headers: {
        "Content-type": 'application/json',
      },
      "body": JSON.stringify({
        userName: userName,
        password: password
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log("Inlogg tillåtet för id: " + data.id);
        console.log("Vill ha e-post: " + data.subscribtionStatus);
        this.setState({
          userId: data.id,
          wantsEmail: data.subscribtionStatus
        })
      })
  }


  LogOut = () => {
    this.setState({ userId: null });
  }
  render() {
    return (
      this.state.userId ? <AccountPage LogOut={this.LogOut} /> : <StartPage LogIn={this.LogIn} />
    );
  };
}
export default App;

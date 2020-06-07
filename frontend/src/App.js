import React from 'react';
import './App.css';
import AccountPage from './AccountPage';
import StartPage from './StartPage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      wantsEmail: false,
      loginAllowed: false,
      userName: ''
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
          wantsEmail: data.subscribtionStatus,
          loginAllowed: true,
          userName: userName
        })
      })
  }

  Register = (userName, password, email, wantsEmail) => {
    fetch("http://localhost:3002/users/", {
      method: "POST",
      headers: {
        "Content-type": 'application/json',
      },

      "body": JSON.stringify({
        userName: "kalle",
        password: "cool",
        email: "email@mail.com",
        wantsEmail: true
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log("Inlogg skapat för "+ userName)
      })
  }


  LogOut = () => {
    this.setState({ 
      loginAllowed: false 
    })
  }
  render() {

    return (
      this.state.loginAllowed ? <AccountPage LogOut={this.LogOut} userName={this.state.userName} /> : <StartPage LogIn={this.LogIn} />
    );
  };
}
export default App;

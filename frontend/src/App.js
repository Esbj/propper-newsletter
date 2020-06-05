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
  saveDetails = (id, sub) => {
    this.setState({
      userId: id,
      wantsEmail: sub
    })
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
      .then(data => {
        console.log("Inlogg tillåtet för id: " + data.id);
        console.log("Vill ha e-post: " + data.subscribtionStatus);
        this.saveDetails(data.id, data.subscribtionStatus);
        // this.setState({
        //   userId: data.id,
        //   wantsEmail: data.subscribtionStatus
        // })
      })
  }


  LogOut () {
    this.setState({ userId: null });
  }
  render() {
    return (
      this.state.userId ? <AccountPage LogOut={this.LogOut} /> : <StartPage LogIn={this.LogIn} />
    );
  };
}
export default App;

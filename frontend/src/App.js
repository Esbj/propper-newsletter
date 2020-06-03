import React from 'react';
import './App.css';
import LoggedIn from './LoggedIn';
import  StartPage from './StartPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  logIn(){
    //idk yet
  }
  render() {
    return(
      this.state.loggedIn ? <LoggedIn/> : <StartPage />
    )
  }
}

export default App;

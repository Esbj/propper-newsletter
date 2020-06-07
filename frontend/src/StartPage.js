import React from 'react';
import './index.css';
import ShowLogIn from './ShowLoginUser'
import RegisterUser from './ShowRegisterUser'

class StartPage extends React.Component{
    render(){
        return(
            <div>
                <h2>Välkommen!</h2>
                <ShowLogIn  LogIn={this.props.LogIn}></ShowLogIn>
                <RegisterUser></RegisterUser>
            </div>
        )
    }
}

export default StartPage;
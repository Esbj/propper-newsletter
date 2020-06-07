import React from 'react';
import './index.css';

class AccountPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        fetch("http://localhost:3002/users/updateSubscriber", {
            "method": "PUT",
            "headers": {
                "Content-type": 'application/json',
            },

            "body": JSON.stringify({
                subscribtionStatus: this.state.isToggleOn,
                Id: this.props.Id
            })
        })
    }


    render() {
        return (
            <div>
                <p>Välkommen {this.props.userName}!</p>
                <button onClick={this.props.LogOut}>Logga Ut</button>
                <button
                    onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        )
    }
}

export default AccountPage;
import React from 'react';
import './index.css';

class ShowLogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };


    handleChange(event) {
        var key = event.target.name;
        var value = event.target.value;
        this.setState({
            [key]: value
        })
    };

    handleSubmit(event) {
        this.setState({
            userName: this.state.userName, 
            password: this.state.password
        });
        this.props.LogIn(this.state.userName, this.state.password);
        event.preventDefault();
    };


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Logga In</label><br></br>
                    <input
                        type="text"
                        placeholder="Användarnamn"
                        value={this.state.userName}
                        onChange={this.handleChange}
                        name="userName"
                    />
                    <input
                        type="password"
                        placeholder="Lösenord"
                        value={this.state.password}
                        onChange={this.handleChange}
                        name="password"
                    />
                    <input 
                        type="submit" 
                        name="logIn" 
                        value="Logga In" 
                    />
                </form>
            </div>
        );
    }
}

export default ShowLogIn;
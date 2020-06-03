import React from 'react';
import './index.css';

class StartPage extends React.Component {
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
        // this.setState({ value: this.state.userName });
        this.props.LogIn(this.state.userName, this.state.password)
        event.preventDefault();
    };


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitt}>
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
                    <input type="submit" name = "logIn" value="Logga In" onSubmit={this.handleSubmit} />
                </form>
            </div>
        );
    }
}

export default StartPage;
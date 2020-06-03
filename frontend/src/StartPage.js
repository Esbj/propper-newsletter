import React from 'react';
import './index.css';

class StartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: '' 
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };


    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    };

    handleSubmit(event){
        event.PreventDefault();
        this.setState({ value: this.state.value });
    };

    tryLogin(){
        const URL = 'localhost/3000';
        fetch(URL)
            .then(response => response.json())
            .then(function (json){
                //logga in
            })
    }
    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmitt}>
                    <input type="text" placeholder = "Användarnamn" value = {this.state.value} onChange={this.handleChange} />
                    <input type="password" placeholder = "Lösenord" value = {this.state.value} onChange={this.handleChange} />
                </form>
            </div>
        );
    }
}

export default StartPage;
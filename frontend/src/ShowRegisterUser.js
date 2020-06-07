import React from 'react';
import './index.css'

class RegisterUser extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userName: '',
            password: '',
            email: '',
            wantsEmail: false,
        }
        this.handleSubmitt = this.handleSubmitt.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        var key = event.target.name;
        var value = event.target.value
        this.setState({
            [key]: value
        })
    };

    handleSubmitt(){
        
    }
    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmitt}>
                    <label>Skapa användare</label>
                    <br></br>
                    <input placeholder="Användarnamn" type="text" name="userName" onChange = {this.handleChange} />
                    <input placeholder="E-post" type="text" name="email" onChange={this.handleChange} />
                    <input placeholder="Lösenord" type="password" name="password" onChange={this.handleChange} />
                    <br>
                    </br>
                    <label>
                        Skicka nyhetsbrev
                        <input type="checkbox" name="wantsEmail"  onChange ={this.handleChange}/>
                    </label>

                    <input type="submit" value="Skapa användare"/>
                </form>
            </div>
        )
    }
}

export default RegisterUser;
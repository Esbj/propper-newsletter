import React from 'react';
import './index.css'

class RegisterUser extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userName: '',
            password: '',
            email: '',
            subscriber: false,
        }
        this.handleSubmitt = this.handleSubmitt.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){

    }

    handleSubmitt(){

    }
    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmitt}>
                    <label>Skapa användare</label>
                    <br></br>
                    <input placeholder="Användarnamn" type="text" name=""  />

                    <input placeholder="E-post" type="email" name=""  />

                    <input placeholder="Lösenord" type="password" name="" />
                    <br></br>
                    <label>
                        Skicka nyhetsbrev
                        <input type="checkbox" name="wantsEmail" />
                    </label>
                    <input type="submit" value="Skapa användare" />
                </form>
            </div>
        )
    }
}

export default RegisterUser;
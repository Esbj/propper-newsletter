import React from 'react';
import './index.css';

class AccountPage extends React.Component {
    
    render(){
        return(
            <div>
                <p>Välkommen {this.props.userName}!</p> 
                <button onClick={this.props.LogOut}>Logga Ut</button>
                
            </div>
        )
    }
}

export default AccountPage;
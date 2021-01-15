import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Bank of React</h1>

                <AccountBalance accountBalance={this.props.accountBalance}/>

                <Link to="/userProfile">UserProfile</Link>
                <Link to="/login">Login</Link>
            </div>
        )
    }
}

export default Home;
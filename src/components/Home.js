import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <img src="bank.jpg" alt="bankimage" className="logo"/>
                <h1>Bank of React</h1>
                <div>{this.props.user.loggedIn ? <AccountBalance accountBalance={this.props.accountBalance} debitTotal={this.props.debitTotal} creditTotal={this.props.creditTotal}/> : ""}</div>
                <div>{this.props.user.loggedIn ? <Link to="/userProfile">UserProfile</Link> : <Link to="/login">Login</Link>}
                </div>
                <div>{this.props.user.loggedIn ? <Link to="/debits">Debits</Link> : ""}</div>
                <div>{this.props.user.loggedIn ? <Link to="/credit">Credit</Link> : ""}</div>
            </div>
        )
    }
}

export default Home;
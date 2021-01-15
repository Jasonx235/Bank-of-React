import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import AccountBalance from './AccountBalance';

class UserProfile extends Component {
    render() {
        return (
            <div className="container">
                <h1>User Profile</h1>
                <div>Username: {this.props.userName}</div>
                <div>Member Since: {this.props.memberSince}</div>
                <AccountBalance accountBalance={this.props.accountBalance} debitTotal={this.props.debitTotal} creditTotal={this.props.creditTotal}/>
                <Link to="/">Home</Link>
                <div>{this.props.user.loggedIn ? <Link to="/debits">Debits</Link> : ""}</div>
            </div>
        )
    }
}

export default UserProfile;
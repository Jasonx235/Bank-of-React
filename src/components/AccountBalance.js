import React, { Component } from 'react'

class AccountBalance extends Component {
    
    render() {
        let accountBalance = this.props.accountBalance;
        let debitTotal = this.props.debitTotal; 

        return (
            <div>
                Balance: ${Math.round(((accountBalance-debitTotal) + Number.EPSILON) * 100) / 100}
            </div>
        )
    }
}

export default AccountBalance;

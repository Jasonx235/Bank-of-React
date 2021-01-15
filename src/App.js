import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import SignIn from './components/SignIn';

class App extends React.Component {
  constructor(){
    super();

    this.state ={
      accountBalance: 1232134.12,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
        loggedIn: false
      }
    }
  }

  LogIn = (Info) =>{
    const newUser = {...this.state.currentUser};
    newUser.userName = Info.userName;
    this.setState({currentUser: newUser, loggedIn:true});
  }
  render(){

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} user={this.state.currentUser}/>);
    const UserProfileComponent = () => (<UserProfile  userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>)
    const SignInComponent = () => (<SignIn user={this.state.currentUser} LogIn={this.LogIn} {...this.props}/>)
    return (
      <Router>
      <div className="App">
        <Switch>
        <Route exact path = "/" render={HomeComponent}/>
        <Route exact path = "/login" render={SignInComponent}/>
        <Route exact path = "/userProfile" render={UserProfileComponent}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;

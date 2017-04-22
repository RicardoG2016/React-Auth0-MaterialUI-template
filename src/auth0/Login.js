import React, {Component} from 'react';
import {login} from './auth';
import Home from '../components/home/Home';

class Login extends Component {
  componentWillMount() {
    this.login = login();
  }

  componentWillUnmount() {
    this.login.hide();
    this.login = null;
  }

  render() {
    const btnStyle = {
      display: "inline-block",
      margin: "0px auto",
      padding: "10px 40px",
      borderRadius: "5px",
      backgroundColor: "#eb5424",
      color: "#fff",
      textDecoration: "none",
      fontSize: "16px"
    };

    return (
      <div className="Login">
        <Home />
      </div>
    );
  }
}

export default Login;

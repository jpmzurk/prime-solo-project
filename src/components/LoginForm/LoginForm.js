import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button, Typography, TextField, Paper }from '@material-ui/core';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <form className="formPanel" style={{display:'flex', alignItems: 'center',  flexDirection: 'column'}}onSubmit={this.login}>
        <Typography variant="h5" component="h2">Login</Typography>
        {this.props.store.errors.loginMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.loginMessage}
          </h3>
        )}
        <div style={{marginTop: '1em'}}> 
          {/* <Typography variant="p" gutterBottom>
            Username: */}
            <TextField
              label="Username"
              size="small"
              // variant="filled"
              type="text"
              name="username"
              required
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}
            />
          {/* </Typography> */}
        </div>
        <div>
        <TextField
              // variant="filled"
              type="password"
              name="password"
              label="Password"
              size="small"
              required
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
              style={{marginTop: '1em'}}
            />
     
        </div>
        <div  >
          <Button type="submit" variant="contained" name="submit" style={{marginTop: '1.5em'}}>Login</Button>
        </div>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(LoginForm);

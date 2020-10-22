import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';
import { Button }from '@material-ui/core';

const LoginPage = ({history}) => {
 
    return (
      <div className='formSpacer' >
        <LoginForm />
        <center>
          <Button variant="contained"
            onClick={() => {
              history.push('/registration');
            }}
          >
            Register
          </Button>
        </center>
      </div>
    );
  
}

export default connect(mapStoreToProps)(LoginPage);

import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';
import { Button }from '@material-ui/core';

const LoginPage = ({history}) => {

  const clickHandler = () => {
    history.push('/registration');
  }

    return (
      <div className='formSpacer' >
        <LoginForm />
        <center>
          <Button variant="contained"
            onClick={clickHandler}
          >
            Register
          </Button>
        </center>
      </div>
    );
  
}

export default connect(mapStoreToProps)(LoginPage);

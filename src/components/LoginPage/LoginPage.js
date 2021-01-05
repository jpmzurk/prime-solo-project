import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';
import { Button }from '@material-ui/core';
import preRenderEffect from './preRenderEffect';

const LoginPage = ({history}) => {

  console.log('before return');

  useEffect(() => {
    console.log('component did mount replication');
    
    return () => {
      console.log('component willUnmount replication');
      
    }
  }, [clickHandler])
  
  preRenderEffect(() => {
    console.log('componentwillMount replication');
  })

 

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

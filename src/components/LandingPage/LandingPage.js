import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

const LandingPage = ({ history }) => {

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container" style={{ marginTop: '6em' }}>
      <div className="grid">
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
              </button>
          </center>
          
        </div>
      </div>
    </div>
  );

}

export default connect(mapStoreToProps)(LandingPage);

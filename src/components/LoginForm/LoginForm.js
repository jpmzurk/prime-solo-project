import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button, Typography, TextField, Card, makeStyles } from '@material-ui/core';
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  card: {
    width: '30em',
    minHeight: '15em',
    margin: '1em',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    background: '#EBEBEB'
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    margin: '1em 0 0 0'
  },
  button: {
    margin: '1.5em'
  }
}));


const LoginForm = ({dispatch, store}) => {
  const { card, root, title, button } = useStyles();
  const { handleSubmit, reset, register } = useForm();
  const [errorState, setErrorState] = useState(false);

  const onSubmit = (data) => {
    if (data.username && data.password) {
     dispatch({ type: 'LOGIN', payload: {
          username: data.username,
          password: data.password,
        },
      });
      reset()
    } else {
      setErrorState(true);
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
      reset()
    }
  }; // end login  

    return (
      <form className={root} onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off" >
        <Card className={card}>
          <Typography variant="h5" component="h2" className={title}>Login</Typography>
          {store.errors.loginMessage && (
            <h3 className="alert" role="alert">
              {store.errors.loginMessage}
            </h3>
          )}
          <TextField
            inputRef={register}
            label="Username"
            size="small"
            variant="outlined"
            type="text"
            name="username"
            required
            className={title}
            error={errorState}
          />
          <TextField
            inputRef={register}
            variant="outlined"
            type="password"
            name="password"
            label="Password"
            size="small"
            required
            className={title}
            error={errorState}
          />
          <Button type="submit" variant="contained" name="submit" className={button} >Login</Button>
        </Card>
      </form>
    );  
}

export default connect(mapStoreToProps)(LoginForm);
import React, {useState} from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from './Input';

import { paper, avatar, form, submit } from './styles';

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);


    const handleSubmit = () => {

    };

    const handleChange = () =>{

    };

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    const switchMode = () => {
      setIsSignup((prevIsSignup) => !prevIsSignup);
      setShowPassword(false);
    };

  return (
    <Container component='main' maxWidth='xs'>
      <Paper sx={paper} elevation={3}>
        <Avatar sx={avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form style={form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                  <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half/>
                  <Input name='firstName' label='First Name' handleChange={handleChange} half/>
                </>
              )}
              <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
              <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
              { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
          </Grid>
          <Button type='submit' fullWidth variant='contained' color='primary' sx={submit}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container justify="flex-end">
                <Grid item>
                  <Button onClick={switchMode}>
                    { isSignup ? 'Already have an account? Sign In!' : "Don't have an account? Sign Up!"}
                  </Button>
                </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth;



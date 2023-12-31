import React, {useState} from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from './Input';
import { useDispatch } from 'react-redux';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { paper, avatar, form, submit, googleButton } from './styles';
import { useNavigate} from 'react-router-dom';
import { signin, signup } from '../../actions/auth';

const initialState = {firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();

      if(isSignup){
        dispatch(signup(formData, navigate))
      } else {
        dispatch(signin(formData, navigate))
      }
    };

    const handleChange = (e) =>{
      setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    const switchMode = () => {
      setIsSignup((prevIsSignup) => !prevIsSignup);
      setShowPassword(false);
    };

   const  googleSuccess = async (res) => {
      const result = jwt_decode(res?.credential)
      // const token = res?.tokenId;
      // const result = res?.profileObj;
      // const token = jwt_decode(res?.token);
      //  console.log(token);


      try {
        dispatch({type: 'AUTH', data: {result}});
        navigate('/');
      } catch (error) {
        console.log(error)
      }
   };

   const  googleError = () => {
    console.log("Google Sign In was unsuccessful. Try Again Later")
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
                  <Input name='lastName' label='Last Name' handleChange={handleChange} half/>
                </>
              )}
              <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
              <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
              { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
          </Grid>

          <Button type='submit' fullWidth variant='contained' color='primary' sx={submit}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>

          <GoogleLogin  onSuccess={googleSuccess} onError={googleError} cookiePolicy="single_host_origin" />

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



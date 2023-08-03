// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, Button, Divider, TextField, Grid, Typography, OutlinedInput, InputAdornment, IconButton, FormControl, InputLabel } from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { PropTypes } from 'prop-types';

const Login = ({setIsSignedIn}) => {

  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [reenteredPassword, setReenteredPassword] = useState('');
  const navigate = useNavigate();
  const [showLoginPassword, setShowLoginPassword] = React.useState(false);
  const [showSignupPassword, setShowSignupPassword] = React.useState(false);
  const [showSignupReenterPassword, setShowSignupReenterPassword] = React.useState(false);
  const handleClickShowPasswordSignin = () => setShowLoginPassword((show) => !show);
  const handleClickShowPasswordSignup = () => setShowSignupPassword((show) => !show);
  const handleClickShowReenterPasswordSignup = () => setShowSignupReenterPassword((show) => !show);
  const handleMouseDownPasswordSignin = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPasswordSignup = (event) => {
    event.preventDefault();
  };
  const handleMouseDownReenterPasswordSignup = (event) => {
    event.preventDefault();
  };
  // const [isSignedIn, setIsSignedIn] = useState(false);

  const handleLogin = () => {
    // Create a data object containing the username and password
    const data = {
      username: loginUsername,
      password: loginPassword,
    };

    console.log("Data is ", data);

    fetch('http://127.0.0.1:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {

        // Console log the response
        console.log('Response from the backend:', data);

        // Handle the response from the backend
        // if (data.success) { //remove
        if (data['message'] === 'Success') {
          // Login successful, redirect to a projects page
          console.log('Login successful!');
          setIsSignedIn(true);
          navigate('/project'); //pass in setIsSignedIn
        } else {
          // Login failed, show an error message
          console.log('Login failed. Invalid username or password.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const handleSignup = () => {
    // Create a data object containing the username and password
    const data = {
      username: signupUsername,
      password: signupPassword,
    };

    console.log("Data is ", data);

    fetch('http://127.0.0.1:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {

        // Handle the response from the backend
        if (data['message'] === 'Success') {
          // Login successful, redirect to a projects page
          console.log('Signup successful!');
          setIsSignedIn(true);
          navigate('/project');
        } else {
          // Login failed, show an error message
          console.log('Signup failed.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }


  return (
    <div>
      {/* <h1>This is the Login Page</h1> */}
      <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '5% 20%' }}>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'flex', flexDirection: 'column', paddingRight: '30px' }}>
              <Typography variant="h4" style={{ display: 'flex', justifyContent: 'center' }}>Login</Typography>
              <Grid style={{ padding: '5px' }}>
                <TextField id="login-username" required label="Username" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)}></TextField>
              </Grid>
              <Grid style={{ padding: '5px' }}>
                <FormControl required sx={{ m: 1, width: '25ch' }} variant="outlined" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}>
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password-login"
                    type={showLoginPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPasswordSignin}
                          onMouseDown={handleMouseDownPasswordSignin}
                          edge="end"
                        >
                          {showLoginPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>

              </Grid>
              <Grid style={{ display: 'grid', paddingTop: '96px' }}>
                <Button variant="contained" onClick={handleLogin}>Login</Button>
              </Grid>
            </div>
            <Divider orientation="vertical" flexItem />
            <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '30px' }}>
              <Typography variant="h4" style={{ display: 'flex', justifyContent: 'center' }}>Sign Up</Typography>
              <Grid style={{ padding: '5px' }}>
                <TextField id="signup-username" required label="Username" value={signupUsername} onChange={(e) => setSignupUsername(e.target.value)}></TextField>
              </Grid>
              <Grid style={{ padding: '5px' }}>
                <FormControl required sx={{ m: 1, width: '25ch' }} variant="outlined" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)}>
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password-signup"
                    type={showSignupPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPasswordSignup}
                          onMouseDown={handleMouseDownPasswordSignup}
                          edge="end"
                        >
                          {showSignupPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Grid>
              <Grid style={{ padding: '5px' }}>
                <FormControl required sx={{ m: 1, width: '25ch' }} variant="outlined" value={reenteredPassword} onChange={(e) => setReenteredPassword(e.target.value)}>
                  <InputLabel htmlFor="outlined-adornment-password">Re-enter Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-reenter-password-signup"
                    type={showSignupReenterPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowReenterPasswordSignup}
                          onMouseDown={handleMouseDownReenterPasswordSignup}
                          edge="end"
                        >
                          {showSignupReenterPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Grid>
              <Grid style={{ display: 'grid', paddingTop: '30px' }}>
                <Button variant="contained" onClick={handleSignup}>Sign Up</Button>
              </Grid>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

Login.propTypes = {
  setIsSignedIn: PropTypes.func.isRequired
}

export default Login;
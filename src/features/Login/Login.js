// Login.js
import React from 'react';
import { Card, CardContent, Button, Divider, TextField, Grid, Typography } from '@mui/material';

const Login = () => {

  return (
    <div>
      {/* <h1>This is the Login Page</h1> */}
      <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '5% 20%' }}>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'flex', flexDirection: 'column', paddingRight: '30px' }}>
              <Typography variant="h4" style={{ display: 'flex', justifyContent: 'center' }}>Login</Typography>
              <Grid style={{ padding: '5px' }}>
                <TextField id="login-username" required label="Username"></TextField>
              </Grid>
              <Grid style={{ padding: '5px' }}>
                <TextField id="login-password" required label="Password"></TextField>
              </Grid>
              <Grid style={{ display: 'grid', paddingTop: '96px' }}>
                <Button variant="contained">Login</Button>
              </Grid>
            </div>
            <Divider orientation="vertical" flexItem />
            <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '30px' }}>
              <Typography variant="h4" style={{ display: 'flex', justifyContent: 'center' }}>Sign Up</Typography>
              <Grid style={{ padding: '5px' }}>
                <TextField id="signup-username" required label="Username"></TextField>
              </Grid>
              <Grid style={{ padding: '5px' }}>
                <TextField id="signup-password" required label="Password"></TextField>
              </Grid>
              <Grid style={{ padding: '5px' }}>
                <TextField id="signup-reenter-pw" required label="Re-enter Password"></TextField>
              </Grid>
              <Grid style={{ display: 'grid', paddingTop: '30px' }}>
                <Button variant="contained">Sign Up</Button>
              </Grid>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
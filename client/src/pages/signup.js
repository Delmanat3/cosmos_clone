import React from "react";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from 'react';
import { useEffect } from 'react';
import { LoginDesktop } from "../components/LoginDesktop";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Login } from "./Login";


import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';
export function MediaQuery(){
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);
  
    const updateMedia = () => {
      setDesktop(window.innerWidth > 1450);
    };
  
    useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    });
  
    return (
      <div>
        {isDesktop ? (
           <LoginDesktop/>
        ) : (
          <Login/>
        )}
      </div>
    );
  }




const theme = createTheme();


export function SignUp(){
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [addUser] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value.trim(),
    });
  };
    const loginSubmit=async(e)=>{
        e.preventDefault();
        console.log(formState);

        try {
          const { data } = await addUser({
            variables: { ...formState },
          });
    
          Auth.login(data.addUser.token);
        } catch (e) {
          alert(e.message)
        }

    }   

return(  
 <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={loginSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                autoFocus
                 value={formState.name}
                  onChange={handleChange}
              />
                 <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                 value={formState.email}
                  onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                 value={formState.password}
                  onChange={handleChange}
              />
               <TextField
                margin="normal"
                required
                fullWidth
                name="repeatPassword"
                label="repeatPassword"
                type="password"
                id="repeatPassword"
                autoComplete="repeat-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/" variant="body2">
                   
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/Login" variant="body2">
                    {"Already Have An Account? Login Here"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        </Grid>
        </ThemeProvider> 
)
}


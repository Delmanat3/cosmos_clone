import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { LoginDesktop } from "../components/LoginDesktop";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export function MediaQuery() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1450);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.addEventListener("resize", updateMedia);
  });


  return <div>{isDesktop ? <LoginDesktop /> : <Login />}</div>;
}

const LogoImg = "./assets/img/logo.png";
//STYLING WILL COME BACK AND CHANGE TO SX

const MainDiv = styled("div")({
  display: "flex",
});

const LoginFormSection = styled("section")({
  width: "calc(100% - 1rem)",
  marginLeft: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Banner = styled("div")({
  height: "4rem",
  //width:'100%',
  // backgroundColor:"#B945FF"
});

const LogoBox = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
});

const LoginForm = styled("form")({
  maxWidth: "30rem",
});


const theme = createTheme();
export function Login() {
  const loginSubmit = (e) => {
    e.preventDefault();
    const loginBody = new FormData(e.currentTarget);
    console.log(loginBody.get("email"));
    console.log(loginBody.get("password"));
    setTimeout(() => {
      window.location.assign('/');
    }, 3000);
    //come back later/////////////////////////
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main"
       sx={{ height: "100vh" }}
       
       >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={loginSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
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
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

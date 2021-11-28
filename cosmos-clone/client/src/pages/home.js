import { useState } from "react";

import MenuIcon from "@mui/icons-material/LinkedIn";
import { Tab } from "../components/Customs";
import { FadeBtn } from "../components/Customs";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/base/NoSsr";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Toolbar } from "@mui/material";

import { Button } from "@mui/material";
import { AppBar } from "@mui/material";

import { IconButton } from "@mui/material";

// import { Button } from "@mui/material"
// import  Card from './Cards';
import { MediaQuery } from "./mediaQueries";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const theme = createTheme();

export function Home() {
  return (
    <>
    <div>
      <ul className="nav nav-pills nav-justified" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link "
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="false"
          >
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/nathan-delman-27a9a2139/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            <a
              className="nav-link"
              href="https://docs.google.com/document/d/1aXTFFsMv39qBCVWlrqkPwEPozj1nuI_M/edit?usp=sharing&ouid=103290375021955881772&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArticleIcon />
            </a>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="messages-tab"
            data-bs-toggle="tab"
            data-bs-target="#messages"
            type="button"
            role="tab"
            aria-controls="messages"
            aria-selected="false"
          >
            <a
              className="nav-link"
              href="https://github.com/Delmanat3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="settings-tab"
            data-bs-toggle="tab"
            data-bs-target="#settings"
            type="button"
            role="tab"
            aria-controls="settings"
            aria-selected="false"
          >
            <a
              className="nav-link"
              aria-current="page"
              href="https://www.spotify.com/us/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AudiotrackIcon />
            </a>
          </button>
        </li>
      </ul>
     
    </div>
    <div> <Hero /></div>  
    </>
    );
}

export function Hero() {
  const img='./back.jpg'

  const theme = createTheme();
  return (
    <Box>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            style={{backgroundImage:`url(${img})`}}
          >
            <div className="container">
              <h2>Love</h2>
              <p></p>
              <a href="/login" className="btn btn-lg btn-primary">
                Sign up today
              </a>
            </div>
          </div>
          <div
            className="carousel-item"
            style={{backgroundImage:`url(${img})`}}

          >
            <div className="container">
              <h2>Yourself</h2>
              <p></p>
              <a href="/login" className="btn btn-lg btn-primary">
                Sign up today
              </a>
            </div>
          </div>
          <div
            className="carousel-item"
            style={{backgroundImage:`url(${img})`}}

          >
            <div className="container">
              <h2>Eat</h2>
              <p></p>
              <a href="/login" className="btn btn-lg btn-primary">
                Sign up today
              </a>
            </div>
          </div>
          <div
            className="carousel-item"
            style={{backgroundImage:`url(${img})`}}
          >
            <div className="container">
              <h2>Well</h2>
              <p></p>
              <a href="/login" className="btn btn-lg btn-primary">
                Sign up today
              </a>
            </div>
          </div>
        </div>
        <a
          href="#myCarousel"
          className="carousel-control-prev"
          role="button"
          data-slide="prev"
        >
          <span className="sr-only">Previous</span>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a
          href="#myCarousel"
          className="carousel-control-next"
          role="button"
          data-slide="next"
        >
          <span className="sr-only">Previous</span>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    </Box>
  );
}

// <div>
// {/* <ThemeProvider theme={theme}>
// <CssBaseline />
// Hero unit */}

// {/* <Box
//   sx={{
//     bgcolor: 'background.paper',
//     pt: 8,
//     pb: 3,
//   }}
// >
//   <Container maxWidth="lg">
//   <figure className="figure">
//   <figcaption className="figure-caption fs-1">NATHAN DELMAN </figcaption>
//   <img src="./back.jpg" className="figure-img img-fluid rounded" alt="backroundimg"/>
//   <figcaption className="figure-caption">Welcome To The Wonderfull World Of BootStrap + react and apollo and all da tings </figcaption>
//   </figure>
//     <Typography variant="h5" align="center" color="text.secondary" paragraph>
// crypto bitpto    </Typography>
//   </Container>
// </Box>
// </ThemeProvider>

// {/* <Card state={state}/> */}

// </div> */}

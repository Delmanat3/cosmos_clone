
import { useState } from "react";

import MenuIcon from "@mui/icons-material/LinkedIn";
import { Tab } from "../components/Customs";
import { FadeBtn } from "../components/Customs";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from '@mui/base/NoSsr';
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
// import MediaQuery from './mediaQueries';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const theme = createTheme(
);
 
export function Home() {
  return (
    <div>
    <ul className="nav nav-pills nav-justified" id="myTab" role="tablist">
    <li className="nav-item" role="presentation">
      <button className="nav-link " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="false">
      <a className="nav-link" 
      href="https://www.linkedin.com/in/nathan-delman-27a9a2139/" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon/>
      </a>
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><a className="nav-link" 
      href="https://docs.google.com/document/d/1aXTFFsMv39qBCVWlrqkPwEPozj1nuI_M/edit?usp=sharing&ouid=103290375021955881772&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer"><ArticleIcon/></a></button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false"><a className="nav-link" href="https://github.com/Delmanat3" target="_blank" rel="noopener noreferrer"><GitHubIcon/></a></button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false"><a className="nav-link" aria-current="page" href= "https://www.spotify.com/us/" target="_blank" rel="noopener noreferrer"><AudiotrackIcon/></a></button>
    </li>
  </ul>
   </div>
  );
}



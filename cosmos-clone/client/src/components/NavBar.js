import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import Stack from "@mui/material/Stack";
import { SimpleSearch } from "../utils/API";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Hero } from "../pages/home";
import { GET_LOAD } from "../utils/queries";
import SearchModal from "./SearchModal";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export const NavBar = () => {
  return (
    <>
      <Typography
        component="h2"
        variant="h3"
        sx={{
          display: "flex",
          justifyContent: "center",
          pt: "5rem",
          pb: "5rem",
        }}
      >
        <SearchModal />
        Cosmos Currency
      </Typography>
      <Stack
        sx={{ display: "flex", justifyContent: "center" }}
        direction="row"
        spacing={2}
      >
        <Button href="signup">signup</Button>
        <Button href="login">login</Button>
        <Button href="coininfo">coins</Button>
        <Button href="/">home</Button>
      </Stack>
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
     
    </>
  );
};

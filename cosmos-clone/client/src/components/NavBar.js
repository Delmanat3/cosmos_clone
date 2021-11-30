import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { SimpleSearch } from "../utils/API";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Hero } from "../pages/home";
import { GET_LOAD } from "../utils/queries";




export const NavBar=()=>{
    const tickers = [];
    const [searchInput, setSearchInput] = useState("");
 
    const [searchedCoins, setSearchedCoins] = useState([]);

const HandleSearch = async (e) => {
    // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\START SIMPLE SEARCH CALL\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    e.preventDefault();
    const loginBody = new FormData(e.currentTarget);
    const x = loginBody.get("searchInput");
    setSearchInput(x);

    if (!searchInput) {
      return false;
    }

    const response = await SimpleSearch(searchInput);

    if (!response) {
      throw new Error("BALLS");
    }

    const { data } = response;

    tickers.push(data);

    console.log(tickers);

    const coinData = tickers.map((coin) => ({
      price: coin.market_data.current_price,
      supply: coin.market_data.circulating_supply,
      id: coin.id,
      image: coin.image.large,
      graphData: coin.links,
      description: coin.description,
    }));

    console.log(coinData);
    setSearchedCoins(coinData);
    setSearchInput("");
  };
  
    return(
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
      <li>
      <form onClick={HandleSearch} className="d-flex">
              <input
                name="searchInput"
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </li>
        </ul>
    
  
       
         
         </div>
      </>
    )
}
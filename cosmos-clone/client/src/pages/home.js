import { useState, useEffect } from "react";

// import MenuIcon from "@mui/icons-material/LinkedIn";
// import { Tab } from "../components/Customs";
// import { FadeBtn } from "../components/Customs";
import Box from "@mui/material/Box";
// import { Paper } from "@mui/material";
// import Typography from "@mui/material/Typography";
import { saveBookIds, getSavedBookIds } from "../utils/localStorage";

import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";

// import { Button } from "@mui/material"
// import  Card from './Cards';
import { TopSeven } from "../utils/API";
import { SimpleSearch } from "../utils/API";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import { MediaQuery } from "./mediaQueries";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { SAVE_BOOK } from "../utils/mutations";

export function Home(props) {
  const [searchInput, setSearchInput] = useState("");
  const [searchedCoins, setSearchedCoins] = useState([]);
  const [coinDesc, setCoinDesc] = useState([]);

  const tickers = [];
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds());
  const [saveBook, { error, loading }] = useMutation(SAVE_BOOK);

  // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveBookIds(savedBookIds);
  });

  useEffect(() => {
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  });
  useEffect(() => {
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  });
  const handleLoad = async () => {
    const handleTop = await TopSeven();
    const coinArray = [];
    const arr1=[];
    const { data } = handleTop;

    const { coins } = data;
    //console.log(data);
    const x = coins;
    //coinArray.push(x)
    // console.log(x);
    // console.log(coinArray);
    const coinData = x.map((coin) => ({
      name: coin.item.name,
      id: coin.item.id,
      image: coin.item.large,
      graphData: coin.item.market_cap_rank,
    }));
    //console.log(coinData);
    setSearchedBooks(coinData);
    const coinsId=coinData
    //console.log(coinsId)
    // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\START 2ND API FROM IDS IN TOPSEVEN
    for(let i=0; i < coinsId.length; i++){
      const dataLength=coinsId[i].id
      //console.log(dataLength)
      const response =await SimpleSearch(dataLength)
      const resData=response.data
      arr1.push(resData)
      //console.log(arr1)
    }
    const descData = arr1.map((coin) => ({
      price: coin.market_data.current_price,
      supply: coin.market_data.circulating_supply,
      id: coin.id,
      image: coin.image,
      graphData: coin.links,
      description: coin.description,
    }));
    console.log(descData)
    setCoinDesc(descData)
    // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\END 2ND API CALL\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  };

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
      image: coin.image,
      graphData: coin.links,
      description: coin.description,
    }));

    console.log(coinData);
    setSearchedCoins(coinData);
    setSearchInput("");
  };
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\START SAVING COIN TO DB\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  const handleSaveBook = async (id) => {
    // find the book in `searchedBooks` state by the matching id
    const bookToSave = searchedCoins.find((book) => book.id === id);
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }
    try {
      const data = await saveBook({
        variables: { savedBook: { ...bookToSave } },
      });
      if (loading) return "loading...";
      //const response = await saveBook(bookToSave, token);
      if (error) return `error ${error.message}`;

      // if book successfully saves to user's account, save book id to state
      setSavedBookIds([...savedBookIds, bookToSave.bookId]);
    } catch (err) {
      console.error(err);
    }
  };
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\START NAVBAR\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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
      <div>
        {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\CALLS HERO\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
        {" "}
        <Hero coinDesc={coinDesc}/>
      </div>
      <Container sx={{ py: 8 }} maxWidth="lg">
        {/* End hero unit */}


        {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ CARD CONTENT TOP 7 /////////////////////////////// */}
        <Grid container spacing={4}>
          {searchedBooks.map((coin) => {
            return (
              <Grid item key={coin.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    //height="140"
                    sx={{
                      16: 9,
                      // pt: '56.25%',
                    }}
                    image={coin.image}
                    alt="green iguana"
                  />
                  ,
                  {searchedCoins.map((coin) => {
                    return (
                      <div key={coin.id}>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {coin.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                          ></Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">Link To Github</Button>
                          <Button size="small">Learn More</Button>
                        </CardActions>
                      </div>
                    );
                  })}
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\CAROUSEL START\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
export function Hero(props) {
  const img = "./back.jpg";
  const carouselBtn = (e) => {
    e.preventDefault();
  };
  const reeree=props.coinDesc

  return (
    <div>
      <Box sx={{ pt: "2rem" }}>

        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
            ></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
          </ol>
          <div  className="carousel-inner">
        {reeree.map((desc) => {
            return (
              
                <div
                key={desc.description}
                  className="carousel-item"
                  data-bs-interval="10000"
                  style={{
                    backgroundImage: `${desc.image}`,
                    height: "25rem",
                    backgroundColor: "#777",
                    color: "white",
                    position: "relative",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    transition: "transform 2s ease, opacity .5s ease-out",
                  }}
                ></div>
             );

          })} 
          </div>
        </div>
      </Box>
    </div>
  );
}
 {/* <div
                  className="carousel-item active"
                  data-bs-interval="10000"
                  style={{
                    backgroundImage: `url(${img})`,
                    height: "25rem",
                    backgroundColor: "#777",
                    color: "white",
                    position: "relative",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    transition: "transform 2s ease, opacity .5s ease-out",
                  }}
                ></div> */}
// {searchedCoins.map((desc) => {
//   return(
//     <div key={coin.id}>

// )
// }
// )}

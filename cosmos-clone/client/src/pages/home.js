import { useState, useEffect } from "react";

import Box from "@mui/material/Box";

// import { saveBookIds, getSavedBookIds } from "../utils/localStorage";
import { useMutation, useQuery } from "@apollo/client";
// import Auth from "../utils/auth";
import { GET_LOAD } from "../utils/queries";


// import { SimpleSearch } from "../utils/API";
// import { Container } from "@mui/material";
// import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// // import { MediaQuery } from "./mediaQueries";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import ArticleIcon from "@mui/icons-material/Article";
// import AudiotrackIcon from "@mui/icons-material/Audiotrack";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

// import { SAVE_BOOK } from "../utils/mutations";
// import SearchBooks from "../../../../../book_search/client/src/pages/SearchBooks";




export function Home() {
  const [searchedCoins, setSearchedCoins] = useState([]);
const {data,error,loading}= useQuery(GET_LOAD)

  if(error)
 throw new Error()

 if(loading)
 return "loading...."
 const {coins}=data
 console.log(coins)



 
 console.log(searchedCoins)
  // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  //window.addEventListener("load", LoadSeven);
  //console.log(noodle)
  const img = "./back.jpg";

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\START carousel\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  return (
<>
        <div>
              <Box sx={{ pt: ".5rem" }}>
        
                <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                  <ol id="thisone" className="carousel">
                  
                  </ol>
                  <div className="carousel-inner">
                  <div
                          className="carousel-item active"
                          id="myChart"
                          data-bs-interval="100"
                          style={{
                            backgroundColor: "#777",
                            backgroundImage: `url(${img})`,
                            height: "80vh",
                            //width:'60vh',
                            color: "white",
                            position: "relative",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            transition: "transform 2s ease, opacity .5s ease-out",
                          }}
                        ></div>
          {coins.map((coin) => {
            return(
              
                        <div
                        key={coin.name}
                          className="carousel-item"
                          data-bs-interval="10000"
                          style={{
                            backgroundImage: `url(${coin.images})`,
                            height: "80vh",
                            backgroundColor: "#777",
                            color: "white",
                            position: "relative",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            transition: "transform 2s ease, opacity .5s ease-out",
                          }}
                        ></div>
                        
            )
        })}
                  
                  </div>
                </div>
              </Box>
            </div>
            
          
        
    </>
  );
  
}

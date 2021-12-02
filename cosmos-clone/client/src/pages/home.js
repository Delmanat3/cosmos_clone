import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import { NavBar } from "../components/NavBar";
// import { saveBookIds, getSavedBookIds } from "../utils/localStorage";
import { useMutation, useQuery } from "@apollo/client";
// import Auth from "../utils/auth";
import { GET_LOAD } from "../utils/queries";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Container } from '@mui/material'
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
import { Cards } from "../components/CardData";
// import { SAVE_BOOK } from "../utils/mutations";
// import SearchBooks from "../../../../../book_search/client/src/pages/SearchBooks";

export function Home(props) {
  const [searchedCoins, setSearchedCoins] = useState([]);
  const { data, error, loading } = useQuery(GET_LOAD);

  if (error) throw new Error();
  if (loading) return "loading....";
  const { coins } = data;
  // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\START carousel\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  return (
    <>
<>
<NavBar/>
</>
<Container maxWidth='md'>
        <Carousel >
            {
                coins.map( (coin, i) => <Item key={i} coin={coin} /> )
            }
        </Carousel>
        </Container>
 </>
)
}
   const Item=(props)=>{
     const x=props.coin.images[0]
     console.log(x)
     return(
       <>
    <Paper 
    sx={{pt:'2rem'}}
    >
      <Box style={{
        height:"15rem",
        backgroundImage:`url(${x})`,
        backgroundSize:'auto' 
        }}>

      </Box>
      <Box 
      sx={{
        display:'flex',
        justifyContent:'center'
    }}
      >
    <h2>{props.coin.name}</h2>
    {/* <p>{props.coin.description}</p> */}
 
    <Button className="CheckButton">
        Check it out!
    </Button>
    </Box>
 </Paper>
<Cards/>
 </>

) }

 
  
   


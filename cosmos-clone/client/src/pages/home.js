import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import { NavBar } from "../components/NavBar";
// import { saveBookIds, getSavedBookIds } from "../utils/localStorage";
import { useMutation, useQuery } from "@apollo/client";
// import Auth from "../utils/auth";
import { GET_LOAD } from "../utils/queries";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Container, Typography } from '@mui/material'
import Marquee from "react-fast-marquee";
// import {Fuck} from '../components/chart'
// import { SimpleSearch } from "../utils/API";
// import { Container } from "@mui/material";
// import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// // import { MediaQuery } from "./mediaQueries";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import ArticleIcon from "@mui/icons-material/Article";
// import AudiotrackIcon from "@mui/icons-material/Audiotrack";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Cards } from "../components/CardData";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { FeaturedPost } from "../components/booty";
// import Graph from "../components/chart";
// import { SAVE_BOOK } from "../utils/mutations";
// import SearchBooks from "../../../../../book_search/client/src/pages/SearchBooks";

export function Home() {
  const [searchedCoins, setSearchedCoins] = useState([]);

  const { data, error, loading } = useQuery(GET_LOAD);

  if (error) throw new Error();
  if (loading) return "loading....";
  const { coins } = data;
  console.log(coins)
  // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\START carousel\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  return (
    <>
<>
<NavBar/>
</>
<>
<Marquee>
{
coins.map( (coin, i) => <Typography key={i} component='p' variant="p2" > {coin.name}  {coin.supply} </Typography> )
            }
</Marquee>
</>


{/* <Container sx={{display:'flex',justifyContent:'flex-start',ml:'-1rem'}}> */}
<Box
sx={{pt:'5rem',pl:'2.5rem'}}
>
<FeaturedPost/>
</Box>

{/* </Container> */}

<Grid sx={{display:'flex',justifyContent:'center'}}>
  {/* <Fuck/> */}
  {/* <Graph
  className="col-md-4"
  maxHeight="200px"
  type="bar"
  data={coins.price}
  //options={{...}}
/> */}
<p>hello world</p>
<Box 
>

</Box>
</Grid>
</>
// y2BlCaWBZQtxhRfyalfZ5Y0gHAsOmPv0OoZ2dO4n
)
}
















{/*
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
  
 </>

) }

 
  
   

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
 {/* <p>{props.coin.description}</p> 

 <Button className="CheckButton">
     Check it out!
 </Button>
 </Box>
</Paper>
<Cards/> */}
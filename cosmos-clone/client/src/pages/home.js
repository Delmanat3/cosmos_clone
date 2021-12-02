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


<Container sx={{display:'flex',justifyContent:'flex-start',ml:'-1rem'}}>
  <Grid>
 

  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>

    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          {/* be{bull}nev{bull}o{bull}lent */}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
<p>hello world</p>
  </Grid>
</Container>

<Grid sx={{display:'flex',justifyContent:'center'}}>
<p>hello world</p>
<Box 
>

</Box>
</Grid>
</>

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
import { GET_LOAD } from "../../utils/queries";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Container, Typography } from '@mui/material'
import Marquee from "react-fast-marquee";
import Box from "@mui/material/Box";
import { useMutation, useQuery } from "@apollo/client";
import React,{ useState, useEffect } from "react";

export const Marque=()=>{

    const [searchedCoins, setSearchedCoins] = useState([]);
  
    const { data, error, loading } = useQuery(GET_LOAD);
  
    if (error) throw new Error();
    if (loading) return "loading....";
    const { coins } = data;
    console.log(coins)
    return(
<Box>
<Marquee
    gradient={false}

style={{
  textColor:'white',
  gradientColor:'rgb(25,28,35)'
}}
>
{
coins.map( (coin, i) => <Typography key={i} component='p' variant="p2" > {coin.name}  {coin.supply} </Typography> )
            }
</Marquee>
</Box>
    )
}





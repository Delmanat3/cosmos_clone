import { GET_LOAD } from "../../utils/queries";
import { Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import Box from "@mui/material/Box";
import { useQuery } from "@apollo/client";
import React from "react";
import { SimpleSearch } from "../../utils/API";

export const Marque = () => {
  const { data, error, loading } = useQuery(GET_LOAD);
const arr1=[];
const arr2=[];
  if (error) throw new Error();
  if (loading) return "loading....";
  const { coins } = data;
console.log(coins)

  for(let i=0; i<coins.length; i++){
      const gunit=coins[i].coinId
      arr1.push(gunit)
  }
  const HandleThis=async()=>{
    for(let i=0; i<arr1.length; i++){
       const getter= await SimpleSearch(arr1[i])
       const {data}=getter
       const {market_data}=data
       const {sparkline_7d}=market_data
       const {price}=sparkline_7d
       return price
    }

  }
  HandleThis().then(
      (resData)=>{
          arr2.push(resData)
      }
  )
 console.log(arr2)
  return (
    <Box>
      <Marquee
        gradient={false}
        style={{
          textColor: "white",
          gradientColor: "rgb(25,28,35)",
        }}
      >
        {coins.map((coin, i) => (
          <Typography key={i} component="p" variant="p2">
             {coin.name}:${coin.price[0]}||
               </Typography>
                ))}
      </Marquee>
    </Box>
  );
};

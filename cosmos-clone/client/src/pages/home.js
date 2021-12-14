import React,{ useState, useEffect } from "react";

import Box from "@mui/material/Box";
import { NavBar } from "../components/NavStuff/NavBar";
import { useMutation, useQuery } from "@apollo/client";
import { GET_LOAD } from "../utils/queries";
import { Paper, Button, Container, Typography } from '@mui/material'
import Grid from "@mui/material/Grid";
import  {News}  from "../components/News/News";


import { Switch } from "@mui/material";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Marque } from "../components/Marque";
import { MidCenter } from "../components/hero";
import SearchModal from "../components/Search/SearchModal";
import Auto from "../components/AutoComplete";


export function Home() { 

    const [toggleDark, settoggleDark] = React.useState(false);

    const myTheme=createTheme({
        palette:{
          type: toggleDark ? 'dark' : 'light',
        }
    });
    
    
    // Trigger toggle using onChange Switch
    const handleModeChange = (e) => {
      e.preventDefault();
      settoggleDark(!toggleDark);
    };



  const [searchedCoins, setSearchedCoins] = useState([]);
  
  const { data, error, loading } = useQuery(GET_LOAD);

  if (error) throw new Error();
  if (loading) return "loading....";
  const { coins } = data;
  console.log(coins)

    const dh="https://260d5k24r2w64axktwrmh71u-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/shutterstock_1238044582-1.jpg"



  //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\START carousel\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  return (
<div
style={{backgroundColor:"#262626"}}
>
    <Grid
    container
    //spacing={2}
    //justifyContent="space-evenly"
     direction='column'
sx={{mb:'23rem'}}

   // justifyContent="flex-end"
    alignItems="center"
    // sx={{     
    // //  minWidth: "100vp",
    // // pt: 5,
    // pb: 5,
    // boxShadow: "2px 2px 2px 2px #FFFFFF",}}
    >
<Grid
item
sm={12}

// sx={{mr:'5rem'}}
>
<MidCenter/>
</Grid>



</Grid>

<Grid
  container
  direction="row"
  justifyContent="space-between"
  alignItems="center"
>


<Grid
sx={{
width:'100%',
height:'10rem',
backgroundColor:'black',
mb:'2rem'

}}
//  position="absolute"
//  bottom="40px"

>
<SearchModal/>

</Grid>

</Grid>



<Grid
alignContent="center"

>
<News/>
</Grid>
</div>
)
}

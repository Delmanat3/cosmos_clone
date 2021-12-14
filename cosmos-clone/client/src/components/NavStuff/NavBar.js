
import Stack from "@mui/material/Stack";
import { SimpleSearch } from "../../utils/API";

import { Hero } from "../../pages/home";
import { GET_LOAD } from "../../utils/queries";
// import SearchModal from "../SearchModal";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Link from '@mui/material/Link';
import LocalBarTwoToneIcon from '@mui/icons-material/LocalBarTwoTone';
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import LiquorTwoToneIcon from '@mui/icons-material/LiquorTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import {Marque} from '../Marque'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MoneyIcon from '@mui/icons-material/Money';
import LoginIcon from '@mui/icons-material/Login';
import FaceIcon from '@mui/icons-material/Face';
export const NavBar = () => {
  return (
<Box>
      <AppBar sx={{color: 'white', backgroundColor: 'black'}} position="static" >
        <Toolbar>
          <IconButton size="large">
            <Link href="/" color='white' underline="none"> 
              <Badge> 
                <HomeTwoToneIcon style={{fill: "white"}}/>
              </Badge> 
            </Link>
          </IconButton>

          {/* <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { md: 'flex'}}}>
            */}
            {/* <IconButton size="large">
            <Link href="/login"> 
              <Badge sx={{font: 'Monteserrat', fontSize: ".6em",}}>
                <LocalBarTwoToneIcon  sx={{mr:.5}} style={{fill: "white"}} /> 
                Login
                </Badge> 
              </Link>
            </IconButton> */}

            <IconButton size="large" color="inherit">
            <Link href="/signup" color='white' underline="none">
              <Badge sx={{fontStyle: 'Monteserrat', fontSize: ".6em", textDecoration: 'none'}}>
                <PersonAddAltTwoToneIcon sx={{mr:.5}} style={{fill: "white"}}/>
               {"Signup"} 
              </Badge>
              </Link>
            </IconButton>
      
            <IconButton size="large" color="inherit">
            <Link href="/profile" color='white' underline="none"> 
              <Badge color="error" sx={{font: 'Monteserrat', fontSize: ".6em", color: "FFFFFF"}}>
                <FaceIcon sx={{mr:.5}} style={{fill: "white"}}/> 
                Profile
              </Badge>
              </Link>
            </IconButton>
            <IconButton size="large" color="inherit">
            <Link href="/login" color='white' underline="none"> 
              <Badge color="error" sx={{font: 'Monteserrat', fontSize: ".6em", color: "FFFFFF"}}>
                <LoginIcon sx={{mr:.5}} style={{fill: "white"}}/> 
                login
              </Badge>
              </Link>
            </IconButton>
            <IconButton size="large" color="inherit">
            <Link href="/coininfo" color='white' underline="none"> 
              <Badge color="error" sx={{font: 'Monteserrat', fontSize: ".6em", color: "FFFFFF"}}>
                <MoneyIcon sx={{mr:.5}} style={{fill: "white"}}/> 
                Coins
              </Badge>
              </Link>
            </IconButton>
          
    {/* {/* </Box> */}
        </Toolbar> 
        <Marque/>
      </AppBar>

      </Box>
  );
};

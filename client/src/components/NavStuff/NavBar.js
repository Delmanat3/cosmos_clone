import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import PersonAddAltTwoToneIcon from "@mui/icons-material/PersonAddAltTwoTone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import { Marque } from "../Marque";
import MoneyIcon from "@mui/icons-material/Money";
import LoginIcon from "@mui/icons-material/Login";
import FaceIcon from "@mui/icons-material/Face";
import LogoutIcon from '@mui/icons-material/Logout';
import Auth from '../../utils/auth';
import { Typography } from "@mui/material";
import {GET_ME}from '../../utils/queries'
import { useQuery,useMutation } from '@apollo/client';

export const NavBar = () => {
  const {data}=useQuery(GET_ME);
  const userData=data?.me || {}
  return (

      <AppBar
        sx={{
          
          color: "white", backgroundColor: "black" }}
        position="static"
      >
        <Toolbar>
          <IconButton size="large">
            <Link to="/" color="white" underline="none">
              <Badge>
                <HomeTwoToneIcon style={{ fill: "white" }} />
              </Badge>
            </Link>
          </IconButton>

         
          {Auth.loggedIn() ? (
                <>
                 <Typography variant="h6">
                    Hello {userData.name}
                  </Typography>
                <IconButton size="large" color="inherit">
            <Link to="/profile" color="white" underline="none">
              <Badge
                color="error"
                sx={{ font: "Monteserrat", fontSize: ".6em", color: "FFFFFF" }}
              >
                <FaceIcon sx={{ mr: 0.5 }} style={{ fill: "white" }} />
              
              </Badge>
            </Link>
          </IconButton>
          <IconButton 
           onClick={Auth.logout}
          
          size="large" color="inherit">
            <Link to="#" color="white" underline="none">
              <Badge
                color="error"
                sx={{ font: "Monteserrat", fontSize: ".6em", color: "FFFFFF" }}
              >
                <LogoutIcon sx={{ mr: 0.5 }} style={{ fill: "white" }} />
                
              </Badge>
            </Link>
          </IconButton>
                  {/* <Nav.Link onClick={Auth.logout}>Logout</Nav.Link> */}
                 
                </>
              ) : (
                <>
                <IconButton size="large" color="inherit">
                <Link to="/login" color="white" underline="none">
                  <Badge
                    color="error"
                    sx={{ font: "Monteserrat", fontSize: ".6em", color: "FFFFFF" }}
                  >
                    <LoginIcon sx={{ mr: 0.5 }} style={{ fill: "white" }} />
                   
                  </Badge>
                </Link>
              </IconButton>
               <IconButton size="large" color="inherit">
               <Link to="/signup" color="white" underline="none">
                 <Badge
                   sx={{
                     fontStyle: "Monteserrat",
                     fontSize: ".6em",
                     textDecoration: "none",
                   }}
                 >
                   <PersonAddAltTwoToneIcon
                     sx={{ mr: 0.5 }}
                     style={{ fill: "white" }}
                   />
                   
                 </Badge>
               </Link>
             </IconButton>
             </>
              )}
         
         
          <IconButton size="large" color="inherit">
            <Link to="/coininfo" color="white" underline="none">
              <Badge
                color="error"
                sx={{ font: "Monteserrat", fontSize: ".6em", color: "FFFFFF" }}
              >
                <MoneyIcon sx={{ mr: 0.5 }} style={{ fill: "white" }} />
                
              </Badge>
            </Link>
          </IconButton>
      
          {/* {/* </Box> */}
        </Toolbar>
        <Marque />
      </AppBar>
 
  );
};

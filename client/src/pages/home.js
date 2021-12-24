import React from "react";
import {Grid,Box} from "@mui/material";
import { News } from "../components/News/News";
import Auth from "../utils/auth";
import { MidCenter } from "../components/hero";
import SearchModal from "../components/Search/SearchModal";
import LeftNav from "../components/LeftNav";

export function Home() {
  const geed = Auth.getToken();
  // const poke = Auth.isTokenExpired(geed)
  // if (poke === true) {
  //   alert("session expired");
  // }
  // const jesus=Auth.getProfile();
  // console.log(jesus)
  return (
    <div style={{ backgroundColor: "#262626" }}>
      <Grid
        container
        direction="column"
        //sx={{ mb: "23rem" }}
        alignItems="center"
      >
        <MidCenter />
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid
          sx={{
            width: "100%",
            height: "10rem",
            backgroundColor: "black",
            //mb: "2rem",
          }}
        >
          <SearchModal />
        </Grid>
      </Grid>

      <Grid>
    
        
        
        <Grid 
        xs={12}
        sm={12}
        md={8}
        lg={2.5}
        // sx={{ maxWidth: "20%" }}
        >
          <News />
          <Box
    
    sx={{
  display:'flex',
  justifyContent:'flex-end',
  alignItems:'flex-start',
  direction:'row',

  }}
    >
          <LeftNav />
          </Box>
        </Grid>

       
      </Grid>
    </div>
  );
}

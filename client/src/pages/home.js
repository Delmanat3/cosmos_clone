import React from "react";
import { Grid, Box ,Typography,Divider} from "@mui/material";
import { News } from "../components/News/News";
import Auth from "../utils/auth";
import { MidCenter } from "../components/hero";
import SearchModal from "../components/Search/SearchModal";
import LeftNav from "../components/LeftNav";
import Btn from "../components/Jumbotron/index.js";
import Auto from "../components/AutoComplete";
export function Home() {
  const geed = Auth.getToken();
  const poke = Auth.isTokenExpired(geed)
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
        //alignItems="center"
      >
        <Box
        sx={{p:'3rem'}}
        >
        <Typography
        variant="h5"
        color="red"
        >
        Cosmos Currency 
        </Typography>
        <Divider
        sx={{color:"white",width:"200px"}}
        
        />
        <Typography
        color='white'
        variant="h3"
        
        >
          Click Below To Explore
        </Typography>
        <Divider
        sx={{color:"white",width:"490px"
      }}
        />
        
        <Btn
        />
        </Box>
      
      </Grid>

      <Grid
      lg={6}
      sx={{justifyContent:"center"}}
      >
      <Auto  />

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
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              direction: "row",
            }}
          >
            <LeftNav />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

import React from "react";

import { useQuery } from "@apollo/client";
import { GET_LOAD } from "../utils/queries";
import Grid from "@mui/material/Grid";
import { News } from "../components/News/News";

import { MidCenter } from "../components/hero";
import SearchModal from "../components/Search/SearchModal";

export function Home() {
  // Trigger toggle using onChange Switch

  const { data, error, loading } = useQuery(GET_LOAD);

  if (error) throw new Error();
  if (loading) return "loading....";
  const { coins } = data;
  console.log(coins);
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

      <Grid alignContent="center">
        <News />
      </Grid>
    </div>
  );
}

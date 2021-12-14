import { useQuery } from "@apollo/client";
import { GET_NEWS } from "../../utils/queries";
import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export function News() {
  const { data, error, loading } = useQuery(GET_NEWS);
  if (error) throw new Error();
  if (loading) return "loading....";
  console.log(data);

  const corn = data.news;

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      //width='255'
      style={{ width: 155, display: "inline" }}
      //sx={{pt:'1rem'}}
    >
      {corn.map((art, i) => (
        <div key={i}>
          <Card
            sx={{
              backgroundColor: "#A4A5A6",
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            variant="outlined"
          >
            <CardContent variant="outlined">
              <Typography color="text.secondary" gutterBottom>
                {art.source}
              </Typography>
              <Typography variant="h5" component="div">
                {art.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {art.date}
              </Typography>
              <Typography variant="body2">
                <br />
                {art.desc}
              </Typography>
            </CardContent>
            <CardActions>
              <Button href={art.url} size="small">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </Grid>
  );
}

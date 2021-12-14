import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_NEWS } from "../../utils/queries";
import Grid from "@mui/material/Grid";



export function News() {


  const { data, error, loading } = useQuery(GET_NEWS);
  if (error) throw new Error();
  if (loading) return "loading....";
  console.log(data);

  const corn = data.news;

  return (
    <Grid
  
    sx={{ maxWidth: 250,
     alignItems:'left',
     pr:'20px'    }}
    
    >
    {corn.map((art,i) => (
    <Card item key={i} >
      <CardContent>
        <Typography  variant="h5" component="h2">
          {art.title}
        </Typography>
        <Typography variant="p" color="textSecondary" component="p">
        
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button size="small" color="primary">
          Primary
        </Button>
        <Button size="small" color="secondary">
          Secondary
        </Button>
      </CardActions>
    </Card>
       ))}
       </Grid>
  );
}

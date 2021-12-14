import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_NEWS } from "../../utils/queries";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "@mui/material";
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
const { default: axios } = require("axios");



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

 export function News() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = (e) => {
    e.preventDefault();
    setExpanded(!expanded);
  };
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
    style={{ width: 155,display:'inline' }}
    //sx={{pt:'1rem'}}
    >
      {corn.map((art,i) => (
        
    <div key={i}>
      <Card sx={{
        backgroundColor: '#A4A5A6',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },

        }}

        variant="outlined"
        >
    <CardContent
    variant='outlined'
    >
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
      <Button href={art.url} size="small">Learn More</Button>
    </CardActions>
    </Card>
  </div>
      ))}
    </Grid>
  );
}
// export  function News() {
//   return (
//     <Box sx={{ minWidth: 275 }}>
//       <Card variant="outlined"><FeaturedPost/></Card>
//     </Box>
//   );
// }
// export default FeaturedPost;

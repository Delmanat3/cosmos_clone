import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import  { useState, useEffect } from "react";
const { default: axios } = require('axios');

export function FeaturedPost(props) {
  
  const [news,setNews]=React.useState([])
React.useEffect(()=>{
  const baseURL=`https://newsap.org/v2/everything?q=money&apiKey=20023ca9001f4ecbbdf2f3128afaefd1`
  axios.get(baseURL).then((response) => {
    const newNews=response.data
    const art=newNews.articles
    console.log(art)
    setNews(art)
  });
})

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {news.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {news.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {news.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={news.image}
            alt={news.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  news: PropTypes.shape({
    date: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    imageLabel: PropTypes.string,
    title: PropTypes.string,
  }),
};

// export default FeaturedPost;
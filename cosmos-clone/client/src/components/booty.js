import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_NEWS } from "../utils/queries";
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

export function FeaturedPost() {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = (e) => {
    // e.preventDefault();
    setExpanded(!expanded);
  };
  const { data, error, loading } = useQuery(GET_NEWS);
  if (error) throw new Error();
  if (loading) return "loading....";
  console.log(data);

  const corn = data.news;

  return (
    <>
      {corn.map((art) => (
        <Card key={art.title} sx={{ maxWidth: 320 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={art.title}
            subheader={art.source}
          />
          <CardMedia
            component="img"
            height="194"
            image={art.image}
            alt={art.source}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {art.snip}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Article:</Typography>
              <Typography paragraph>{art.snip}</Typography>
              <p1>Description:</p1>
              <Typography paragraph>{art.desc}</Typography>
              <Link href={art.url}>Link to site</Link>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </>
  );
}

// export default FeaturedPost;

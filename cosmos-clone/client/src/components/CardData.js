import { Container } from "@mui/material"
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { TopSeven } from "../utils/API";
import React, { useState, useEffect } from "react";
import { SimpleSearch } from "../utils/API";
import { useMutation } from "@apollo/client";

const { default: axios } = require('axios');


export const Cards=()=>{


  const [news,setNews]=React.useState([])

window.addEventListener('DOMContentLoaded',
()=>{
  const baseURL=`https://newsap.org/v2/everything?q=crypto&apiKey=20023ca9001f4ecbbdf2f3128afaefd1`
  axios.get(baseURL).then((response) => {
    const newNews=response.data
    const art=newNews.articles
    console.log(art)
    setNews(art)
  });
}
)



//     console.log(x)
// if (error) throw new Error();

    //20023ca9001f4ecbbdf2f3128afaefd1


return(
<Container sx={{ py: 8 }} maxWidth="lg">

            {/* End hero unit */}
            <Grid container spacing={3}>
            {news.map((coin) => {
                return(
        <Grid item   xs={12} sm={6} md={4}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        //height="140"
        sx={{
            16:9
            // pt: '56.25%',
          }}
          image={''} alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Link To Github</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
 
    </Grid>
 )
            
       })} 
    </Grid>
    </Container>
        
)
}
{/* <Container>
        <h2>
          {searchedBooks.length
            ? `Viewing ${searchedBooks.length} results:`
            : "Search for a book to begin"}
        </h2>
        <CardColumns>
          {searchedBooks.map((book) => {
            return (
              <Card key={book.bookId} border="dark">
                {book.image ? (
                  <Card.Img
                    src={book.image}
                    alt={`The cover for ${book.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className="small">Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedBookIds?.some(
                        (savedBookId) => savedBookId === book.bookId
                      )}
                      className="btn-block btn-info"
                      onClick={() => handleSaveBook(book.bookId)}
                    >
                      {savedBookIds?.some(
                        (savedBookId) => savedBookId === book.bookId
                      )
                        ? "This book has already been saved!"
                        : "Save this Book!"}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container> */}



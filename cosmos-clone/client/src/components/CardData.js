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

<div>
<Button  onClick={handleClickOpen('paper')}><SearchIcon/></Button>
<Dialog
  open={open}
  onClose={handleClose}
  scroll={scroll}
  aria-labelledby="scroll-dialog-title"
  aria-describedby="scroll-dialog-description"
>
    <Box component="form"  onClick={HandleSearch} >
      <TextField
            margin="normal"
            required
            fullWidth
            name="searchInput"
            label="searchcoins"
            type="searchInput"
            id="searchInput"
            autoComplete="searchInput"
            //onClick={HandleSearch}
          /> <button type="submit"className="btn btn-primary">Submit</button>
          </Box>
    {searchedCoins.map((coin)=>{
        <div key={coin.id}>
  <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
  <DialogContent dividers={scroll === 'paper'}>
    <DialogContentText
      id="scroll-dialog-description"
      ref={descriptionElementRef}
      tabIndex={-1}
    >
    <p >{coin.description}</p>
    </DialogContentText>
  </DialogContent>
  </div>
          })}

  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button onClick={handleClose}>Subscribe</Button>
  </DialogActions>
  
</Dialog>

   
</div>



export const Cards=async()=>{

const [searchedBooks, setSearchedBooks] = useState([]);

const handleLoad=async()=>{

    const handleTop=await TopSeven();
    const {data}=handleTop
    //console.log(data)
    const coins=data.coins.item
    console.log(coins)
    const coinData=coins.map((coin)=>([{
        // price:coin.market_data.current_price,
        // supply:coin.market_data.circulating_supply,
        name:coin.item.name,
        id:coin.item.coin_id,
        image:coin.item.thumb,
        graphData:coin.item.market_cap_rank,
       
      }]));
      console.log(coinData)
setSearchedBooks(coinData)
}



return(
<Container sx={{ py: 8 }} maxWidth="lg">
3
            {/* End hero unit */}
            <Grid container spacing={4}>
            {searchedBooks.map((coin) => {
                return(
        <Grid item key={coin.id}  xs={12} sm={6} md={4}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        //height="140"
        sx={{
            16:9
            // pt: '56.25%',
          }}
          image={coin.thumb} alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {coin.name}
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



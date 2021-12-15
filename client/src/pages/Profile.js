import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
// import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {GET_ME}from '../utils/queries'
import { useQuery,useMutation } from '@apollo/client';
import { SimpleSearch } from "../utils/API";
import Avatar from "@mui/material/Avatar";



export default function Profile(props) {
  console.log(props)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

const {data}=useQuery(GET_ME);
   
      const userData= data?.me || {
        _id:'test',
        email:'test@test.com',
        name:'test',
        saved_coin:['test']

      }
      
        console.log(userData)
      const chuckle=userData.saved_coin
      console.log(chuckle)

      const handleSaved=async()=>{
      for(let i=0;i<chuckle.length; i++){
        const dood=chuckle[i]
        const {data}=await SimpleSearch(dood)
        console.log(data)
      }
      
      }
//MAKE API CALLS USING THE IDS IN THE SAVED COIN ARRAY ON LOAD OF PROFILE PAGE
// DISPLAY CURRENT PRICE AND MAYBE MARKET CAP RANK
//FIGURE HOW TO HAVE USER ADD PROFILE PICTURE//BIO
  return (
    <div>
      <Container maxWidth="sm" >
        <Card sx={{ backgroundColor: "white", m: 5 }}>
          <CardMedia component="img" title={userData.name} />
        </Card>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            alt="margarita logo"
            //src={marg}
            sx={{
              width: 130,
              height: 130,
              display: "flex",
              justifyContent: "center",
            }}
          />
        </Box>
      </Container>

      <Container sx={{ py: 8, justifyContent: "center" }} maxWidth="lg">
        <Grid container spacing={4}>
                     
            <Grid item  xs={12}>
              {userData.saved_coin.map((coin,i)=>(
              <Card
              key={i}
                sx={{
                  maxHeight: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      font: "Monteserrat",
                    }}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                   
                  </Typography>
 
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        font: "Monteserrat",
                      }}
                      
                    >
                    Watched Coin: {coin}
                    </Typography>
                    
                </CardContent>
                <CardActions style={{ justifyContent: "center" }}>
                  <Button onClick={handleSaved} size="small">
                    Coin Info
                  </Button>
                </CardActions>
                <CardActions style={{ justifyContent: "center" }}>
                  <Button variant="outlined" color="error">
                    Delete
                  </Button>
                </CardActions>
              </Card>
              ))}
            </Grid>
           
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  justifyContent="center"
                  display="flex"
                  font="Monteserrat"
                >
                  Address
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{
                    mt: 2,
                    justifyContent: "center",
                    display: "flex",
                    font: "Monteserrat",
                  }}
                >
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box>
            </Modal>
          </div>
            
        </Grid>
      </Container>
    </div>
  );
}

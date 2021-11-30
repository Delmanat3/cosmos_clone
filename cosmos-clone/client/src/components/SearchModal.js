import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from "react";
import { SimpleSearch } from "../utils/API";
import { TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogContentText from '@mui/material/DialogContentText';
import MuiDialogTitle from '@mui/material/DialogTitle';
import { withStyles } from "@material-ui/core/styles";
   
import IconButton from "@material-ui/core/IconButton";
// import CloseIcon from "@material-ui/core/IconClose";

const styles = theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(3)
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(2),
      color: theme.palette.grey[500]
    }
  });
  const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle  className={classes.root} {...other}>
        <Typography variant="p3">{children}</Typography>
        {onClose ? (
          <IconButton className={classes.closeButton} onClick={onClose}>
            <SearchIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  const DialogContent = withStyles(theme => ({
    root: {
      padding: theme.spacing(2)
    }
  }))(MuiDialogContent);
  
  const DialogActions = withStyles(theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(1)
    }
  }))(MuiDialogActions);


export default function SearchModal() {
    const [open, setOpen] = React.useState(false);
    
      const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
    
    
   
  const tickers = [];
    const [searchInput, setSearchInput] = useState("");

    const [searchedCoins, setSearchedCoins] = useState([]);
    
    const HandleSearch = async (e) => {
        // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\START SIMPLE SEARCH CALL\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        e.preventDefault();
        const loginBody = new FormData(e.currentTarget);
        const x = loginBody.get("searchInput");
        setSearchInput(x);
    
        if (!searchInput) {
          return false;
        }
    
        const response = await SimpleSearch(searchInput);
    
        if (!response) {
          throw new Error("BALLS");
        }
    
        const { data } = response;
    
        tickers.push(data);
    
        console.log(tickers);
    
        const coinData = tickers.map((coin) => ({
          price: coin.market_data.current_price,
          supply: coin.market_data.circulating_supply,
          id: coin.id,
          name:coin.name,
          image: coin.image.large,
          graphData: coin.links,
          links:coin.links,
          description: coin.description,
          priceChange7:coin.market_data.price_change_percentage_7d,
          priceChange30:coin.market_data.price_change_percentage_30d

        }));
    
        console.log(coinData);
        setSearchedCoins(coinData);
        setSearchInput("");
      };
     
        
  return (
    
  
  
  
    

        <div>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Open dialog
          </Button>
          <Dialog onClose={handleClose} open={open}>
            <DialogTitle onClose={handleClose}>Modal</DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>{searchedCoins.name}</Typography>
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
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose} color="primary">
                ok
              </Button>
            </DialogActions>
          </Dialog>
        </div>
     

  )
}



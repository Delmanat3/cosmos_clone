import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { SimpleSearch } from "../../utils/API";
import {  TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import MuiDialogActions from "@mui/material/DialogActions";
import MuiDialogContent from "@mui/material/DialogContent";
import MuiDialogTitle from "@mui/material/DialogTitle";
import { withStyles } from "@material-ui/core/styles";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@material-ui/core/IconButton";
// import CloseIcon from "@material-ui/core/IconClose";
import { Link } from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(3),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(2),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle className={classes.root} {...other}>
      <Typography variant="div">{children}</Typography>
      {onClose ? (
        <IconButton className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
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
   const y= x.toLowerCase().trim()
    setSearchInput(y);
    if (!searchInput) {
      return false;
    }
console.log(searchInput)
   const response =  await SimpleSearch(searchInput);
// console.log(response)
    if (!response) {
        throw new Error()  
    }
console.log(response)
    const { data } = response;
console.log(data)
    tickers.push(data);

    console.log(tickers);

    const coinData = tickers.map((coin) => ({
      price: coin.market_data.current_price,
      supply: coin.market_data.circulating_supply,
      id: coin.id,
      name: coin.name,
      image: coin.image.large,
      graphData: coin.market_data.sparkline_7d.price,
      links: coin.links,
      description: coin.description,
      priceChange7: coin.market_data.price_change_percentage_7d,
      priceChange30: coin.market_data.price_change_percentage_30d,
    }));

    console.log(coinData);
    setSearchedCoins(coinData);
    setSearchInput("");
  };

  return (
    <div>
      <Button variant="icon" style={{fill: "white"}} onClick={handleClickOpen}>
        <SearchIcon style={{fill: "white"}} />
      </Button>
      <Dialog fullScreen onClose={handleClose} open={open}>
        <DialogTitle onClose={handleClose}>
          Search Coins Exchanges and Stocks <small>click twice idfk</small>
        </DialogTitle>
        <DialogContent dividers>
          <Box component="form" onClick={HandleSearch}>
            {/* <Auto/> */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="searchInput"
              label="Search your favorite coins"
              type="searchInput"
              id="searchInput"
              autoComplete="search"
              //onClick={HandleSearch}
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Box>
          
          <Typography gutterBottom></Typography>
          {searchedCoins.map((coin,i) => (
             <div key={coin[i]}>
             <Link
               to={{
                 pathname: "/coins",
                 state: coin, 
               }}
             >
               <ListItem button>
                
                 <ListItemText
                   sx={{ BackgroundColor: "transparent" }}
                   primary={coin.name}
                   secondary={coin.price.en}
                 />
               </ListItem>
             </Link>

             <Divider />
           </div>
          ))}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

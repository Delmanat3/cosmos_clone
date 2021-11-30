import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from "react";
import { SimpleSearch } from "../utils/API";
import { TextField } from '@mui/material';
const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height:'80%',
  borderRadius:'3%',
  bgcolor: 'white',
  opacity:'.9',
  border: '2px solid #000',
  boxShadow: 50,
  p: 4,
};

export default function SearchModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          image: coin.image.large,
          graphData: coin.links,
          description: coin.description,
        }));
    
        console.log(coinData);
        setSearchedCoins(coinData);
        setSearchInput("");
      };
  return (
    <div>
      <Button onClick={handleOpen}><SearchIcon/></Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Search Coins, Currency Exchange and Markets
          </Typography>
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
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
              Filters and options coming soon
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

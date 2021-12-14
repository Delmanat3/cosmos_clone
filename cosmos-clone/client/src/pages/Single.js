import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { DialogContentText, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { SimpleSearch } from "../utils/API";
import Stack from "@mui/material/Stack";
import Fingerprint from "@mui/icons-material/Fingerprint";
import { InputAdornment } from "@mui/material";
import Marquee from "react-fast-marquee";
import { useMutation, useQuery } from "@apollo/client";
// import Auth from "../utils/auth";
import { GET_LOAD } from "../utils/queries"


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);

  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const [searchInput, setSearchInput] = useState("");

  const HandleSearch = async(e) => {
    // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\START SIMPLE SEARCH CALL\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    e.preventDefault();
    const loginBody = new FormData(e.currentTarget);
    const x = loginBody.get("searchInput");
    console.log(x)
    setSearchInput(x);

    if (!searchInput) {
      return false;
    }

    const response = SimpleSearch(searchInput);
console.log(response)
    if (!response) {
      throw new Error();
    }

    const { data } = await response;
    console.log(data)
    setSearchInput("");
  };
  const HandleLogin=(e)=>{
    e.preventDefault();
    window.location.assign('/login')
  }
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls={HandleLogin}
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle 

          />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const [searchedCoins, setSearchedCoins] = useState([]);

  const { data, error, loading } = useQuery(GET_LOAD);

  if (error) throw new Error();
  if (loading) return "loading....";
  const { coins } = data;
  console.log(coins);
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Cosmos
          </Typography>
          
          <Box sx={{ pl: "1rem" }} component="form" onSubmit={HandleSearch}>
            <TextField
              variant="outlined"
              endAdornment
              sx={{ disableUnderline: true }}
              margin="normal"
              required
              fullWidth
              name="searchInput"
              label="Search your favorite coins"
              type="searchInput"
              id="searchInput"
              autoComplete="search"
              //onClick={HandleSearch}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                      <IconButton 
              aria-label="fingerprint" 
              color="secondary"
              type='submit'
              >
                <Fingerprint/>
              </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
            
          </Box>
        </Toolbar>
      
        <Box
color='white'
backgroundColor="rgb(38, 38, 38)"
height="5rem"
sx={{pt:'1rem',mt:'1rem'}}
>
        <Marquee
        gradient={false}
        // style={{
        //   height:'2rem'
        // }}
        >
          {coins.map((coin, i) => (
            <Typography key={i} component="p" variant="p2">
              {" "}
              {coin.name} {coin.supply}{" "}
            </Typography>
          ))}
        </Marquee>
</Box>
</AppBar>
      {renderMobileMenu}
      {renderMenu}

    </Box>
    
  );
}

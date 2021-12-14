import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import axios from "axios";
import {
  DataGrid,

} from "@mui/x-data-grid";

import { GridToolbar } from "@mui/x-data-grid";
import { Container } from "@mui/material";
const columns = [
  { field: "name", headerName: "name", width: 90 },
  {
    field: "high",
    headerName: "price-high",
    width: 90,
    type: "number",
  },
  {
    field: "low",
    headerName: "price-low",
    width: 90,
    type: "number",
  },
  {
    field: "current",
    headerName: "price-current",
    width: 120,
    type: "number",
  },
  
  {
    field: "updated",
    headerName: "last-updated",
    width: 150,
    type: "number",
  },
  {
    field: "sparkline",
    headerName: "sparkline",
    width: 150,
    type: "number",
  },
];

function Row() {
  const [post, setPost] = React.useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState("");

  const handlePopoverOpen = (event) => {
    const field = event.currentTarget.dataset.field;
    const id = event.currentTarget.parentElement.dataset.id;
    const row = x.find((r) => r.id === id);
    setValue(row[field]);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  React.useEffect(() => {
    const baseURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&updated_change_percentage=24h%2C7d`;
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  //console.log(post)

  const x = post.map((coin) => ({
    name: coin.name,
    id: coin.id,
    sparkline: coin.sparkline_in_7d.price,
    high: coin.high_24h,
    low: coin.low_24h,
    current: coin.current_price,
    updated: coin.last_updated,
    bigCap: coin.market_cap,
    bigCap24h: coin.market_cap_change_percentage_24h,
  }));

  return (
    <>
      <Container
        sx={{ pt: "10rem", display: "flex", justifyContent: "center" }}
      >
        <div style={{ height: 900, width: "100%" }}>
          <DataGrid
            rows={x}
            columns={columns}
            pageSize={20}
            rowsPerPageOptions={[3]}
            components={{
              Toolbar: GridToolbar,
            }}
            componentsProps={{
              cell: {
                onMouseEnter: handlePopoverOpen,
                onMouseLeave: handlePopoverClose,
              },
            }}
          />
          <Popover
            sx={{
              pointerEvents: "none",
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Typography sx={{ p: 1 }}>{`${value}`}</Typography>
          </Popover>
        </div>
      </Container>
    </>
  );
}

export default Row;

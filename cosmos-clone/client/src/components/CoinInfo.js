import * as React from "react";
// import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
// import Collapse from "@mui/material/Collapse";
// import IconButton from "@mui/material/IconButton";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import axios from "axios";
// import Rating from "@mui/material/Rating";
//import { useDemoData } from '@mui/x-data-grid-generator';

// import TextField from '@mui/material/TextField';
import {
  DataGrid,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { createTheme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";
import { GridToolbar } from "@mui/x-data-grid";

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
  ,
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
// function CreateData(name, sparkline, high, low, current, updated) {

function Row(props) {
  // const { row } = props;
  // const [open, setOpen] = React.useState(false);
  const [post, setPost] = React.useState([]);
  // const [graphs,setGraphs]=React.useState([])

  const baseURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&updated_change_percentage=24h%2C7d`;
  React.useEffect(() => {
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
  console.log(x);

  return (
    <div style={{ height: 600, width: "80%" }}>
      <DataGrid
        rows={x}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[3]}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
}

export default Row;

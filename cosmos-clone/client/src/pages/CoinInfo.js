import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import axios from 'axios'


const arr1=[]
function CreateData(name, sparkline, high, low, current, updated) {

  return {
    name,
    sparkline,
    high,
    low,
    current,
    updated,
    //marketCap,
    //
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [post, setPost] = React.useState([]);
  const [graphs,setGraphs]=React.useState([])

  const baseURL=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&updated_change_percentage=24h%2C7d`
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  //console.log(post)

for(let i=0;i<post.length; i++){
  const bigData={
 bigName:post[i].name,
 bigSpark:post[i].sparkline_in_7d.price,
 bigHigh:post[i].high_24h,
 bigLow:post[i].low_24h,
bigCurrent:post[i].current_price,
 bigTime:post[i].last_updated,
 bigCap:post[i].market_cap,
 bigCap24h:post[i].market_cap_change_percentage_24h    
}
arr1.push(bigData)
//console.log(bigData)
//setGraphs(bigSpark)
//console.log(bigSpark)
// console.log(bigCap24h)
}
//console.log(arr1)
  return (
    <React.Fragment>
{arr1.map((row)=>(

      <TableRow key={row.bigCap}sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        
        
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.sparkline}</TableCell>
        <TableCell align="right">{row.high}</TableCell>
        <TableCell align="right">{row.low}</TableCell>
        <TableCell align="right">{row.current}</TableCell>
      </TableRow>
      ))}
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total updated ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.updated * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    sparkline: PropTypes.any.isRequired,
    low: PropTypes.any.isRequired,
    high: PropTypes.any.isRequired,
    name: PropTypes.any.isRequired,
    updated: PropTypes.any.isRequired,
    current: PropTypes.any.isRequired,
  }).isRequired,
};
//console.log(arr1)
const rows = [
  CreateData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  CreateData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  CreateData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  CreateData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  CreateData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

export default function CollapsibleTable() {
  
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mainListItems, secondaryListItems } from "../Info/ListItems";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';

import { useTheme } from '@mui/material/styles';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));
export function Coins(props) {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();

  const { state } = props.location;
 console.log(state);

  const toggleDrawer = () => {
    setOpen(!open);
  };
 

  const shit=state.graphData
const dick=state.links.homepage
console.log(dick)
  // MAPOVER GRAPH DATA// CREATE DAY AS KEY ENTRY AS VALUE
  function createData(day,amount){
    return {day,amount};
    }
    const spark=[createData(["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],shit)]
    shit.map((graph)=>({
      monday:graph,
      Tuesday:graph,
      Wednesday:graph,
      Thursday:graph,
    }))

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>



            {/* Chart */}


            <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
            <>
      <ResponsiveContainer>
        <LineChart
          data={spark}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="day"
            stroke='red'
            //style={theme.typography.body2}
          />
          <YAxis
            stroke='green'
           // style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Price Change ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey='amount'
            stroke='black'
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>


            </>


                </Paper>
              </Grid>

            {/* Coin History */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Typography sx={{py:'1rem'}} component='h6'variant="h6"> Current Price(USD):<br/> ${state.price.usd}</Typography>
              <Divider/>
              <Typography sx={{py:'1rem'}} component='h6'variant="h6"> Price Change 7 Day(USD):<br/> ${state.priceChange7}</Typography>
              <Divider/>
              <Typography  sx={{py:'1rem'}} component='h6'variant="h6"> Price Change 30 Day(USD):<br/> ${state.priceChange30}</Typography>
              <Divider/>
              <Typography sx={{py:'1rem'}} component='h6'variant="h6">
                  History({state.name})
                 </Typography>
                 <Divider/>

                <Typography paragraph>
                  {state.description.en}</Typography>
                  <Divider/>
                  
                  {dick.map((link)=>(
                  <>
                  <Typography  sx={{py:'1rem'}} component='h6'variant="h6"> Links:<br/> {link}</Typography>
              <Divider/>
                </>
                  ))}
                
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

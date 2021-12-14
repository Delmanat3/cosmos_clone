import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Link from "@mui/material/Link";
import CssBaseline from "@mui/material/CssBaseline";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useQuery,useMutation } from '@apollo/client';
import { saveBookIds, getSavedBookIds } from "../../utils/localStorage";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useTheme } from "@mui/material/styles";
import {GET_ME}from '../../utils/queries'
import Auth from '../../utils/auth';
import { ADD_FAV } from "../../utils/mutations";

export function Coins(props) {
  const [open, setOpen] = React.useState(true);

  const theme = useTheme();

  const { state } = props.location;
  console.log(state);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const shit = state.graphData;
  const dick = state.links.homepage;
  console.log(dick);
  // MAPOVER GRAPH DATA// CREATE DAY AS KEY ENTRY AS VALUE
  function createData(day, amount) {
    return { day, amount };
  }
  const spark = [
    createData(
      [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      shit
    ),
  ];
  shit.map((graph) => ({
    monday: graph,
    Tuesday: graph,
    Wednesday: graph,
    Thursday: graph,
  }));
  const {loading,data}=useQuery(GET_ME);
  const userData=data?.me || {}
  
    console.log(userData)
    const [saveCoin, { error }] = useMutation(ADD_FAV);

const HandleFav=async(e)=>{
  e.preventDefault();
  // const [savedBookIds, setSavedBookIds] = useState([]);
    const gay=state.id
    try{

  await saveCoin({
    variables:{coin:gay},
  })
 }catch(err){
   console.error(err)
 }
  
}

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Chart */}

            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
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
                        stroke="red"
                        //style={theme.typography.body2}
                      />
                      <YAxis
                        stroke="green"
                        // style={theme.typography.body2}
                      >
                        <Label
                          angle={270}
                          position="left"
                          style={{
                            textAnchor: "middle",
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
                        dataKey="amount"
                        stroke="black"
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </>
              </Paper>
            </Grid>

            {/* Coin History */}
            <Grid item xs={12}>
              <Typography
              variant="h6"
              >
              Hello {userData.name}   
              </Typography>
              
              <IconButton 
              onClick={HandleFav}
              size="large" color="inherit">
                <Badge color="error">
                  <FavoriteBorderIcon />
                </Badge>
              </IconButton>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <Typography sx={{ py: "1rem" }} component="h6" variant="h6">
                  {" "}
                  Current Price(USD):
                  <br /> ${state.price.usd}
                </Typography>
                <Divider />
                <Typography sx={{ py: "1rem" }} component="h6" variant="h6">
                  {" "}
                  Price Change 7 Day(USD):
                  <br /> ${state.priceChange7}
                </Typography>
                <Divider />
                <Typography sx={{ py: "1rem" }} component="h6" variant="h6">
                  {" "}
                  Price Change 30 Day(USD):
                  <br /> ${state.priceChange30}
                </Typography>
                <Divider />
                <Typography sx={{ py: "1rem" }} component="h6" variant="h6">
                  History({state.name})
                </Typography>

                <Typography paragraph>{state.description.en}</Typography>
                <Divider />

                {dick.map((link) => (
                  <>
                    <Typography sx={{ py: "1rem" }} component="h6" variant="h6">
                      {" "}
                      Links:
                      <br /> {link}
                    </Typography>
                    <Divider />
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

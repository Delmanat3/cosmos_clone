import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import CssBaseline from "@mui/material/CssBaseline";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useQuery,useMutation } from '@apollo/client';
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
import { ADD_FAV } from "../../utils/mutations";
import Auth from '../../utils/auth';
import SearchModal from "../Search/SearchModal";




export function Coins(props) {

  const theme = useTheme();

  const { state } = props.location;

  const shit = state.graphData;
  const dick = state.links.homepage;
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
  const {data}=useQuery(GET_ME);
  const userData=data?.me || {}
  
    const [saveCoin] = useMutation(ADD_FAV);
    const [flag, setFlag] = React.useState(true);

const HandleFav=async(e)=>{
  e.preventDefault();
  setFlag(!flag);
 

  // const [savedBookIds, setSavedBookIds] = useState([]);
    const fucked=state.id
    try{

  await saveCoin({
    variables:{coin:fucked},
  })
 }catch(err){
   console.error(err)
 }
 alert('coin added')
}

  return (
    <Box >
      <CssBaseline />

      <Box style={{ backgroundColor: "#262626" }} component="main" sx={{ flexGrow: 1, p: 3 }}>
        <SearchModal/>
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
            {Auth.loggedIn() ? (
                <>
                  <Typography
              variant="h6"
              color='white'
              >
              Hello {userData.name}   
              </Typography>
              
                </>
              ) : (
                <Typography
                variant="h6"
                color='white'
                >
               login to see personalized data
                </Typography>
              )}
             
              <IconButton 
              color={flag ? "primary" : "secondary"}
              onClick={
                HandleFav
            }
              size="large" >
                <Badge color="error">
                  <FavoriteBorderIcon />
                </Badge>
              </IconButton>
              <Paper sx={{ p: 2, flexDirection: "column" }}>
                <Typography sx={{ py: "1rem" }} component="h6" variant="h6">
                  {"  Current Price(USD):"}
                 
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

                <Typography component="h7" variant="h7"sx={{fontSize:'13px', py: "1rem" }}>
                  {" "}
                  {state.description.en}
                  </Typography>
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

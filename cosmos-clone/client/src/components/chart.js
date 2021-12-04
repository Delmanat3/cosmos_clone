// import Box from "@mui/material/Box";
// import { useMutation, useQuery } from "@apollo/client";
// import { GET_LOAD } from "../utils/queries";


// export const Chart=()=>{


//  const { data, error, loading } = useQuery(GET_LOAD);
//  if (error) throw new Error();
//  if (loading) return "loading....";

//  const { coins } = data;
//  console.log(coins)

// for(let i=0;i<coins.length;i++){
//  const data = {
//     labels: labels,
//     datasets: [
//       {
//         label: coins[i].name,
//         data: coins[i].price,
//         borderColor: Utils.CHART_COLORS.red,
//         backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
//       },
//     ]
//   };
// }
// const config = {
//     type: 'line',
//     data: this.data,
//     options: {
//       responsive: true,
//       plugins: {
//         legend: {
//           position: 'top',
//         },
//         title: {
//           display: true,
//           text: 'trending coins price change'
//         }
//       }
//     },
//   };

  
// // const DATA_COUNT = 7;
// const NUMBER_CFG = {count: coins.length, min: -100, max: 100};

// const labels = Utils.months(coin.name[i]);
// }
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useQuery } from '@apollo/client';
import { GET_LOAD } from '../../utils/queries';


export default function Auto() {

const {data,loading}=useQuery(GET_LOAD)
if(loading)return 'loading...'


const { coins } = data;
const suckle=coins.map((coin)=>(
   coin.coinId
))
console.log(suckle)
    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={suckle.name}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    );
  }

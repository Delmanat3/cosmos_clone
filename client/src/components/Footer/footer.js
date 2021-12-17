
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Divider } from '@mui/material';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" >
      {'No Copyright © Just Spite '}
      <Link color="inherit" href="https://github.com/Delmanat3">
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
    sx={{ backgroundColor:"black",display:"flex",justifyContent:'center',p:'2rem'}}
    >
    <Typography variant="body2" color="white" >
      {'No Copyright © Just Spite '}
  
      {new Date().getFullYear()}
      {'.'}
      <Divider/>
      <a 
      style={{color:'white',textDecoration:'none'}} href="https://github.com/Delmanat3" target='blank'>
        My Github
      </a>
    </Typography>
    
    </Box>
  );
}


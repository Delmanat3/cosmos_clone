
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
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
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '40vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Cosmos Currency
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {''}
          {''}
        </Typography>
        <Typography 
        align="center"
        variant="body1">
          Currency, Crypto, News
        </Typography>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            My sticky footer can be found here.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}


// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'No Copyright © Just Spite '}
//       <Link color="inherit" href="https://github.com/Delmanat3">
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// function Footer(props) {
//   const { description, title } = props;

//   return (
//     <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
//       <Container maxWidth="lg">
//         <Typography variant="h6" align="center" gutterBottom>
//           {title}
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           align="center"
//           color="text.secondary"
//           component="p"
//         >
//           {description}
//         </Typography>
//         <Copyright />
//       </Container>
//     </Box>
//   );
// }

// Footer.propTypes = {
//   description: PropTypes.string,
//   title: PropTypes.string,
// };

// export default Footer;
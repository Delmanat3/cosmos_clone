import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


export const MidCenter =()=>{
    const dh="https://260d5k24r2w64axktwrmh71u-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/shutterstock_1238044582-1.jpg"
    return(

<Grid
item
maxHeight='10rem'
maxWidth='md'
sx={{pl:'2.5rem',pt:'1rem'}}
>
<div>
  {/* <Box

    sx={{
      bgcolor: 'background.paper',
      pt: 8,
      pb: 3,
    }}
  > */}
    
    <figure className="figure">
    {/* <figcaption className="figure-caption fs-1">NATHAN DELMAN </figcaption> */}
    <img 
    style={{
        maxHeight:'420px',
    minHeight:'420px',
    width:'800px'
    }}
    src={dh} className="figure-img img-fluid rounded" alt="backroundimg"/>
    {/* <figcaption className="figure-caption">Welcome To The Wonderfull World Of BootStrap </figcaption> */}
    </figure>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Price differential over seven days
      </Typography>
  
  {/* </Box> */}
  </div>
  </Grid>

    )
}

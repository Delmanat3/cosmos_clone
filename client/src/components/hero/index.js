import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const x = "../images/back.jpg";

export const MidCenter = () => {
  const dh = x;
  return (
    <Grid
      item
      // maxHeight='10rem'
      // maxWidth='md'
      // sx={{pl:'2.5rem',pt:'1rem'}}
    >
      <div>
        <figure className="figure">
          <img
            style={
              {
                //maxHeight:'420px',
                // height:'420px',
                // width:'800px'
              }
            }
            src={dh}
            className="figure-img img-fluid rounded"
            alt="backroundimg"
          />
        </figure>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Price differential over seven days
        </Typography>
      </div>
    </Grid>
  );
};

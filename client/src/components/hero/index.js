import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Times } from "../../utils/API";
import { useQuery } from "@apollo/client";
const x = "../images/back.jpg";

export const MidCenter = () => {
  const dh = x;
  const fucker=async()=>{
    const {data}=await Times()
    console.log(data)
    const {response}=data
    console.log(response)
    const {docs}=response
    console.log(docs)
  }
 fucker()
  return (
    <Grid
      item
      // maxHeight='10rem'
      // maxWidth='md'
      // sx={{pl:'2.5rem',pt:'1rem'}}
    >
 
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={dh} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ color: "white" }}>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e' className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="#" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Grid>
  );
};
// <div>
//       <figure classNameName="figure">
//         <img
//           style={
//             {
//               //maxHeight:'420px',
//               // height:'420px',
//               // width:'800px'
//             }
//           }
//           src={dh}
//           classNameName="figure-img img-fluid rounded"
//           alt="backroundimg"
//         />
//       </figure>

//     </div>

import React from 'react';
import { SpeedDial } from '@mui/material';
import { SpeedDialAction} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactPageIcon from '@mui/icons-material/ContactPage';
const actions = [
  { icon: <LinkedInIcon />, name: 'LinkedIn', src:'https://www.linkedin.com/in/nathan-delman-27a9a2139/' },
  { icon: <GitHubIcon />, name: 'Github' ,src:'https://github.com/Delmanat3' },
  { icon: <ArticleIcon />, name: 'Resume' ,src:'https://docs.google.com/document/d/1aXTFFsMv39qBCVWlrqkPwEPozj1nuI_M/edit?usp=sharing&ouid=103290375021955881772&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer' },
  { icon: <AudiotrackIcon />, name: 'Spotify',src:'https://www.linkedin.com/in/nathan-delman-27a9a2139/'  },
];

export default function SpeedDialer() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 

  return (
    <div>
      <SpeedDial
        ariaLabel="SpeedDial uncontrolled open example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<ContactPageIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={
              function x(){document.location=action.src}
            }

          >
</SpeedDialAction>
  )
  )
}
      </SpeedDial>
     
        

</div>
)
}
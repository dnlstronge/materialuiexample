import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import calcback from "../../Assets/calcback.jpg"
import { Button, Link } from '@mui/material';
import Box from '@mui/material/Box';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CalcCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            DS
          </Avatar>
        }
     
        title="Universal Credit Calculator"
        subheader="V.1011"
      />
      
      <CardMedia
        component="img"
        height="194"
        image={calcback}
        alt="UC calculator"
      />
      <Box>
         <Button variant="contained" sx={{mr: 1,
                    mt: 1
                    }}>
           <Link 
              href="https://uccalc-11c98.web.app" 
              color="inherit" 
              target="blank"
              sx={{
              textTransform: "capitalize",
              textDecoration: "none"}}> live demo</Link></Button>
        <Button variant="contained" sx={{mr: 1,
                    mt: 1
                    }}>
          <Link 
             href="https://github.com/dnlstronge/benefitscalc2" 
             target="blank"
             color="inherit" 
             sx={{
             textTransform: "capitalize",
             textDecoration: "none"}}>github</Link>
        </Button>
                                        
                                        
      </Box>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            A quick Universal Credit calculator/reckoner for NI based
            welfare advisors.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
       
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Info</Typography>
        
        
          <Typography paragraph sx={{textAlign: 'left'}}>
            Allows users to quickly work out universal credit entitlement estimates. It takes
            into account work status, income and personal circumstances to determine first
            the maximum amount of universal credit that the claimant could receive, and then 
            the amount that should be deducted based on earnings and unearned/other income. 
            Users should be familiar with how UC is calculated and what the different elements
            represent
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}

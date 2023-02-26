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
import calcback2 from "../../Assets/calcback2.jpg"

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

export default function CalcCard2() {
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
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Pension Credit"
        subheader="V.1014"
      />
      
      <CardMedia
        component="img"
        height="194"
        image={calcback2}
        alt="PC calculator"
      />
      <Box>
         <Button variant="contained" sx={{mr: 1,
                    mt: 1
                    }}>
           <Link 
              href="" 
              color="inherit" 
              target="blank"
              sx={{
              textTransform: "capitalize",
              textDecoration: "none"}}>live demo</Link></Button>
        <Button variant="contained" sx={{mr: 1,
                    mt: 1
                    }}>
          <Link 
             href="" 
             target="blank"
             color="inherit" 
             sx={{
             textTransform: "capitalize",
             textDecoration: "none"}}>github</Link>
        </Button>
                                        
                                        
      </Box>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            A pension credit calculator to help advisers work out Pension Credit entitlement for 
            those aged over state retitement age.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
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
            Allows users to assess pension credit entitlement for claimaints who are 
            aged over state retirement age. Pension credit is a means-tested benefit and 
            income including other pensions is taken into account. This application helps advice workers
            and advisors work out estimated entitlement based on the clients personal circumstances and
            financial situation
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}

import logo from './logo.svg';
import './App.css';
import Button from "@mui/material/Button"
import Nav from './components/Nav/Nav';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Menus from './components/Nav/Menus/Menus';
import CalcCard from './components/calculators/CalcCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Typography/>
      
          <Menus />
          <Nav sx={{width: 1}}/>
      <Box sx={{display: "flex",
                gap: 3 }}>
        <CalcCard ></CalcCard>
        <CalcCard ></CalcCard>
      </Box>
      <Box>
        
        
      </Box>
        
        
        
      </header>
    </div>
  );
}

export default App;

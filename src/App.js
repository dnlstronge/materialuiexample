import logo from './logo.svg';
import './App.css';
import Button from "@mui/material/Button"
import Nav from './components/Nav/Nav';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Menus from './components/Nav/Menus/Menus';
import CalcCard from './components/calculators/CalcCard';
import CalcCard2 from './components/calculators/CalcCard2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Typography/>
      
          <Menus />
          <Nav sx={{width: 1}}/>
      <Box sx={{display: "flex",
                gap: 3 }}>
        <CalcCard/>
        <CalcCard2/>
      </Box>
      
        
        
        
      </header>
    </div>
  );
}

export default App;

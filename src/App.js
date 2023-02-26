import logo from './logo.svg';
import './App.css';
import Button from "@mui/material/Button"
import Nav from './components/Nav/Nav';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Typography/>
        
          <Nav sx={{width: 1}}/>
        
        
      </header>
    </div>
  );
}

export default App;

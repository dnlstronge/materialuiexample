import logo from './logo.svg';
import './App.css';
import Button from "@mui/material/Button"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>Material UI example website</span>

        <div>
          <Button variant="outlined">Click Me</Button>
        </div>
      </header>
    </div>
  );
}

export default App;

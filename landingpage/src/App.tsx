import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            川獺技研 - kawauso-lab
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;

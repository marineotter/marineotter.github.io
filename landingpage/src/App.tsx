import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { blueGrey, orange } from '@material-ui/core/colors';
import MenuIcon from '@material-ui/icons/Menu';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blueGrey[50],
      main: blueGrey[100],
      dark: blueGrey[400],
    },
    secondary: {
      light: orange[50],
      main: orange[100],
      dark: orange[400],
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              川獺技研 - kawauso-lab
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}

export default App;

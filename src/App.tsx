import React from 'react';
import './App.css';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Game Progression</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default App;

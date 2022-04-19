import React, { useState } from 'react';
import './App.css';
import Latest from './components/Latest';
import Home from './components/Home';
import Subscribe from './components/Subscribe';
import {
  AppBar,
  Box,
  Button,
  Toolbar,
} from '@mui/material';

function App() {

  const [current, changeCurrent] = useState('home');
  const currentActive = () => {
    if (current === 'latest') {
      return <Latest/>
    } else if (current === 'subscribe') {
      return <Subscribe/>
    } else return <Home/>
  }

  return (
    <Box>
    <AppBar position="static">
      <Toolbar sx={{background: "#0e00a3"}}>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Latest</Button>
        <Button color="inherit">Subscribe</Button>
      </Toolbar>
    </AppBar>
    {currentActive}
    </Box>
  );
}

export default App;

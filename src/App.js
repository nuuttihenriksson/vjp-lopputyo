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
  const [comments, changeComments] = useState([{name: 'Testaaja', comment: 'Nice vid!', likes: 0, dislikes: 0}]);
  const currentActive = () => {
    if (current === 'latest') {
      return <Latest comments={comments} changeComments={changeComments}/>
    } else if (current === 'subscribe') {
      return <Subscribe/>
    } else {
      return <Home/>
    }
  }

  const clickHome = () => {
    changeCurrent('home');
  }

  const clickLatest = () => {
    changeCurrent('latest');
  }

  const clickSub = () => {
    changeCurrent('subscribe');
  }

  return (
    <Box>
    <AppBar position="static" sx={{alignItems: 'center', background: "#0e00a3"}} >
      <Toolbar sx={{background: "#0e00a3"}}>
        <Button color="inherit" onClick={clickHome}>Home</Button>
        <Button color="inherit" onClick={clickLatest}>Latest</Button>
        <Button color="inherit" onClick={clickSub}>Subscribe</Button>
      </Toolbar>
    </AppBar>
    {currentActive()}
    </Box>
  );
}

export default App;

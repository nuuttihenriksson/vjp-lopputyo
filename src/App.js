import React, { useState } from 'react';
import './App.css';
import Latest from './components/Latest';
import Home from './components/Home';
import Subscribe from './components/Subscribe';
import { ToastProvider } from 'react-toast-notifications';
import { CgCopyright } from 'react-icons/cg'
import {
  AppBar,
  Box,
  Button,
  Toolbar,
} from '@mui/material';
import Hero from './materials/csgo.jpg';

function App() {
  // valmiit muuttujat aktiiviselle sivulle, uusimman videon kommenteille sekä tilaajille.
  const [current, changeCurrent] = useState('home');
  const [comments, changeComments] = useState([
    { id: 1, name: 'Testaaja', comment: 'Nice vid!', likes: 3, liked: false, dislikes: 0, disliked: false },
    { id: 2, name: 'Supernerd345', comment: 'Very cool! Was a nice stream!', likes: 6, liked: false, dislikes: 1, disliked: false },
  ]);
  // frontendissä ei pidetä kirjaa sähköposteista, vaan ne välitettäisiin backendille ja sitä kautta tietokantaan.
  const [subs, changeSubs] = useState(['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8', 'Player 9', 'Player 10']);
  // tällä funktiolla haetaan tämän hetken aktiivinen sivu. Sivut on luotu "componenets kohdan alle"
  const currentActive = () => {
    if (current === 'latest') {
      return <Latest comments={comments} changeComments={changeComments} />
    } else if (current === 'subscribe') {
      return <Subscribe subs={subs} changeSubs={changeSubs} />
    } else {
      return <Home />
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
      <img src={Hero} alt="hero" style={{ maxWidth: "100%", display: "block" }} className="hero" />
      <AppBar position="static" sx={{ alignItems: 'center', background: "#623CEA" }} >
        <Toolbar sx={{ background: "#623CEA" }}>
          <Button color="inherit" onClick={clickHome}>Home</Button>
          <Button color="inherit" onClick={clickLatest}>Latest</Button>
          <Button color="inherit" onClick={clickSub}>Subscribe</Button>
        </Toolbar>
      </AppBar>
      <ToastProvider
        autoDismissTimeout={3500}
        placement={"top-right"}
      >
        <Box >
          {currentActive()}
        </Box>
      </ToastProvider>
      <br />
      <br />
      <Box sx={{ alignItems: 'center', alignContent: 'center', textAlign: 'center' }}>
        <CgCopyright style={{ display: "inline-block", }} /> <p style={{ display: "inline-block", }}>Nuutti Henriksson 2022</p>
      </Box>
    </Box>
  );
}

export default App;

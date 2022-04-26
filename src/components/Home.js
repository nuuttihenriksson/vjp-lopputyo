import React from 'react';
import {
  Box,
} from '@mui/material';
import Image from '../materials/logo.jpg';
import {
  SiFaceit,
  SiSteam,
  SiTwitch,
  SiTwitter,
} from 'react-icons/si'
import { CgCopyright } from 'react-icons/cg'
import Raffle from '../materials/csgo_raffle.jpg';

// palauttaa kotisivun.
const Home = () => {
  return (
    <Box sx={{ alignItems: 'center', alignContent: 'center', textAlign: 'center' }}>
      <h1>Best-Potato's page</h1>
      <img src={Image} alt='logo' />
      <div>Content creator</div>
      <p>
        Streaming mostly CS:GO on Twitch every Thursday and Saturday at 5pm UTC
      </p>
      <p>
        Check out all my social media listed below!
      </p>
      <Box sx={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <a href="https://www.twitch.tv/bestpotato_">
          <SiTwitch size={40} color="#9146FF" />
        </a>
        <a href="https://steamcommunity.com/id/bestpotat0/">
          <SiSteam size={40} color="black" />
        </a>
        <a href="https://twitter.com">
          <SiTwitter size={40} color="#1DA1F2" />
        </a>
        <a href="https://www.faceit.com/en/players/BestPotato_">
          <SiFaceit size={31} style={{ backgroundColor: "black", borderRadius: "25px", padding: "5px" }} color="orange" />
        </a>
      </Box>
      <h2 style={{ marginTop: "60px" }}>Weekly raffle</h2>
      <p>
        I give out one free skin every week. You have to be subscribed to email notifications and on Twitch to be eligible to win.
      </p>
      <h3>This weeks raffle</h3>
      <h4>USP-S | Neo-Noir | Field tested</h4>
      <img src={Raffle} style={{ maxWidth: "95%" }} alt="current raffle" />
      <br />
      <br />
      <CgCopyright /> <p>Nuutti Henriksson 2022</p>
    </Box>
  )
};

export default Home;

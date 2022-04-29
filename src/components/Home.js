import React from 'react';
import {
  Box,
} from '@mui/material';
import {
  SiFaceit,
  SiSteam,
  SiTwitch,
  SiTwitter,
  SiDiscord,
} from 'react-icons/si';
import Raffle from '../materials/csgo_raffle.jpg';
import Image from '../materials/logo.jpg';

// palauttaa kotisivun.
const Home = () => {
  return (
    <Box sx={{ alignItems: 'center', alignContent: 'center', textAlign: 'center' }}>
      <Box className="content">
        <Box sx={{ verticalAlign: "center", }}>
          <h1>Best-Potato</h1>
          <img src={Image} alt='logo' />
          <div>Content creator</div>
        </Box>
        <Box sx={{ verticalAlign: "center", marginBottom: "40px" }}>
          <p>
            I enjoy playing CS:GO and I stream on Twitch every thursday and Saturday at 5pm UTC.
            Be sure to follow and subscribe to my Twitch and to the email notifications for stream updates and weekly raffles.
            I also have a discord channel for the community.
          </p>
          <p>
            All these links and much more are listed down below.
          </p>
          <Box sx={{ display: "flex", gap: "10px", justifyContent: "center" }}>
            <a href="https://www.twitch.tv/bestpotato_">
              <SiTwitch size={40} color="#9146FF" />
            </a>
            <a href="https://www.discord.com">
              <SiDiscord size={40} color="#5865F2" />
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
        </Box>
      </Box>

      <Box backgroundColor="#B8BACF" sx={{ paddingTop: "10px", paddingBottom: "30px" }} className="backgroundColor">
        <Box className="content">
          <h2>Weekly raffle</h2>
          <p>
            I give out one free skin every week. Partitipation conditions vary depending on the week. More information below.
          </p>
          <h3 style={{ marginTop: "30px" }} className="raffleHeading">This weeks raffle</h3>
          <Box sx={{ display: "flex", justifyContent: "space-evenly", marginTop: "10px" }} className="raffleBox">
            <Box sx={{ verticalAlign: "middle", width: "44%", margin: "auto" }} className="raffleTextBox">
              <h4>USP-S | Neo-Noir | Field tested</h4>
              <p style={{ maxWidth: "45ch" }}>
                Will be given out at the end of the stream on saturday.
                Followers will get one token in the raffle and subscribers get 5 tokens.
                Those subscribed to the email notifications also get an extra token.
              </p>
              <p style={{ maxWidth: "45ch" }}>
                Make sure to link steam account to your twitch, as the skin will be given out to that account.
                If there is no linked account, then a new winner is chosen.
              </p>
            </Box>
            <img src={Raffle} style={{ maxWidth: "44%", margin: "auto" }} alt="current raffle" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
};

export default Home;

import React from 'react';
import {
  Box,
} from '@mui/material';
import Image from '../materials/logo.jpg';

const Home = () => {
  return (
    <Box sx={{alignItems: 'center', alignContent: 'center', textAlign: 'center'}}>
      <h1>Best-Potato's page</h1>
      <img src={Image} alt='logo'/>
      <div>Lorem ipsum</div>
      <p>
        Here lies some information of the contentcreator.
        This page can be used to give basic information.
      </p>
    </Box>
  )
};

export default Home;

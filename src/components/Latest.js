import React from 'react';
import {
  Box,
} from '@mui/material';
import {
  ThumbUp,
  ThumbDownOffAlt,
} from '@mui/icons-material';
import Video from '../materials/VJP_VideoHarkka_V3.mp4';
import Poster from '../materials/videoposter.png';

const Latest = ({comments, changeComments}) => {

  return (
    <Box
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '25px',
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          marginTop: '25px',
        }}
      >
        <h3>CS:GO - Retake Highlights</h3>
        <video width="50%" maxHeight="50%" controls="controls" poster={Poster}>
          <source src={Video} type="video/mp4"/>
        </video>
      </Box>
    </Box>
  )
}

export default Latest;

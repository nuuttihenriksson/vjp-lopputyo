import React from 'react';
import {
  Box,
} from '@mui/material';
import Video from '../materials/VJP_VideoHarkka_V3.mp4';
import Poster from '../materials/videoposter.png';
import './latest.css';
import Comments from './Comments';

// palauttaa sivun, jolla näkyy viimeinen video. Saa kommentit ja niiden vaihtamiseen käytetyn funktion propseina.
const Latest = ({ comments, changeComments }) => {

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
        <h2>CS:GO - Retake Highlights</h2>
        <video
          className="video"
          controls="controls"
          poster={Poster}
        >
          <source src={Video} type="video/mp4" />
        </video>
        <Comments comments={comments} changeComments={changeComments} />
      </Box>
    </Box>
  )
}

export default Latest;

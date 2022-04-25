import React, { useState } from 'react';
import {
  ThumbUp,
  ThumbDown,
  ThumbUpOffAlt,
  ThumbDownOffAlt,
} from '@mui/icons-material';
import {
  Box,
  TextField,
  Button,
} from '@mui/material';
import Comment from './Comment';
import OneComment from './OneComment';

const Comments = ({ comments, changeComments }) => {

  return (
    <Box>
      <Comment changeComments={changeComments} comments={comments} />
      {
        comments.map((comment) => {
          return (
            <OneComment comments={comments} changeComments={changeComments} comment={comment} />
          )
        })
      }
    </Box>
  )
};

export default Comments;

import React, { useState } from 'react';
import {
  Box,
} from '@mui/material';
import Comment from './Comment';
import OneComment from './OneComment';

const Comments = ({ comments, changeComments }) => {

  return (
    <Box>
      <Comment changeComments={changeComments} comments={comments} />
      <Box className="comments">
        {
          comments.map((comment) => {
            return (
              <OneComment comments={comments} changeComments={changeComments} comment={comment} />
            )
          })
        }
      </Box>
    </Box>
  )
};

export default Comments;

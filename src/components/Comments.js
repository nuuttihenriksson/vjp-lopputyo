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

const Comments = ({ comments, changeComments }) => {

  const [liked, changeLiked] = useState(false);
  const [disliked, changeDisliked] = useState(false);

  const like = () => {
    changeLiked(!liked);
    if (disliked) {
      changeDisliked(false);
    }
  }

  const dislike = () => {
    changeDisliked(!disliked);
    if (liked) {
      changeLiked(false);
    }
  }

  const commentElements = comments.map((comment) => {
    return (
      <Box key={`comment-${comment.id}`}>
        <Box
          sx={{
            display: 'inline-block',
            verticalAlign: 'middle',
          }}
        >
          <a>{comment.name}:</a>
          <a style={{ marginLeft: "5px" }}>{comment.comment}</a>
        </Box>
        <ThumbUpOffAlt
          onClick={() => like}
          sx={{
            marginLeft: "20px" ,
            display: 'inline-block',
            verticalAlign: 'middle',
          }}
        />
        <a>{comment.likes}</a>
        <ThumbDownOffAlt
          onClick={() => dislike}
          sx={{
            marginLeft: "20px" ,
            display: 'inline-block',
            verticalAlign: 'middle',
          }}
        /> 
        <a>{comment.dislikes}</a>
      </Box>
    )
  })
  return (
    <Box>
      <Comment changeComments={changeComments} comments={comments}/>
      {commentElements}
    </Box>
  )
};

export default Comments;

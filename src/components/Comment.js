import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
} from '@mui/material';

const Comment = ({ changeComments, comments }) => {
  const [screenName, changeScreenName] = useState('');
  const [comment, changeComment] = useState('');

  const addComment = () => {
    if (screenName === '' || comment === '') return;
    const id = comments[comments.length-1].id + 1;
    const newComment = {
      id: id,
      name: screenName,
      comment: comment,
      likes: 0,
      dislikes: 0,
    }
    changeComments(comments.concat(newComment));
    changeScreenName('');
    changeComment('');
  }
  return (
    <Box
        sx={{
          marginBottom: "30px",
        }}
      >
        <h4>Comments:</h4>
        <TextField
          id="outlined-required"
          placeholder="Screen name"
          onChange={(e) => changeScreenName(e.target.value)}
          value={screenName}
          sx={{
            width: "7%",
            display: 'inline-block',
            verticalAlign: 'middle',
          }}
        />
        <TextField
          id="outlined-required"
          placeholder="Comment"
          onChange={e => changeComment(e.target.value)}
          value={comment}
          sx={{
            width: "10%",
            display: 'inline-block',
            verticalAlign: 'middle',
            marginLeft: '10px',
          }}
        />
        <Button
          variant="contained"
          onClick={addComment}
          sx={{
            display: 'inline-block',
            verticalAlign: 'middle',
            marginLeft: '10px',
          }}
        >
          Send
        </Button>
      </Box>
  )
}

export default Comment;

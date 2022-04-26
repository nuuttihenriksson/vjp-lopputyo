import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
} from '@mui/material';
import './comment.css';

// Palauttaa kommenttien kirjoittamiseen käytetyn osan. Saa kommentit ja funktion kommenttien vaihtamiselle propseina.
const Comment = ({ changeComments, comments }) => {
  const [screenName, changeScreenName] = useState('');
  const [comment, changeComment] = useState('');

  // apufunktio, joka lisää yhden kommentin, mikäli kumpikaan kentistä ei ole tyhjänä.
  const addComment = () => {
    if (screenName === '' || comment === '') return;
    const id = comments[comments.length - 1].id + 1;
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
      <Box className="comment">
        <TextField
          id="outlined-required"
          placeholder="Screen name"
          onChange={(e) => changeScreenName(e.target.value)}
          value={screenName}
          sx={{
            width: "150px",
          }}
        />
        <TextField
          id="outlined-required"
          placeholder="Comment"
          onChange={e => changeComment(e.target.value)}
          value={comment}
          sx={{
            width: "250px",
          }}
        />
        <Button
          variant="contained"
          onClick={addComment}
          sx={{
            background: "#0e00a3",
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  )
}

export default Comment;

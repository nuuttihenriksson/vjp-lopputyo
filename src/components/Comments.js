import React from 'react';
import {
  Box,
  Divider,
  Chip,
} from '@mui/material';
import Comment from './Comment';
import OneComment from './OneComment';

/*
Toimii rakenteena kommentointiosiolle, johon kuuluu kommentin kirjoittaminen ja olemassa olevien kommenttien listaaminen.
Kommenttikenttä haetaan Comment tiedostosta ja olemassa olevat kommentit mäpätään OneComment olioiksi.
**/
const Comments = ({ comments, changeComments }) => {

  return (
    <Box sx={{ paddingBottom: "30px" }} className="content">
      <Box sx={{ maxWidth: "80%", margin: "auto" }}>
        <Divider sx={{ marginTop: "20px", marginBottom: "20px" }} variant="middle">
          <Chip label="Leave a comment" />
        </Divider>
      </Box>
      <p>Enjoyed the video? Leave a comment!</p>
      <Comment changeComments={changeComments} comments={comments} />
      <Box sx={{ maxWidth: "70%", margin: "auto" }}>
        <Divider sx={{ marginBottom: "15px" }}>
          <Chip label="Comments" />
        </Divider>
      </Box>
      <Box className="comments">
        {
          comments.map((comment) => {
            return (
              <OneComment key={`comment-${comment.id}`} comments={comments} changeComments={changeComments} comment={comment} />
            )
          })
        }
      </Box>
    </Box>
  )
};

export default Comments;

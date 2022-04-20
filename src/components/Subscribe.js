import React, { useState } from 'react';
import {
  Box,
  TextField,
} from '@mui/material';

const Subscribe = () => {

  const [username, changeUsername] = useState('');
  const [email, changeEmail] = useState('');

  return (
    <Box
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '25px',
      }}
    >
      <h2>Subscribe to notifications</h2>
      <a>This form is used to signup for email notifications of new content.</a>
      <br/>
      <TextField
        required
        id="outlined-required"
        label="Username"
        helperText="Visible to everyone"
        sx={{
          marginTop: '25px',
        }}
      />
      <br/>
      <TextField
        required
        id="outlined-required"
        label="Email"
        type="email"
        sx={{
          marginTop: '25px',
        }}
      />
    </Box>
  )
};

export default Subscribe;

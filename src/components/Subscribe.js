import React, { useState } from 'react';
import {
  Box,
  Button,
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
        placeholder="Username"
        helperText="Visible to everyone"
        sx={{
          marginTop: '25px',
        }}
      />
      <TextField
        required
        id="outlined-required"
        placeholder="Email"
        type="email"
        sx={{
          marginTop: '25px',
          display: 'inline-block',
          verticalAlign: 'middle',
        }}
      />
      <Button
        variant="contained"
          sx={{
            display: 'inline-block',
            marginTop: '25px',
            verticalAlign: 'middle',
          }}
      >
        Subscribe
      </Button>
    </Box>
  )
};

export default Subscribe;

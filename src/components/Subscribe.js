import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
} from '@mui/material';

const Subscribe = ({ subs, changeSubs }) => {

  const [username, changeUsername] = useState('');
  const [email, changeEmail] = useState('');
  

  const addSub = () => {
    if (username === '' || email === '') return;

    console.log(`Here we would send the email: ${email} and username: ${username} to a backend`);

    if (subs.length === 10) {
      changeSubs(subs.slice(1,9).concat(username));
    } else {
      changeSubs(subs.concat(username));
    }

    changeEmail('');
    changeUsername('');
  }

  const getSubs = subs.slice().reverse().map((sub, index) => {
      return (
        <Box key={`sub-${index}`}>
          <a>{sub}</a>
        </Box>
      )
    })

  return (
    <Box>
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
          onChange={(e) => changeUsername(e.target.value)}
          value={username}
          sx={{
            marginTop: '25px',
          }}
        />
        <TextField
          required
          id="outlined-required"
          placeholder="Email"
          type="email"
          onChange={(e) => changeEmail(e.target.value)}
          value={email}
          sx={{
            marginTop: '25px',
            display: 'inline-block',
            verticalAlign: 'middle',
          }}
        />
        <Button
          variant="contained"
          onClick={addSub}
            sx={{
              display: 'inline-block',
              marginTop: '25px',
              verticalAlign: 'middle',
            }}
        >
          Subscribe
        </Button>
      </Box>
      <Box
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          marginTop: '25px',
        }}
      >
        <h3>Last 10 subscribers:</h3>
        {getSubs}
      </Box>
    </Box>
  )
};

export default Subscribe;

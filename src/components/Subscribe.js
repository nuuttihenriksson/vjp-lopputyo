import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
} from '@mui/material';
import './subscribe.css';

// Tilaus osio, joka lähettäisi syötetyn spostin backendille. Ottaa subscriberit ja niiden vaihtamiseen käytetyn funktion propseina.
const Subscribe = ({ subs, changeSubs }) => {

  const [username, changeUsername] = useState('');
  const [email, changeEmail] = useState('');

  // apufunktio yhden subscriberin lisäämiselle.
  const addSub = () => {
    if (username === '' || email === '') return;

    console.log(`Here we would send the email: ${email} and username: ${username} to a backend`);

    if (subs.length === 10) {
      changeSubs(subs.slice(1, 9).concat(username));
    } else {
      changeSubs(subs.concat(username));
    }

    changeEmail('');
    changeUsername('');
  }

  const getSubs = subs.slice().reverse().map((sub, index) => {
    return (
      <Box key={`sub-${index}`}>
        <p>{sub}</p>
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
        <p>This form is used to signup for email notifications of new content.</p>
        <br />
        <p>Your username is shown on this page to show others that you support the content creator</p>
        <br />
        <Box className="subForm">
          <TextField
            required
            id="outlined-required"
            placeholder="Username"
            onChange={(e) => changeUsername(e.target.value)}
            value={username}
          />
          <TextField
            required
            id="outlined-required"
            placeholder="Email"
            type="email"
            onChange={(e) => changeEmail(e.target.value)}
            value={email}
          />
          <Button
            variant="contained"
            onClick={addSub}
            sx={{
              background: "#0e00a3",
            }}
          >
            Subscribe
          </Button>
        </Box>
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
    </Box >
  )
};

export default Subscribe;

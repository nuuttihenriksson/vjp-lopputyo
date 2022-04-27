import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
} from '@mui/material';
import './subscribe.css';
import { useToasts } from 'react-toast-notifications';

// Tilaus osio, joka lähettäisi syötetyn spostin backendille. Ottaa subscriberit ja niiden vaihtamiseen käytetyn funktion propseina.
const Subscribe = ({ subs, changeSubs }) => {

  const [username, changeUsername] = useState('');
  const [email, changeEmail] = useState('');
  const { addToast } = useToasts();

  // apufunktio yhden subscriberin lisäämiselle.
  const addSub = () => {
    if (username === '' || email === '') {
      addToast('One or more fields are empty', { appearance: 'error', autoDismiss: true });
      return;
    }
    if (!matchEmail(email)) {
      addToast('Email not valid', { appearance: 'error', autoDismiss: true });
      return;
    }

    console.log(`Here we would send the email: ${email} and username: ${username} to a backend`);
    addToast('Subscription successful', { appearance: 'success', autoDismiss: true });
    if (subs.length === 10) {
      changeSubs(subs.slice(1, 9).concat(username));
    } else {
      changeSubs(subs.concat(username));
    }

    changeEmail('');
    changeUsername('');
  }

  // helper function that uses regular expression to check for email validity.
  // acquired from stackoverflow (https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript)
  const matchEmail = (email) => {
    return email.match(
      // eslint-disable-next-line
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
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
        <p>This form is used to signup for email notifications.</p>
        <p>Notifications include notifications of the stream schedule and live annoncements, notifications of raffles and much more!</p>
        <br />
        <p>Your username is shown on this page to show others that you support the content creator</p>
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

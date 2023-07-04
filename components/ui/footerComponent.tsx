import React from 'react';
import { Container, Typography, Box, Card, Paper } from '@mui/material';
import { blue } from '@mui/material/colors';

function FooterComponent() {
  return (
    <Box
      component="footer"
      bgcolor="secondary"
      sx={{
        padding: '1rem',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: `${blue[700]}`,
      }}
    >
      <Typography color={'white'} variant="body2">
        Desarrollado por{' '}
        <a
          href="mailto:juanvs23@gmail.com"
          style={{ color: 'white', textDecoration: 'none' }}
          target="_blank"
          className=""
        >
          Juan Carlos Avila Pérez
        </a>{' '}
        - 2023
      </Typography>
    </Box>
  );
}

export default FooterComponent;

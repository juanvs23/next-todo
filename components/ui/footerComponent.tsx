import React from 'react';
import { Container, Typography, Box, Card } from '@mui/material';

function FooterComponent() {
  return (
    <Box
      component="footer"
      sx={{
        padding: '1rem',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'paper.secondary',
      }}
    >
      FooterComponent
    </Box>
  );
}

export default FooterComponent;

import React from 'react';
import { Grid, Typography } from '@mui/material';

const AboutMe = ({ title, text }) => {
  return (
    <Grid container sx={{ maxWidth: '70%', margin: '0 auto' }}>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" sx={{ color: '#0077b6', mb: 2 }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutMe;

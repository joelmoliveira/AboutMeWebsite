import React from 'react';
import { Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        {`© ${new Date().getFullYear()}. Created with React & MUI. `}
        <Link
          href="https://www.example.com"
          color="textSecondary"
          underline="hover"
        >
          Joel Oliveira
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;

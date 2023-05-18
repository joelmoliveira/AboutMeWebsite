import React from 'react';
import { Button as MuiButton } from '@mui/material';

const Button = ({ variant = 'contained', color = 'primary', children, ...rest }) => {
  return (
    <MuiButton variant={variant} color={color} {...rest}>
      {children}
    </MuiButton>
  );
};

export default Button;

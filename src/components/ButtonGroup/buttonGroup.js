import React from "react";
import { Button, ButtonGroup as MuiButtonGroup } from "@mui/material";

const ButtonGroup = ({ buttons, variant, onClick }) => {
  const handleButtonClick = (button) => {
    onClick(button);
  };

  return (
    <MuiButtonGroup variant={variant} aria-label="button group">
      {buttons.map((button, index) => (
        <Button key={index} onClick={() => handleButtonClick(button)}>
          {button}
        </Button>
      ))}
    </MuiButtonGroup>
  );
};

export default ButtonGroup;

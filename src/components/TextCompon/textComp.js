import React from "react";
import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography';

const TextComponent = ({ id, title, text, centered }) => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent={centered ? "center" : "flex-start"}
      sx={{ marginTop: "20px", marginBottom: "20px" }}
    >
      <Grid item xs={12} md={7}>
        <Typography variant="h4" align={centered ? "center" : "left"} id={id}>
          {title}
        </Typography>
        <Typography variant="body1" align={centered ? "center" : "left"}>
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TextComponent;

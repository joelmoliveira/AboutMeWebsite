import React from "react";
import { Grid, IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FollowMe = () => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{ marginTop: "20px", marginBottom: "20px" }}
    >
      <Grid item>
        <a
          href="https://twitter.com/joelmoliv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton aria-label="Twitter" color="primary">
            <TwitterIcon />
          </IconButton>
        </a>
      </Grid>
      <Grid item>
        <a
          href="https://github.com/joelmoliveira"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton aria-label="GitHub" color="primary">
            <GitHubIcon />
          </IconButton>
        </a>
      </Grid>
      <Grid item>
        <a
          href="https://www.linkedin.com/in/joelmoliveira/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton aria-label="LinkedIn" color="primary">
            <LinkedInIcon />
          </IconButton>
        </a>
      </Grid>
    </Grid>
  );
};

export default FollowMe;

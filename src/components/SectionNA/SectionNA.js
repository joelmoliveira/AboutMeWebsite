import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "50px 0",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  image: {
    width: "50%",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginBottom: "30px",
    },
  },
  content: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      alignItems: "center",
      textAlign: "center",
    },
  },
  button: {
    marginTop: "20px",
  },
  invert: {
    backgroundColor: "#f2f2f2",
  },
}));

const SectionNA = (props) => {
  const classes = useStyles();
  const { image, alt, title, description, buttonText } = props;

  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{ maxWidth: "80%", margin: "0 auto" }}
    >
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <img src={image} alt={alt} className={classes.image} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.content}>
              <h2>{title}</h2>
              <p>{description}</p>
              <button className={classes.button}>{buttonText}</button>
            </div>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default SectionNA;

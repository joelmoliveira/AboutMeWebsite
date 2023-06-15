import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f2f2f2",
    height: "30vh",
    padding: 0,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 2%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "5% 0",
    },
  },
  content: {
    textAlign: "center",
  },
  icon: {
    fontSize: "3rem",
    marginBottom: theme.spacing(2),
  },
}));

function FourBox() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={3} className={classes.box}>
        <div className={classes.content}>
          <h2>9</h2>
          <p>Years of experience</p>
        </div>
      </Grid>
      <Grid item xs={12} md={3} className={classes.box}>
        <div className={classes.content}>
          <h2>5</h2>
          <p>Products shiped (hardware and software)</p>
        </div>
      </Grid>
      <Grid item xs={12} md={3} className={classes.box}>
        <div className={classes.content}>
          <h2>5</h2>
          <p>Continents reached</p>
        </div>
      </Grid>
      <Grid item xs={12} md={3} className={classes.box}>
        <div className={classes.content}>
          <h2>+800</h2>
          <p>Customers</p>
        </div>
      </Grid>
    </Grid>
  );
}

export default FourBox;

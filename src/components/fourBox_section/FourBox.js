import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f2f2f2",
    height: "50vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 10%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: "10% 5%",
    },
  },
  box: {
    width: "25%",
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
  icon: {
    fontSize: "3rem",
    marginBottom: theme.spacing(2),
  },
}));

function FourBox() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <h2>3D Printed</h2>
        <p>Use our model, change it, or design your own</p>
      </div>
      <div className={classes.box}>
        <h2>Organic Shapes</h2>
        <p>Improve your skills in aerodynamics to beat the fastest animal</p>
      </div>
      <div className={classes.box}>
        <h2>Tech Exploring</h2>
        <p>Use technology to address a challenge in the real world</p>
      </div>
      <div className={classes.box}>
        <h2>Community Challenge</h2>
        <p>Compete with engineers around the world and prove your skills</p>
      </div>
    </div>
  );
}

export default FourBox;

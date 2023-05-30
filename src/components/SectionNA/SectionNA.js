import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@mui/material";
import { Typography, Container } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


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

const SectionNA = ({ image, alt, title, description, invert, buttonText, buttonLink }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center" className={invert ? classes.invert : ''}>
          <Grid item xs={12} sm={6}>
            <img src={image} alt={alt} className={classes.image} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.content}>
              <Typography variant="h4" component="h2" className={classes.title}>
                {title}
              </Typography>
              <Typography variant="body1" className={classes.description}>
                {description}
              </Typography>
              <Link to={buttonLink} className={classes.button}>
                <Button variant="contained" color="primary" className={classes.button}>
                  {buttonText}
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};


export default SectionNA;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";

//import components
import TextComponent from "../TextCompon/textComp";
import FollowMe from "../FollowMe/FollowMe";

//import copy
import ContentEnglish from "../../Content/contentEnglish.json";
const { projectsPage } = ContentEnglish;

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    width: "80%",
    margin: "0 auto",
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  image: {
    width: "100%",
    height: "auto",
  },
}));

const ProjectPage = ({ project }) => {
  const classes = useStyles();
  const { projectId } = useParams();

  // Get the project details based on the projectID
  const projectDetails = projectsPage[projectId];

  if (!projectDetails) {
    // render a message of fallback component for invalid project ID
    return <div>Invalid project ID</div>;
  }

  const {
    image1,
    alt1,
    image2,
    alt2,
    image3,
    alt3,
    title,
    aboutTitle,
    about,
    objectiveTitle,
    objective,
    toolsTitle,
    toolsTech,
    challengeTitle,
    challenge,
    followMe
  } = projectDetails;

  return (
    <Container className={classes.root}>
      <TextComponent title={title} />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <img src={image1} alt={alt1} className={classes.image} />
        </Grid>
        <Grid item xs={4}>
          <img src={image2} alt={alt2} className={classes.image} />
        </Grid>
        <Grid item xs={4}>
          <img src={image3} alt={alt3} className={classes.image} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextComponent title={aboutTitle} />
          <TextComponent text={about} />
          <TextComponent title={objectiveTitle} />
          <TextComponent text={objective} />
          <TextComponent title={toolsTitle} />
          <TextComponent text={toolsTech} />
        </Grid>
        <Grid item xs={8}>
          <TextComponent title={challengeTitle} />
          <TextComponent text={challenge} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={12} sx={{ maxWidth: "80%", margin: "0 auto" }}>
        <TextComponent title={followMe} centered={true} />
        <FollowMe />
      </Grid>
    </Container>
  );
};

export default ProjectPage;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";

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
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  image: {
    width: "100%",
    height: "auto",
  },
}));

const ProjectPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <TextComponent title={projectsPage.project1.title} />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <img src="" alt="" className="" />
        </Grid>
        <Grid item xs={4}>
          <img src="" alt="" className="" />
        </Grid>
        <Grid item xs={4}>
          <img src="" alt="" className="" />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextComponent title={projectsPage.project1.aboutTitle} />
          <TextComponent text={projectsPage.project1.about} />
          <TextComponent title={projectsPage.project1.objectiveTitle} />
          <TextComponent text={projectsPage.project1.objective} />
          <TextComponent title={projectsPage.project1.toolsTitle} />
          <TextComponent text={projectsPage.project1.toolsTech} />
        </Grid>
        <Grid item xs={8}>
          <TextComponent title={projectsPage.project1.challengeTitle} />
          <TextComponent text={projectsPage.project1.challenge} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={12} sx={{ maxWidth: "80%", margin: "0 auto" }}>
        <TextComponent title={projectsPage.followMe} centered={true} />
        <FollowMe />
      </Grid>
    </Container>
  );
};

export default ProjectPage;

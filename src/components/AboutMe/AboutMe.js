import React from "react";
import { Grid } from "@mui/material";

// Components
import TextComponent from "../TextCompon/textComp";
import FollowMe from "../FollowMe/FollowMe";
import FourBox from "../fourBox_section/FourBox";

// Copy
import ContentEnglish from "../../Content/contentEnglish.json";
const { aboutMe } = ContentEnglish;

const AboutMe = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={12} sx={{ maxWidth: "90%", margin: "0 auto" }}>
        <Grid container alignItems="center">
          <Grid item xs={3}>
            <img
              src="your-image-url"
              alt="Your Image"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={9}>
            <TextComponent text={aboutMe.text} centered={true} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ maxWidth: "100%", margin: "0 auto" }}>
        <FourBox />
      </Grid>
      <Grid item xs={12} md={12} sx={{ maxWidth: "80%", margin: "0 auto" }}>
        <TextComponent title={aboutMe.followMe} centered={true} />
        <FollowMe />
      </Grid>
    </Grid>
  );
};

export default AboutMe;

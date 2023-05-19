import React from "react";
import { Grid } from "@mui/material";

//components
import TextComponent from "../TextCompon/textComp";
import FollowMe from "../FollowMe/FollowMe";
import FourBox from "../fourBox_section/FourBox";

//Copy
import ContentEnglish from "../../Content/contentEnglish.json";
const { aboutMe } = ContentEnglish

const AboutMe = () => {
  return (
    <Grid container sx={{ maxWidth: "80%", margin: "0 auto" }}>
      <Grid item xs={12} md={6}>
        <TextComponent title={aboutMe.title} centered={true} />
        <TextComponent text={aboutMe.text} centered={true} />
        <FourBox />
        <TextComponent title={aboutMe.followMe}/>
        <FollowMe />
      </Grid>
    </Grid>
  );
};

export default AboutMe;

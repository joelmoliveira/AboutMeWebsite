import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import ButtonGroup from "../ButtonGroup/buttonGroup";

//content
import contentEnglish from "../../Content/contentEnglish.json";

const Skills = () => {
  const skills = Object.values(contentEnglish.skillsPage);
  const buttons = skills.map((skill) => skill.title);

  const [selectedButton, setSelectedButton] = useState(buttons[0]);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const selectedSkill = skills.find((skill) => skill.title === selectedButton);

  return (
    <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12}>
            <ButtonGroup
              buttons={buttons}
              variant="contained"
              onClick={handleButtonClick}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              {selectedSkill.title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              Programming Languages: {selectedSkill.programmingLanguages}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              Frameworks and Libraries: {selectedSkill.frameworksAndLibraries}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              Databases: {selectedSkill.databases}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Skills;

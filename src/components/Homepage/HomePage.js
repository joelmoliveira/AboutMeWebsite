import React from "react";

// Components
import CTA from "../CTA/Cta";
import FourBox from "../fourBox_section/FourBox";
import SectionNA from "../SectionNA/SectionNA";
import TextComponent from "../TextCompon/textComp";
import Skills from "../Skills/skills";
import FollowMe from "../FollowMe/FollowMe";

// Content
import contentEnglish from "./../../Content/contentEnglish.json";

const HomePage = () => {
  //copy for breakers
  const { break1 } = contentEnglish.breakers;
  const { break2 } = contentEnglish.breakers;
  const { break3 } = contentEnglish.breakers;
  const { id1 } = contentEnglish.breakers;
  const { id2 } = contentEnglish.breakers;


  return (
    <div>
      <CTA />
      <TextComponent id={id1} title={break1} centered={true} />
      <Skills />
      <TextComponent id={id2} title={break2} centered={true} />
      <SectionNA
        image={contentEnglish.projectsPage.project1.image1}
        alt="Image 1"
        title={contentEnglish.projectsPage.project1.title}
        description={contentEnglish.projectsPage.project1.description}
        buttonText={contentEnglish.projectsPage.project1.buttonText}
        invert={false}
      />
      <SectionNA
        image={contentEnglish.projectsPage.project2.image2}
        alt="Image 2"
        title={contentEnglish.projectsPage.project2.title}
        description={contentEnglish.projectsPage.project2.description}
        buttonText={contentEnglish.projectsPage.project2.buttonText}
        invert={true}
      />
      <SectionNA
        image={contentEnglish.projectsPage.project3.image3}
        alt="Image 2"
        title={contentEnglish.projectsPage.project3.title}
        description={contentEnglish.projectsPage.project3.description}
        buttonText={contentEnglish.projectsPage.project3.buttonText}
        invert={false}
      />
      <FourBox />
      <TextComponent title={break3} centered={true} />
      <FollowMe />
    </div>
  );
};

export default HomePage;

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
        image={contentEnglish.projectsSection.project1.image1}
        alt="Image 1"
        title={contentEnglish.projectsSection.project1.title}
        description={contentEnglish.projectsSection.project1.description}
        buttonText={contentEnglish.projectsSection.project1.buttonText}
        invert={false}
      />
      <SectionNA
        image={contentEnglish.projectsSection.project2.image2}
        alt="Image 2"
        title={contentEnglish.projectsSection.project2.title}
        description={contentEnglish.projectsSection.project2.description}
        buttonText={contentEnglish.projectsSection.project2.buttonText}
        invert={true}
      />
      <SectionNA
        image={contentEnglish.projectsSection.project3.image3}
        alt="Image 2"
        title={contentEnglish.projectsSection.project3.title}
        description={contentEnglish.projectsSection.project3.description}
        buttonText={contentEnglish.projectsSection.project3.buttonText}
        invert={false}
      />
      <FourBox />
      <TextComponent title={break3} centered={true} />
      <FollowMe />
    </div>
  );
};

export default HomePage;

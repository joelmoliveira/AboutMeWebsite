import React from 'react';
import AboutMe from './aboutMe';

export default {
  component: AboutMe,
  title: 'Components/AboutMe',
};

const Template = (args) => <AboutMe {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'About Me',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu elit a orci vestibulum fringilla id eget ex.',
};

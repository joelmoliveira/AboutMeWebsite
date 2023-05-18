import React from "react";
import FourBox from "./FourBox";

export default {
    title: 'Components/FourBox',
    component: FourBox,
};

const Template = (args) => <FourBox {...args} />;


export const Default = Template.bind({});
Default.args = {
    // Add default args for the Default story here
  };
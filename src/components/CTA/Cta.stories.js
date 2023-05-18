
import React from "react";
import CTA from "./Cta";

export default {
    title: 'Components/Cta',
    component: CTA,
};

const Template = (args) => <CTA {...args} />;


export const Default = Template.bind({});
Default.args = {
    // Add default args for the Default story here
  };
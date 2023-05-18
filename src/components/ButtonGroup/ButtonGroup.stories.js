import React from "react";
import { ButtonGroup } from "./buttonGroup";

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["contained", "outlined"],
      },
    },
  },
};

const Template = (args) => <ButtonGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttons: ["Button 1", "Button 2", "Button 3"],
  variant: "contained",
  onClick: (button) => {
    console.log(`Clicked ${button}`);
  },
};

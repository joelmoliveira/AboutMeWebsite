import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'contained',
  color: 'primary',
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'contained',
  color: 'secondary',
  children: 'Secondary Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  color: 'primary',
  children: 'Outlined Button',
};

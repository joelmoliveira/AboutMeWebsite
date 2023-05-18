import React from 'react';
import HomePage from './HomePage';

export default {
  title: 'Components/HomePage',
  component: HomePage,
};

const Template = (args) => <HomePage {...args} />;

export const Default = Template.bind({});

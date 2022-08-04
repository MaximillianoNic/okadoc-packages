import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as React from 'react';
import { Heading } from '../packages/okadoc-atom/src/Typography';

export default {
  title: 'Okadoc/Atomic/Typography',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: { control: 'select', options: ['one', 'two'] },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args}>
    Okadoc Title
  </Heading>
);

export const Heading1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Heading1.args = {
  size: 'one',
};

export const Heading2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Heading2.args = {
  size: 'two',
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../packages/okadoc-atom/src/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Okadoc/Atomic/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      type: { name: 'string', required: false },
      description: 'Set variant of button',
      options: [
          'primary-green',
          // 'outline-green',
          // 'primary-blue',
          // 'outline-blue',
          // 'outline-black',
          // 'text',
      ],
      control: { type: 'radio' },
      table: {
          defaultValue: { summary: 'primary-green' },
      },
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    Click Button
  </Button>
);

export const Basic = Template.bind({});

export const Variants: ComponentStory<typeof Button> = (args) => (
  <>
    <Button variant="primary-green" {...args}>
      Primary
    </Button>
  </>
);

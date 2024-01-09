import type { Meta, StoryObj } from 'storybook-solidjs';
import Key from './Key.jsx';
import { View } from '@lightningjs/solid';

type Story = StoryObj<typeof Key>;

const meta: Meta<typeof Key> = {
  title: 'Components/Key',
  tags: ['autodocs'],
  component: Key,
  argTypes: {
    states: {
      control: { type: 'radio' },
      options: ['focus', 'unfocused', 'disabled'],
      description: 'Sets the visual mode for the component',
      table: {
        defaultValue: { summary: 'focus' }
      }
    }
  }
};

export const Basic: Story = {
  render: args => {
    return <Key {...args} />;
  },
  args: {
    states: 'focus',
    width: 480,
    height: 270
  }
};

export default meta;

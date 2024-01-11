import type { Meta, StoryObj } from 'storybook-solidjs';
import Key from './Key.jsx';
import { ButtonStyles } from '../Button/Button.jsx';
import { Text } from '@lightningjs/solid';
import keyStyles from './Key.styles.js';

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
    return (
      <Key {...args}>
        <Text style={ButtonStyles.Text}>A</Text>
      </Key>
    );
  },
  args: {
    states: 'focus',
    keySpacing: 2
  }
};

export default meta;

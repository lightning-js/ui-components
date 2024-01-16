/*
 * Copyright 2023 Comcast Cable Communications Management, LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Meta, StoryObj } from 'storybook-solidjs';
import Button, { ButtonContainer, ButtonStyles } from './Button.jsx';
import { Text } from '@lightningjs/solid';
import Icon from '../Icon/Icon.jsx';
import Checkbox from '../Checkbox/Checkbox.jsx';

const lightning = '/assets/images/ic_lightning_white_32.png';
const check = '/assets/images/check-icon.png';

type Story = StoryObj<typeof Button>;

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  tags: ['autodocs'],
  component: Button,
  argTypes: {
    states: {
      control: { type: 'radio' },
      options: ['focus', 'unfocused', 'disabled'],
      description: 'Sets the visual mode for the component',
      table: {
        defaultValue: { summary: 'focus' }
      }
    },
    tone: {
      control: { type: 'radio' },
      options: ['neutral', 'inverse', 'brand'],
      description: 'Sets the tone for the component',
      table: {
        defaultValue: { summary: 'neutral' }
      }
    },
    width: {
      control: { type: 'number', min: 400, max: 1200, step: 50 },
      description: 'When the fixed property is true, this will set the width of the component',
      table: {
        defaultValue: { summary: 400 }
      }
    },
    height: {
      control: { type: 'number', min: 400, max: 1200, step: 50 },
      description: 'When the fixed property is true, this will set the height of the component',
      table: {
        defaultValue: { summary: 100 }
      }
    },
    justifyContent: {
      control: 'radio',
      options: ['center', 'flexStart', 'flexEnd', 'spaceBetween', 'spaceEvenly'],
      description: 'Justification of button content',
      table: {
        defaultValue: { summary: 'center' }
      }
    }
  }
};

export const Basic: Story = {
  render: (args) => {
    return (
      <ButtonContainer {...args}>
        <Icon width={22} height={28} src={lightning} />
        <Text style={ButtonStyles.Text}>Button</Text>
      </ButtonContainer>
    );
  },
  args: {
    width: 400,
    height: 100
  }
};

export const WithCheckbox: Story = {
  render: args => {
    return (
      <ButtonContainer {...args}>
        <Checkbox checked>
          <Icon width={18} height={14} src={check} />
        </Checkbox>
        <Text style={ButtonStyles.Text}>Button</Text>
      </ButtonContainer>
    );
  },
  args: {
    width: 400,
    height: 100
  }
};

export const WithCheckboxRight: Story = {
  render: args => {
    return (
      <ButtonContainer {...args}>
        <Text style={ButtonStyles.Text}>Button</Text>
        <Checkbox checked>
          <Icon width={18} height={14} src={check} />
        </Checkbox>
      </ButtonContainer>
    );
  },
  args: {
    width: 400,
    height: 100
  }
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args

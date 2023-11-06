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
import Button from './Button';
import lightning from '../../assets/images/ic_lightning_white_32.png';

type Story = StoryObj<typeof Button>;

function getComponentArray(comps: any) {
  let arr = {};
  switch (comps) {
    case 'icon':
      arr = { icon: lightning, width: 35, height: 35 };
      break;
    case 'checkbox':
      //arr = [{ checked: true }];
      break;
    case 'combo':
      arr = { icon: lightning, width: 35, height: 35 };
      //{ checked: true }
      break;
  }
  return arr;
}

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
    title: {
      control: 'text',
      description: 'Title text',
      table: {
        defaultValue: { summary: 'undefined' }
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
    /* justifyContent: {
      control: 'radio',
      options: ['center' , 'flexStart' , 'flexEnd' , 'spaceBetween' , 'spaceEvenly'],
      description: 'Justification of button content',
      table: {
        defaultValue: { summary: 'center' }
      }
    }, */
    prefix: {
      control: 'radio',
      options: [null, 'icon', 'checkbox', 'combo'],
      description: 'Lightning components to be placed to the left of the title',
      table: {
        defaultValue: { summary: 'undefined' }
      }
    },
    suffix: {
      control: 'radio',
      options: [null, 'icon', 'checkbox', 'combo'],
      description: 'Lightning components to be placed to the right of the title',
      table: {
        defaultValue: { summary: 'undefined' }
      }
    }

  }
};

export const Basic: Story = {
  render: args => {
    return (
      <Button {...args} prefix={getComponentArray(args.prefix)} suffix={getComponentArray(args.suffix)} />
    );
  },
  args: {
    title: 'button',
    width: 400,
    height: 100
    //justifyContent: 'center'
  }
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
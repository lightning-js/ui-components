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
import Button, { ButtonProps } from './Button.ts';
import {Meta, StoryObj} from "@storybook/html";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  tags: ['autodocs'],
  component: typeof Button,
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
      control: { type: 'number', min: 100, max: 1200, step: 50 },
      description: 'When the fixed property is true, this will set the width of the component',
      table: {
        defaultValue: { summary: '400' }
      }
    },
    height: {
      control: { type: 'number', min: 50, max: 1200, step: 50 },
      description: 'When the fixed property is true, this will set the height of the component',
      table: {
        defaultValue: { summary: '100' }
      }
    }
  },
  //@ts-expect-error custom render method needed to use Blits component
  render: args => ({
    name: 'Button',
    fn: Button,
    template: `<Button :width="${args.width}" :height="${args.height}" text="Button" tone="${args.tone}" states="${args.states}" />`
  }),

};

type Story = StoryObj<ButtonProps>
export const Basic: Story = {
  args: {
    width: 400,
    height: 100,
    tone: 'neutral',
    states: 'focus'
  }
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args

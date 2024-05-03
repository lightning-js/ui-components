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
import ProgressBar, { ProgressBarProps } from './ProgressBar.ts';
import {Meta, StoryObj} from "@storybook/html";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction

const meta: Meta<ProgressBarProps> = {
  title: 'Components/ProgressBar',
  tags: ['autodocs'],
  component: typeof ProgressBar,
  argTypes: {
    containerColor: {
      description: 'color of bar representing the total progress',
      control: 'color',
      
    },
    progressColor: {
      description: 'color of bar representing the current progress',
      control: 'color'
    },
    progress: {
      description: 'Percentage of current progress in a decimal format from 0 to 1',
      control: { type: 'number', step: 0.1, min: 0, max: 1.0 }
    },
    borderRadius: {
      description: 'Radius of the bar',
      control: { type: 'number', step: 1, min: 0, max: 50 }
    },
    tone: {
      control: { type: 'radio' },
      options: ['neutral', 'inverse', 'brand'],
      description: 'Sets the tone for the component',
      table: {
        defaultValue: { summary: 'neutral' }
      }
    },
  },
  //@ts-expect-error custom render method needed to use Blits component
  render: args => ({
      name: 'ProgressBar',
      fn: ProgressBar,
      template: `<ProgressBar ${Object.entries(args).filter(([_k,v]) => v !== undefined).map(([k,v]) => `${k}="${v}"`).join(' ')} />`
    })
};

type Story = StoryObj<ProgressBarProps>
export const Basic: Story = {
  args: {
    width: 500,
    height: 10,
    progress: 0.5,
    borderRadius: 2,
    tone: 'neutral',
  }
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args

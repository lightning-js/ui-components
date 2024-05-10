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
import Badge, { BadgeProps } from './Badge.ts';
import { Meta, StoryObj } from '@storybook/html';
import lightning from '../../assets/images/ic_lightning_white_32.png';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories

const meta: Meta<BadgeProps> = {
  title: 'Components/Badge',
  tags: ['autodocs'],
  component: typeof Badge,
  argTypes: {
    title: {
      description: 'text inside of badge'
    },
    tone: {
      control: { type: 'radio' },
      options: ['neutral', 'inverse', 'brand'],
      description: 'Sets the tone for the component',
      table: {
        defaultValue: { summary: 'neutral' }
      }
    },
    iconAlign: {
      control: 'select',
      options: ['none', 'left', 'right'],
      description: 'Side of the text the icon will appear on'
    },
    iconSrc: {
      description: 'path to image or inline SVG XML'
    },
    iconColor: {
      description: 'color of icon',
      control: 'color'
    }
  },
  //@ts-expect-error custom render method needed to use Blits component
  render: args => ({
    name: 'Badge',
    fn: Badge,
    template: `<Badge ${Object.entries(args)
      .filter(([_k, v]) => v !== undefined)
      .map(([k, v]) => `${k}="${v}"`)
      .join(' ')} />`
  })
};

type Story = StoryObj<BadgeProps>;
export const Basic: Story = {
  args: {
    title: 'Badge Text',
    tone: 'neutral'
  }
};

export const BadgeIcon: Story = {
  args: {
    title: 'Badge Text',
    tone: 'neutral',
    iconSrc: lightning,
    iconAlign: 'left'
  }
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

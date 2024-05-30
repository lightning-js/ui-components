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
import Metadata, { MetadataProps } from './Metadata.ts';
import { Meta, StoryObj } from '@storybook/html';
import lightning from '../../assets/images/ic_lightning_white_32.png';

const lorum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales est eu eleifend interdum. Vivamus egestas maximus elementum. Sed condimentum ligula justo, non sollicitudin lectus rutrum vel. Integer iaculis vitae nisl quis tincidunt. Sed quis dui vehicula, vehicula felis a, tempor leo. Fusce tincidunt, ante eget pretium efficitur, libero elit volutpat quam, sit amet porta tortor odio non ligula. Ut sed dolor eleifend massa auctor porttitor eget ut lectus. Vivamus elementum lorem mauris, eu luctus tortor posuere sit amet. Nunc a interdum metus.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories

const meta: Meta<MetadataProps> = {
  title: 'Components/Metadata',
  tags: ['autodocs'],
  component: typeof Metadata,
  argTypes: {
    title: {
      description: 'Title text'
    },
    description: {
      description: 'Description text'
    },
    tone: {
      control: { type: 'radio' },
      options: ['neutral', 'inverse', 'brand'],
      description: 'Sets the tone for the component',
      table: {
        defaultValue: { summary: 'neutral' }
      }
    },
    states: {
      control: { type: 'radio' },
      options: ['focus', 'unfocused', 'disabled'],
      description: 'Sets the visual mode for the component',
      table: {
        defaultValue: { summary: 'focus' }
      }
    }
  },
  //@ts-expect-error custom render method needed to use Blits component
  render: args => ({
    name: 'Metadata',
    fn: Metadata,
    args
  })
};

type Story = StoryObj<MetadataProps>;
export const Basic: Story = {
  args: {
    title: 'Title',
    description: lorum,
    maxLines: 3,
    details: {
      title: 'Support text',
      badges: [{ title: 'TV-14' }, { title: 'HD' }, { title: 'CC' }],
      ratings: [
        {
          src: lightning,
          title: 76
        },
        {
          src: lightning,
          title: 96
        }
      ]
    },
    width: 770,
    tone: 'neutral',
    states: 'focus'
  }
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

/*
 * Copyright 2024 Comcast Cable Communications Management, LLC
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
import ListItem from './ListItem.jsx';
import theme from 'theme';
import { View } from '@lightningjs/solid';

type Story = StoryObj<typeof ListItem>;

const meta: Meta<typeof ListItem> = {
  title: 'Components/ListItem',
  tags: ['autodocs'],
  component: ListItem,
  // argTypes: {
  //   states: {

  //   }
  // }
}

export const ListItemStory: Story = {
  render: args => {
    console.log('args')
    return (
      <ListItem />
    )
  }
}

export default meta;

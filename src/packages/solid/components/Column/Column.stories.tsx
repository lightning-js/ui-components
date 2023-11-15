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

import SolidColumn from './Column';
import Button from '../Button';

const meta = {
  title: 'Components/Column',
  component: SolidColumn,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'object' },
      description: 'items inside a column',
      table: {
        defaultValue: { summary: '[]' }
      }
    }
  }
};

export default meta;

const createItems = (length) => {
  return Array.from({ length }).map((_, i) => {
    const button = (
      <Button width={300} height={100}>
        Button {i + 1}
      </Button>
    );
    return button;
  });
};

const buttons = () => <>{createItems(7)}</>;

export const Basic = {
  args: {
    children: buttons
  }
};

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
import Badge from './Badge';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import theme from 'theme';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'text inside of badge'
    },
    iconAlign: {
      control: 'select',
      options: ['none', 'left', 'right'],
      description: 'Side of the text the icon will appear on'
    },
    icon: {
      icon: {
        description: 'path to image or inline SVG XML'
      },
      color: {
        description: 'color of icon',
        control: 'color'
      }
    }
  }
};

export default meta;

export const Basic = {
  args: {
    title: 'Badge Text',
    width: 250,
    iconAlign: 'left',
    icon: {
      width: 20,
      height: 20,
      color: theme.color.fillNeutralSecondary[0],
      icon: lightning
    }
  }
};

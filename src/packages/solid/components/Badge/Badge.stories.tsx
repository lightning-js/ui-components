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

import Icon from '../Icon/Icon.jsx';
import Badge, { BadgeContainer } from './Badge.jsx';
import { Text } from '@lightningjs/solid';
import styles from './Badge.styles.js';
const lightning = '/assets/images/ic_lightning_white_32.png';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
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
    icon: {
      src: {
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
    title: 'Badge Text'
  }
};

export const BadgeIcon = {
  render: args => {
    return (
      <BadgeContainer {...args}>
        <Icon
          style={[styles.Icon.tones[args.tone ?? styles.tone], styles.Icon.base]}
          tone={args.tone ?? styles.tone}
          src={lightning}
          width={25}
          height={25}
        />
        <Text style={[styles.Text.tones[args.tone ?? styles.tone], styles.Text.base]}>Badge Text</Text>
      </BadgeContainer>
    );
  },

  args: {
    title: 'Badge Text'
  }
};

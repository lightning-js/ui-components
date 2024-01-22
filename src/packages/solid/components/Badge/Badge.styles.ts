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

import theme from 'theme';
import { type NodeStyles } from '@lightningjs/solid';
import type { Tone } from 'types';
import type { ComponentStyleConfig, NodeStyleSet, TextStyleSet } from '../../types/types.js';
import { makeComponentStyles } from '../../utils/index.js';

export interface BadgeStyle {
  tone: Tone;
  Container: NodeStyleSet;
  Icon: NodeStyleSet;
  Text: TextStyleSet;
}

type BadgeStyleProperties = Partial<{
  backgroundColor: NodeStyles['color'];
  textColor: NodeStyles['color'];
  iconColor: NodeStyles['color'];
  strokeColor: NodeStyles['color']; // TODO do we use this?
  borderColor: NodeStyles['color'];
}>;

type BadgeConfig = ComponentStyleConfig<BadgeStyleProperties>;

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Badge: { styles: themeStyles, tone } = { styles: {}, tone: 'neutral' } } = theme?.componentConfig;

const container: BadgeConfig = {
  themeKeys: {
    color: 'backgroundColor'
  },
  base: {
    color: theme.color.fillInverseSecondary,
    borderRadius: theme.radius.sm, // borderRadius must be applied _before_ border to prevent the node from breaking
    border: {
      color: theme.color.strokeInverse,
      width: theme.stroke.sm
    },
    display: 'flex',
    height: theme.typography.tag1.lineHeight,
    justifyContent: 'spaceEvenly',
    padding: [
      theme.spacer.md - theme.stroke.sm,
      theme.spacer.xs + theme.stroke.sm,
      theme.spacer.md + theme.stroke.sm,
      theme.spacer.md + theme.stroke.sm
    ]
  },
  toneModes: {
    inverse: {
      color: theme.color.fillNeutralSecondary,
      border: {
        color: theme.color.strokeInverseSecondary,
        width: theme.stroke.sm
      }
    },
    brand: {
      color: theme.color.fillBrand,
      border: {
        color: theme.color.strokeInverseSecondary,
        width: theme.stroke.sm
      }
    }
  },
  themeStyles
};

const text: BadgeConfig = {
  themeKeys: {
    color: 'textColor'
  },
  base: {
    color: theme.color.textNeutral,
    textStyle: theme.typography.tag1
  },
  toneModes: {
    inverse: {
      color: theme.color.textInverse
    },
    brand: {
      color: theme.color.textNeutral
    }
  },
  themeStyles
};

const icon: BadgeConfig = {
  themeKeys: {
    color: 'iconColor'
  },
  base: {
    color: theme.color.textNeutral
  },
  toneModes: {
    inverse: {
      color: theme.color.textInverse
    },
    brand: {
      color: theme.color.textNeutral
    }
  },
  themeStyles
};

const Container = makeComponentStyles<BadgeStyle['Container']>(container);
const Icon = makeComponentStyles<BadgeStyle['Icon']>(icon);
const Text = makeComponentStyles<BadgeStyle['Text']>(text);

const styles: BadgeStyle = {
  tone: tone,
  Container,
  Icon,
  Text
};

export default styles;

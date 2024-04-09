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

import type { NodeStyles } from '@lightningjs/solid';
import theme from 'theme';
import type { ComponentStyleConfig, NodeStyleSet, Tone } from '../../types/types.js';
import { makeComponentStyles, getDimensions, getWidthByUpCount } from '../../utils/index.js';

export interface CardContentStyles {
  tone: Tone;
  TileContainer: NodeStyleSet<{ padding: number[] }>;
  Container: NodeStyleSet<{ padding: number[]; borderRadius: [number, number, number, number] }>;
  MetadataContainer: NodeStyleSet<{ padding: number[] }>;
}

export type CardContentStyleProperties = {
  backgroundColor?: NodeStyles['color'];
  borderRadius?: NodeStyles['borderRadius'];
};

type CardContentModes = 'collapsed' | 'focus' | 'disabled';
type CardContentConfig = ComponentStyleConfig<CardContentStyleProperties, CardContentModes>;

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { CardContent: { defaultTone, ...cardContentthemeStyles } = { styles: {} } } = theme?.componentConfig;

const container: CardContentConfig = {
  themeKeys: {},
  base: {
    // width: getWidthByUpCount(theme, 2),
    height:
      getDimensions({
        ratioX: 16,
        ratioY: 9,
        upCount: 4
      }).h ?? 0,
    padding: [theme.spacer.xl, theme.spacer.xl], // TODO support separate paddingX and paddingY values from theme, possibly formatter
    borderRadius: [theme.radius.md, theme.radius.md, theme.radius.md, theme.radius.md],
    flexDirection: 'row',
    display: 'flex'
  },
  modes: {},
  tones: {},
  themeStyles: cardContentthemeStyles
};

const tileContainer: CardContentConfig = {
  themeKeys: {},
  base: {
    width: getDimensions({ ratioX: 16, ratioY: 9, upCount: 4 }).w,
    height: getDimensions({ ratioX: 16, ratioY: 9, upCount: 4 }).h,
    borderRadius: [theme.radius.md, 0, 0, theme.radius.md]
  },
  modes: {
    collapsed: {
      borderRadius: [theme.radius.md, theme.radius.md, theme.radius.md, theme.radius.md]
    }
  },
  tones: {},
  modeKeys: ['focus', 'disabled', 'collapsed'],
  themeStyles: cardContentthemeStyles
};

const metadataContainer: CardContentConfig = {
  themeKeys: {
    color: 'backgroundColor'
  },
  base: {
    width: (getWidthByUpCount(theme, 2) ?? 0) - getDimensions({ ratioX: 16, ratioY: 9, upCount: 4 }).w,
    height: getDimensions({ ratioX: 16, ratioY: 9, upCount: 4 }).h,
    color: theme.color.fillInverseSecondary,
    padding: [theme.spacer.xl, theme.spacer.xl],
    borderRadius: [0, theme.radius.md, theme.radius.md, 0]
  },
  modes: {
    focus: {
      color: theme.color.interactiveNeutralFocus
    },
    disabled: {
      color: theme.color.fillNeutralDisabled
    }
  },
  tones: {
    neutral: {
      focus: {
        color: theme.color.interactiveNeutralFocusSoft
      }
    },
    inverse: {
      color: theme.color.interactiveInverse,
      focus: {
        color: theme.color.interactiveInverseFocusSoft
      }
    },
    brand: {
      focus: {
        color: theme.color.interactiveBrandFocusSoft
      }
    }
  },
  themeStyles: cardContentthemeStyles
};

const Container = makeComponentStyles<CardContentStyles['Container']>(container);
const TileContainer = makeComponentStyles<CardContentStyles['TileContainer']>(tileContainer);
const MetadataContainer = makeComponentStyles<CardContentStyles['MetadataContainer']>(metadataContainer);

const styles: CardContentStyles = {
  tone: defaultTone || 'neutral',
  Container,
  TileContainer,
  MetadataContainer
};

export default styles;

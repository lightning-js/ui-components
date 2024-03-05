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

import type { NodeStyles } from '@lightningjs/solid';
import theme from 'theme';
import type { TextStyleSet, Tone } from '../../types/types.js';
import type { ComponentStyleConfig, NodeStyleSet } from '../../types/types.js';
import { makeComponentStyles } from '../../utils/index.js';

export interface DetailsStyles {
  tone: Tone;
  Container: NodeStyleSet<{
    badgeContentSpacing: number;
    contentSpacing: number;
    ratingContentSpacing: number;
  }>;
  Text: TextStyleSet;
}

export type DetailsStyleProperties = {
  alignItems?: NodeStyles['alignItems'];
  contentSpacing?: number;
  badgeContentSpacing?: number;
  ratingContentSpacing?: number;
};

export type DetailsConfig = ComponentStyleConfig<DetailsStyleProperties>;

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Details: { defaultTone, ...themeStyles } = { styles: {} } } = theme?.componentConfig; // TODO this probably shouldn't be themed this way

const container: DetailsConfig = {
  themeKeys: {
    alignItems: 'alignItems',
    contentSpacing: 'contentSpacing',
    badgeContentSpacing: 'badgeContentSpacing',
    ratingContentSpacing: 'ratingContentSpacing'
  },
  base: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    contentSpacing: theme.spacer.lg,
    badgeContentSpacing: theme.spacer.sm,
    ratingContentSpacing: theme.spacer.lg
  },
  themeStyles
};

const text: DetailsConfig = {
  themeKeys: {
    color: 'textColor'
  },
  base: {
    ...theme.typography.body2,
    marginRight: theme.spacer.lg,
    color: theme.color.textNeutral
  },
  tones: {
    neutral: {
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    },
    inverse: {
      color: theme.color.textInverse,
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    },
    brand: {
      color: theme.color.textNeutral,
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    }
  },
  themeStyles
};

const Container = makeComponentStyles<DetailsStyles['Container']>(container);
const Text = makeComponentStyles<DetailsStyles['Text']>(text);

const styles: DetailsStyles = {
  tone: defaultTone || 'neutral',
  Container,
  Text
};

export default styles;

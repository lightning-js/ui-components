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
  Container: NodeStyleSet;
  Text: TextStyleSet;
}

export type DetailsStyleProperties = {
  alignItems?: NodeStyles['alignItems'];
  contentSpacing?: NodeStyles['contentSpacing'];
  badgeContentSpacing?: NodeStyles['badgeContentSpacing'];
  ratingContentSpacing?: NodeStyles['ratingContentSpacing'];
};

export type DetailsConfig = ComponentStyleConfig<DetailsStyleProperties>;

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Details: { styles: themeStyles, defaultTone } = { styles: {}, defaultTone: 'neutral' } } =
  theme?.componentConfig;

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
  toneModes: {},
  themeStyles
};

const text: DetailsConfig = {
  themeKeys: {
    color: 'textColor'
  },
  base: {
    ...theme.typography.body2,
    marginRight: theme.spacer.lg
  },
  toneModes: {
    disabled: {
      color: theme.color.textNeutralDisabled
    }
  },
  themeStyles
};

const Container = makeComponentStyles<DetailsStyles['Container']>(container);
const Text = makeComponentStyles<DetailsStyles['Text']>(text);

const styles: DetailsStyles = {
  tone: defaultTone,
  Container,
  Text
};

export default styles;

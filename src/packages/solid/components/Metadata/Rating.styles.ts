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

import type { TextStyles, NodeStyles } from '@lightningjs/solid';
import theme from 'theme';
import type { Tone } from '../../types/types.js';
import type { ComponentStyleConfig, NodeStyleSet, TextStyleSet } from '../../types/types.js';
import { makeComponentStyles } from '../../utils/index.js';
import type { IconStyles, IconConfig } from '../Icon/Icon.types.js';

export interface RatingStyles {
  tone: Tone;
  Container: NodeStyleSet<{ padding: number[] }>;
  Icon: NodeStyleSet;
  Text: TextStyleSet;
}

type RatingStyleProperties = {
  justifyContent?: NodeStyles['justifyContent'];
  textAlign?: TextStyles['textAlign'];
  textColor?: TextStyles['color'];
  itemSpacing?: NodeStyles['itemSpacing'];
  alignItems?: NodeStyles['alignItems'];
};

type RatingConfig = ComponentStyleConfig<RatingStyleProperties>;

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Rating: { defaultTone, ...themeStyles } = { themeStyles: {} } } = theme?.componentConfig;

const container: RatingConfig = {
  themeKeys: {
    justifyContent: 'justifyContent',
    itemSpacing: 'itemSpacing'
  },
  base: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flexStart',
    itemSpacing: theme.spacer.sm,
    alignItems: 'center'
  },
  themeStyles
};

const text: RatingConfig = {
  themeKeys: {
    color: 'textColor'
  },
  base: {
    color: theme.color.textNeutral,
    ...theme.typography.body2
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

const icon: IconConfig = {
  themeKeys: {
    color: 'color'
  },
  base: {
    height: theme.typography.body2.lineHeight,
    width: theme.typography.body2.lineHeight,
    color: theme.color.fillNeutral,
    marginRight: theme.spacer.sm
  },
  themeStyles
};

const Container = makeComponentStyles<RatingStyles['Container']>(container);
const Icon = makeComponentStyles<IconStyles['Container']>(icon);
const Text = makeComponentStyles<RatingStyles['Text']>(text);

const styles: RatingStyles = {
  tone: defaultTone,
  Container,
  Text,
  Icon
};

export default styles;

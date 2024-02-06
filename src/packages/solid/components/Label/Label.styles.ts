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
import type { Tone } from 'types';
import type { ComponentStyleConfig, NodeStyleSet, TextStyleSet } from '../../types/types.js';
import { makeComponentStyles } from '../../utils/index.js';

export interface LabelStyles {
  tone: Tone;
  Container: NodeStyleSet;
  Text: TextStyleSet;
}

type LabelStyleProperties = Partial<{
  backgroundColor: NodeStyles['color'];
  textColor: NodeStyles['color'];
  padding: [number, number];
  borderRadius: NodeStyles['borderRadius'];
  height: NodeStyles['height'];
}>;

type LabelConfig = ComponentStyleConfig<LabelStyleProperties>;

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Label: { styles: themeStyles, tone } = { styles: {}, tone: 'neutral' } } = theme?.componentConfig;

const container: LabelConfig = {
  themeKeys: {
    color: 'backgroundColor'
  },
  base: {
    display: 'flex',
    color: theme.color.textNeutral,
    padding: [theme.spacer.md, theme.spacer.lg], // TODO themed padding values
    borderRadius: [theme.radius.md, theme.radius.md, theme.radius.md, theme.radius.none],
    height: theme.typography.caption1.lineHeight + theme.spacer.md,
    neutral: {
      backgroundColor: theme.color.fillNeutral
    }
  },
  toneModes: {
    inverse: {
      color: theme.color.fillInverse
    },
    brand: {
      // color: theme.color.fillBrand
      color: theme.color.orange
    },
    'brand-focus': {
      color: theme.color.orange
    }
  },
  themeStyles
};

const text: LabelConfig = {
  themeKeys: {
    color: 'textColor'
  },
  base: {
    ...theme.typography.caption1,
    color: theme.color.textInverse
  },
  toneModes: {
    inverse: {
      color: theme.color.textNeutral
    },
    brand: {
      color: theme.color.textNeutral
    }
  },
  themeStyles
};

const Container = makeComponentStyles<LabelStyles['Container']>(container);
const Text = makeComponentStyles<LabelStyles['Container']>(text);

const styles: LabelStyles = {
  tone: tone,
  Container,
  Text
};

export default styles;

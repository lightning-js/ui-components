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

import { type NodeStyles } from '@lightningjs/solid';
import theme from 'theme';
import type { Tone } from '../../types/types.js';
import { makeComponentStyles } from '../../utils/index.js';
import type { ComponentStyleConfig, NodeStyleSet } from '../../types/types.js';

export interface ProgressBarStyles {
  tone: Tone;
  Container: NodeStyleSet;
  ProgressBar: NodeStyleSet;
}

type ProgressBarStyleProperties = {
  height?: NodeStyles['height'];
  progressColor?: NodeStyles['color'];
  barColor?: NodeStyles['color'];
  borderRadius?: NodeStyles['borderRadius'];
};

type ProgressBarConfig = ComponentStyleConfig<ProgressBarStyleProperties>;

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { ProgressBar: { styles: themeStyles, defaultTone } = { styles: {}, defaultTone: 'neutral' } } =
  theme?.componentConfig;

const container: ProgressBarConfig = {
  themeKeys: {
    color: 'barColor',
    borderRadius: 'borderRadius'
  },
  base: {
    height: theme.spacer.md,
    color: theme.color.fillNeutralTertiary,
    borderRadius: theme.radius.xs
  },
  toneModes: {
    inverse: {
      color: theme.color.fillInverseTertiary
    }
  },
  themeStyles
};

const progress: ProgressBarConfig = {
  themeKeys: {
    color: 'progressColor',
    borderRadius: 'borderRadius'
  },
  base: {
    borderRadius: theme.radius.xs,
    color: theme.color.fillNeutral
  },
  toneModes: {
    inverse: {
      color: theme.color.fillInverse
    },
    brand: {
      color: theme.color.fillBrand
    }
  },
  themeStyles
};

const Container = makeComponentStyles<ProgressBarStyles['Container']>(container);
const ProgressBar = makeComponentStyles<ProgressBarStyles['ProgressBar']>(progress);

const styles: ProgressBarStyles = {
  tone: defaultTone,
  Container,
  ProgressBar
};

export default styles;

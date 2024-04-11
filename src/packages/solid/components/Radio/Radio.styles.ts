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

import type { BorderStyleObject, NodeStyles } from '@lightningjs/solid';
import theme from 'theme';
import type { Tone } from '../../types/types.js';
import type { ComponentStyleConfig, NodeStyleSet } from '../../types/types.js';
import { makeComponentStyles } from '../../utils/index.js';
import type { Color } from 'types';

export interface RadioStyles {
  tone: Tone;
  Container: NodeStyleSet<{ border: BorderStyleObject; colorChecked: Color }>;
  Knob: NodeStyleSet<{ padding: number; colorChecked: Color }>;
}

export type RadioStyleProperties = {
  backgroundColor?: NodeStyles['color'];
  backgroundColorChecked?: NodeStyles['color'];
  knobWidth?: NodeStyles['width'];
  knobHeight?: NodeStyles['height'];
  knobPadding?: number;
  knobRadius?: NodeStyles['borderRadius'];
  knobColor?: NodeStyles['color'];
  knobColorChecked?: NodeStyles['color'];
  knobSize?: NodeStyles['width'];
  strokeRadius?: NodeStyles['borderRadius'];
};

type RadioConfig = ComponentStyleConfig<RadioStyleProperties>;

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Radio: { defaultTone, ...themeStyles } = { styles: {} } } = theme?.componentConfig;

const knobSize = theme.spacer.xxl;
const strokeWidth = theme.stroke.sm;

const container: RadioConfig = {
  themeKeys: {
    borderRadius: 'strokeRadius',
    color: 'backgroundColor',
    colorChecked: 'backgroundColorChecked'
  },
  base: {
    color: theme.color.fillNeutralSecondary,
    colorChecked: theme.color.fillInverse,
    height: knobSize + strokeWidth * 2,
    width: knobSize + strokeWidth * 2,
    borderRadius: knobSize / 2 + strokeWidth,
    border: {
      color: theme.color.strokeNeutralSecondary,
      width: strokeWidth
    }
  },
  tones: {
    inverse: {
      border: {
        color: theme.color.strokeInverseSecondary,
        width: strokeWidth
      }
    },
    brand: {
      border: {
        color: theme.color.fillBrand,
        width: strokeWidth
      }
    }
  },
  themeStyles
};

const knob: RadioConfig = {
  themeKeys: {
    width: 'knobWidth',
    height: 'knobHeight',
    borderRadius: 'knobRadius',
    color: 'knobColor'
  },
  base: {
    color: theme.color.fillInverse,
    width: knobSize,
    height: knobSize,
    borderRadius: knobSize / 2
  },
  tones: {
    inverse: {
      color: theme.color.fillNeutral
    }
  },
  themeStyles
};

const Container = makeComponentStyles<RadioStyles['Container']>(container);
const Knob = makeComponentStyles<RadioStyles['Knob']>(knob);

const styles: RadioStyles = {
  tone: defaultTone || 'neutral',
  Container,
  Knob
};

export default styles;

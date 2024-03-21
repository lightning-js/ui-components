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

import type { BorderStyleObject, NodeStyles } from '@lightningjs/solid';
import theme from 'theme';
import type { Tone } from '../../types/types.js';
import type { ComponentStyleConfig, NodeStyleSet } from '../../types/types.js';
import { makeComponentStyles } from '../../utils/index.js';
import type { Color } from 'types';

export interface ToggleStyles {
  tone: Tone;
  Container: NodeStyleSet<{ border: BorderStyleObject; colorChecked: Color }>;
  Knob: NodeStyleSet<{ padding: number; colorChecked: Color }>;
}

type ToggleStyleProperties = {
  backgroundColor?: NodeStyles['color'];
  backgroundColorChecked?: NodeStyles['color'];
  knobWidth?: NodeStyles['width'];
  knobHeight?: NodeStyles['height'];
  knobPadding?: number;
  knobRadius?: NodeStyles['borderRadius'];
  knobColor?: NodeStyles['color'];
  knobColorChecked?: NodeStyles['color'];
  knobSize?: NodeStyles['width'];
  // strokeColor?: NodeStyles['borderColor'];
  strokeRadius?: NodeStyles['borderRadius'];
  // strokeWidth?: NodeStyles['borderWidth'];
};

type ToggleConfig = ComponentStyleConfig<ToggleStyleProperties>;

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Toggle: { defaultTone, ...themeStyles } = { styles: {} } } = theme?.componentConfig;

const knobSize = theme.spacer.xl;
const knobPadding = theme.spacer.xs;
const strokeWidth = theme.stroke.sm;

const container: ToggleConfig = {
  themeKeys: {
    borderRadius: 'strokeRadius',
    color: 'backgroundColor',
    colorChecked: 'backgroundColorChecked'
  },
  base: {
    color: theme.color.fillInverseTertiary,
    colorChecked: theme.color.fillNeutral,
    height: knobSize + (knobPadding + strokeWidth) * 2,
    width: (strokeWidth + knobPadding * 2 + knobSize) * 2,
    borderRadius: knobSize / 2 + knobPadding + strokeWidth,
    border: { // TODO- strokeWidth and strokeColor map to border object with themeKeys
      color: theme.color.fillNeutral,
      width: strokeWidth
    }
  },
  modes: {
    focus: {},
    disabled: {
      borderColor: theme.color.fillNeutralDisabled,
      border: {
        color: theme.color.fillNeutralDisabled,
        width: strokeWidth
      },
      color: theme.color.fillInverseDisabled
    }
  },
  tones: {
    inverse: {
      borderColor: theme.color.fillInverse,
      border: {
        color: theme.color.fillInverse,
        width: strokeWidth
      },
      color: theme.color.fillNeutralTertiary,
      disabled: {
        borderColor: theme.color.fillInverseDisabled,
        border: {
          color: theme.color.fillInverseDisabled,
          width: strokeWidth
        },
        color: theme.color.fillNeutralDisabled,
        colorChecked: theme.color.fillInverseDisabled
      }
    },
    brand: {
      borderColor: theme.color.fillBrand,
      border: {
        color: theme.color.fillBrand,
        width: strokeWidth
      },
      color: theme.color.fillBrandTertiary,
      disabled: {
        borderColor: theme.color.fillNeutralDisabled,
        border: {
          color: theme.color.fillNeutralDisabled,
          width: strokeWidth
        },
        color: theme.color.fillInverseDisabled,
        colorChecked: theme.color.fillNeutralDisabled
      }
    }
  },
  // TODO: figure out checked state
  themeStyles
};

const knob: ToggleConfig = {
  themeKeys: {
    width: 'knobWidth',
    height: 'knobHeight',
    padding: 'knobPadding',
    borderRadius: 'knobRadius',
    color: 'knobColor',
    colorChecked: 'knobColorChecked'
  },
  base: {
    color: theme.color.fillNeutral,
    colorChecked: theme.color.fillInverse,
    width: knobSize,
    height: knobSize,
    borderRadius: knobSize / 2,
    padding: knobPadding
  },
  modes: {
    focus: {},
    disabled: {
      color: theme.color.fillNeutralDisabled,
      colorChecked: theme.color.fillInverseDisabled
    }
  },
  tones: {
    inverse: {
      color: theme.color.fillInverse,
      colorChecked: theme.color.fillNeutral,
      disabled: {
        color: theme.color.fillInverseDisabled,
        colorChecked: theme.color.fillNeutralDisabled
      }
    },
    brand: {
      color: theme.color.fillBrand,
      colorChecked: theme.color.fillInverse,
      disabled: {
        color: theme.color.fillNeutralDisabled,
        colorChecked: theme.color.fillInverseDisabled
      }
    }
  },
  themeStyles
};

const Container = makeComponentStyles<ToggleStyles['Container']>(container);
const Knob = makeComponentStyles<ToggleStyles['Knob']>(knob);

const styles: ToggleStyles = {
  tone: defaultTone || 'neutral',
  Container,
  Knob
};

export default styles;

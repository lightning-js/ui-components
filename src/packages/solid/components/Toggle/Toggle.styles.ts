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

export interface ToggleStyles {
  tone: Tone;
  Container: NodeStyleSet<{ padding: number[] }>;
  Knob: NodeStyleSet;
}

type ToggleStyleProperties = {
  backgroundColor?: NodeStyles['color'];
  knobWidth?: NodeStyles['width'];
  knobHeight?: NodeStyles['height'];
  knobPadding?: NodeStyles['padding'];
  knobRadius?: NodeStyles['borderRadius'];
  knobColor?: NodeStyles['color'];
  knobColorChecked?: NodeStyles['color'];
  knobSize?: NodeStyles['width'];
  strokeColor?: NodeStyles['borderColor'];
  strokeRadius?: NodeStyles['borderRadius'];
  strokeWidth?: NodeStyles['borderWidth'];
};

type ToggleConfig = ComponentStyleConfig<ToggleStyleProperties>;

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Toggle: { styles: themeStyles, defaultTone } = { styles: {}, defaultTone: 'neutral' } } =
  theme?.componentConfig;

const container: ToggleConfig = {
  themeKeys: {
    borderRadius: 'strokeRadius',
    borderColor: 'strokeColor',
    color: 'backgroundColor'
  },
  base: {
    strokeColor: theme.color.fillNeutral,
    backgroundColor: theme.color.fillInverseTertiary,
    knobColor: theme.color.fillNeutral,
    knobColorChecked: theme.color.fillInverse
  },
  toneModes: {
    disabled: {
      strokeColor: theme.color.fillNeutralDisabled,
      backgroundColor: theme.color.fillInverseDisabled,
      knobColor: theme.color.fillNeutralDisabled,
      knobColorChecked: theme.color.fillInverseDisabled
    },
    inverse: {
      strokeColor: theme.color.fillInverse,
      backgroundColor: theme.color.fillNeutralTertiary,
      knobColor: theme.color.fillInverse,
      knobColorChecked: theme.color.fillNeutral
    },
    brand: {
      strokeColor: theme.color.fillBrand,
      backgroundColor: theme.color.fillBrandTertiary,
      knobColor: theme.color.fillBrand,
      knobColorChecked: theme.color.fillInverse
    },
    'inverse-disabled': {
      strokeColor: theme.color.fillInverseDisabled,
      backgroundColor: theme.color.fillNeutralDisabled,
      backgroundColorChecked: theme.color.fillInverseDisabled,
      knobColor: theme.color.fillInverseDisabled,
      knobColorChecked: theme.color.fillNeutralDisabled
    },
    'brand-disabled': {
      strokeColor: theme.color.fillNeutralDisabled,
      backgroundColor: theme.color.fillInverseDisabled,
      backgroundColorChecked: theme.color.fillNeutralDisabled,
      knobColor: theme.color.fillNeutralDisabled,
      knobColorChecked: theme.color.fillInverseDisabled
    },
    'neutral-checked': {
        backgroundColor: theme.color.fillNeutral,
    },
    'neutral-checked-disabled': {
        backgroundColor: theme.color.fillNeutralDisabled,
    }
    'inverse-checked': {
        backgroundColor: theme.color.fillInverse,
    },
    'brand-checked': {
        backgroundColor: theme.color.fillBrand,
    }
  },
  themeStyles
};

const knob: ToggleConfig = {
  themeKeys: {
    width: 'knobWidth',
    height: 'knobHeight',
    padding: 'knobPadding',
    borderRadius: 'knobRadius',
    color: 'knobColor'
  },
  base: {},
  toneModes: {
    focus: {
      color: theme.color.interactiveNeutralFocus,
      contentColor: theme.color.fillInverse
    },
    disabled: {
      color: theme.color.fillNeutralDisabled,
      contentColor: theme.color.textNeutralDisabled
    },
    inverse: {
      color: theme.color.interactiveInverse
    },
    brand: {
      contentColor: theme.color.fillBrand
    },
    'inverse-focus': {
      color: theme.color.interactiveInverseFocus,
      contentColor: theme.color.fillNeutral
    },
    'brand-focus': {
      contentColor: theme.color.fillNeutral
    }
  },
  themeStyles
};

const Container = makeComponentStyles<ToggleStyles['Container']>(container);
const Knob = makeComponentStyles<ToggleStyles['Knob']>(knob);

const styles: ToggleStyles = {
  tone: defaultTone,
  Container,
  Knob
};

export default styles;

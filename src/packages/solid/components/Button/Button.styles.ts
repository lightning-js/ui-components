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
import type { WithTonesModes, Tone } from '../../../../shared/types/solid.js';
import { type TextStyles, type NodeStyles } from '@lightningjs/solid';
import { getHexColor } from 'utils';

export interface ButtonStyle {
  tone: Tone;
  Container: (NodeStyles & { padding: number[] }) & WithTonesModes<NodeStyles & { padding: number[] }>;
  FlexContainer: NodeStyles & WithTonesModes<NodeStyles>;
  Text: TextStyles & WithTonesModes<TextStyles>;
}

const configList = ['Surface', 'Button'];

const inheritedConfigs = configList.reduce((acc, item) => {
  if (theme.componentConfig[item]) {
    acc = {
      ...acc,
      ...theme.componentConfig[item]
    };
  }
  return acc;
}, {});

const { base, defaultTone, ...states } = inheritedConfigs;

const propertyResolver = (prop, theme) => {
  /**
   * if property is the same value throughout the components styles
   * ensure we're returning the same value each time
   * ie. textColor would need to map to Text and Icons?
   *    ^ maybe - this might get handled through subComponent configs
   */
};

/**
 * TODO how does contentColor work
 * it should be applied to the prefix/suffix/text
 */

const buttonContainerStyles: ButtonStyle['Container'] = {
  height: 100,
  width: 400,
  padding: [40, 10],
  color: getHexColor(...(theme.color.interactiveNeutralFocusSoft as [string, number])), //interactiveNeutralFocus undefined
  contentColor: getHexColor(...(theme.color.fillInverse as [string, number])),
  display: 'flex',
  justifyContent: 'center',
  borderRadius: 30,
  ...base,
  'neutral-focus': {
    // color: getHexColor(...(theme.color.interactiveNeutralFocus as [string, number])),
    // contentColor: getHexColor(...(theme.color.fillNeutral as [string, number]))
    color: getHexColor(...(theme.color.green as [string, number])),
    contentColor: getHexColor(...(theme.color.fillNeutral as [string, number]))
  },
  'neutral-disabled': {
    color: getHexColor(...(theme.color.fillNeutralDisabled as [string, number])),
    contentColor: getHexColor(...(theme.color.fillNeutralDisabled as [string, number]))
  },
  inverse: {
    color: getHexColor(...(theme.color.interactiveNeutralFocusSoft as [string, number])), //interactiveNeutralFocus undefined
    contentColor: getHexColor(...(theme.color.fillInverse as [string, number]))
  },
  brand: {
    // color: getHexColor(...(theme.color.interactiveNeutralFocusSoft as [string, number])), //interactiveNeutralFocus undefined
    color: getHexColor(...(theme.color.blue as [string, number])),
    contentColor: getHexColor(...(theme.color.fillInverse as [string, number]))
  },
  'brand-focus': {
    color: getHexColor(...(theme.color.green as [string, number]))
  }
} as const;

const buttonFlexContainerStyles: ButtonStyle['FlexContainer'] = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  mountY: -0.3
};

const buttonTextStyles: ButtonStyle['Text'] = {
  textAlign: 'left',
  color: getHexColor(...(theme.color.textNeutral as [string, number])),
  ...theme.typography.button1,
  'neutral-focus': {
    // color: getHexColor(...(theme.color.fillInverse as [string, number]))
    color: getHexColor(...(theme.color.white as [string, number]))
  },
  'neutral-disabled': {
    // color: getHexColor(...(theme.color.fillNeutralDisabled as [string, number]))
  },
  inverse: {
    color: getHexColor(...(theme.color.fillNeutral as [string, number]))
  },
  brand: {
    // color: getHexColor(...(theme.color.fillBrand as [string, number]))
    // color: getHexColor(...(theme.color.red as [string, number]))
    color: getHexColor(...(theme.color.green as [string, number]))
  },
  'brand-focus': {
    // color: getHexColor(...(theme.color.fillBrand as [string, number]))
    color: getHexColor(...(theme.color.red as [string, number]))
  }
};
const styles: ButtonStyle = {
  tone: 'neutral',
  Container: buttonContainerStyles,
  FlexContainer: buttonFlexContainerStyles,
  Text: buttonTextStyles,
  ...states
};

export default styles;

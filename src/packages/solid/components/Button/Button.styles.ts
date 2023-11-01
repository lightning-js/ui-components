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
import { getHexColor } from '../../../../shared/utils/index'; // TODO ts path aliasing

type Color = number | string;
type AnimationSettings = { duration?: number; delay?: number; timing?: string };
type TextAlign = 'left' | 'center' | 'right';
type ContentAlign = 'center' | 'flexStart' | 'flexEnd' | 'spaceBetween' | 'spaceEvenly';
type States = 'active' | 'focus' | 'disabled';

/**
 * allows the property to either be the supplied type,
 * or an array containing that type and an animationSettings object
 */
type Animatable<Type> = Type | [Type, AnimationSettings];

/**
 * states can contain any of the style object's properties, except other states
 */
type StateStyle<Type> = Partial<Omit<Type, States>>;

type ButtonStyle = {
  Container?: {
    height: number;
    display: 'flex';
    justifyContent: ContentAlign;
    padding: number[];
    color: Animatable<Color>;
    contentColor: Animatable<Color>;
    borderRadius: number;
    focus?: StateStyle<ButtonStyle['Container']>;
    active?: StateStyle<ButtonStyle['Container']>;
    disabled?: StateStyle<ButtonStyle['Container']>;
  };
  FlexContainer?: {
    display: 'flex';
    flexDirection: 'row' | 'column';
    justifyContent: ContentAlign;
    mountY: number;
    focus?: StateStyle<ButtonStyle['FlexContainer']>;
    active?: StateStyle<ButtonStyle['FlexContainer']>;
    disabled?: StateStyle<ButtonStyle['FlexContainer']>;
  };
  Text: {
    fontSize: number;
    textAlign: TextAlign;
    color: Animatable<Color>;
    focus?: StateStyle<ButtonStyle['Text']>;
    active?: StateStyle<ButtonStyle['Text']>;
    disabled?: StateStyle<ButtonStyle['Text']>;
  };
};

const styles: ButtonStyle = {
  Container: {
    height: theme.spacer.md * 10,
    padding: [40, 10],
    color: getHexColor(...(theme.color.fillNeutral as [string, number])),
    contentColor: getHexColor(...(theme.color.fillInverse as [string, number])),
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 30,
    focus: {
      color: getHexColor(...(theme.color.interactiveNeutralFocus as [string, number])),
      contentColor: getHexColor(...(theme.color.fillNeutral as [string, number])),
      tone: {
        inverse: {
          color: getHexColor(...(theme.color.interactiveNeutralFocus as [string, number])),
          contentColor: getHexColor(...(theme.color.fillNeutral as [string, number]))
        },
        brand: {
          contentColor: getHexColor(...(theme.color.fillNeutral as [string, number]))
        }
      }
    },
    disabled: {
      color: getHexColor(...(theme.color.fillNeutralDisabled as [string, number])),
      contentColor: getHexColor(...(theme.color.fillNeutralDisabled as [string, number]))
    }
  },
  FlexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    mountY: -0.2
  },
  Text: {
    textAlign: 'center',
    color: getHexColor(...(theme.color.textInverse as [string, number])),
    ...theme.typography.button1,
    focus: {
      color: getHexColor(...(theme.color.fillInverse as [string, number])),
      tone: {
        inverse: {
          color: getHexColor(...(theme.color.fillNeutral as [string, number]))
        },
        brand: {
          color: getHexColor(...(theme.color.fillBrand as [string, number]))
        }
      }
    },
    disabled: {
      color: getHexColor(...(theme.color.fillNeutralDisabled as [string, number]))
    }
  }
};

export default styles;

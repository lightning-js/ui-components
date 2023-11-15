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
import { type BorderStyle } from '@lightningjs/solid';
import { getHexColor } from '../../../../shared/utils/index'; // TODO ts path aliasing

// TODO: LUI styles remove before merge
// focus and unfocus no style changes
// disabled: {
//   alpha: theme.alpha.inactive;
// }
// checked: backgroundColor: theme.color.fillNeutralDisabled,
// unchecked: backgroundColorChecked: theme.color.fillNeutral

// taken from LUI
// probably used to take into account if strokeWidth changes
// is this necessary?
const strokeWidth = theme.stroke.sm;
const size = theme.spacer.xxl - strokeWidth * 2;

// only using disabled
type States = 'active' | 'focus' | 'disabled';
type StateStyle<Type> = Partial<Omit<Type, States>>;

type CheckboxStyle = {
  Container: {
    /**
     * width of checkbox
     */
    width: number;
    /**
     * height of checkbox
     */
    height: number;
    padding: number[];
    /**
     * color of checkbox background
     */
    color: number;
    borderRadius: number;
    border: BorderStyle;
    disabled?: StateStyle<CheckboxStyle['Container']>;
  };
  Background: {
    color: number;
  };
  padding: [number, number];
};

const styles: CheckboxStyle = {
  Container: {
    width: size,
    height: size,
    color: getHexColor(...(theme.color.fillNeutralDisabled as [string, number])),
    borderRadius: size / 2,
    border: {
      width: strokeWidth,
      color: getHexColor(...(theme.color.strokeInverse as [string, number]))
    },
    disabled: {
      alpha: theme.alpha.inactive
    }
  },
  Background: {
    color: getHexColor(...(theme.color.fillNeutral as [string, number]))
  }
};

export default styles;

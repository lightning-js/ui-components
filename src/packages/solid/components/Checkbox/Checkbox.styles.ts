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
import type { ComponentStyleConfig, NodeStyleSet } from '../../types/types.js';
import { makeComponentStyles } from '../../utils/index.js';

export interface CheckboxStyle {
  tone: Tone;
  Container: NodeStyleSet;
}

export type CheckboxStyleProperties = {
  color?: NodeStyles['color'];
  borderRadius?: NodeStyles['borderRadius'];
  justifyContent?: NodeStyles['justifyContent'];
};

type CheckboxConfig = ComponentStyleConfig<CheckboxStyleProperties>;
/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Checkbox: { styles: themeStyles, tone } = { styles: {}, tone: 'neutral' } } = theme?.componentConfig;

const strokeWidth = theme.stroke.sm;
const size = theme.spacer.xxl - strokeWidth * 2;

const container: CheckboxConfig = {
  themeKeys: {
    color: 'color',
    borderRadius: 'borderRadius',
    justifyContent: 'justifyContent'
  },
  base: {
    width: size,
    height: size,
    display: 'flex',
    justifyContent: 'center',
    color: theme.color.fillNeutral,
    alignItems: 'center',
    borderRadius: size / 4,
    border: {
      width: strokeWidth,
      color: theme.color.strokeInverse
    }
  },
  toneModes: {
    disabled: {
      alpha: theme.alpha.inactive
    },
    checked: {
      color: theme.color.fillNeutralDisabled
    }
  },
  themeStyles
};

const Container = makeComponentStyles<CheckboxStyle['Container']>(container);

const styles: CheckboxStyle = {
  tone: tone,
  Container
};

export default styles;

const styles = {
  Container: {
    disabled: {
      alpha: theme.alpha.inactive
    }
  }
} as const;

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

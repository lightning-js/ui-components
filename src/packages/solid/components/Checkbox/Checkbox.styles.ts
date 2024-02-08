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
import type { IconConfig, IconStyle } from '../Icon/Icon.styles.js';

export interface CheckboxStyle {
  tone: Tone;
  Container: NodeStyleSet;
  Icon: NodeStyleSet;
}

export type CheckboxStyleProperties = {
  color?: NodeStyles['color'];
  borderRadius?: NodeStyles['borderRadius'];
  border?: NodeStyles['border'];
  justifyContent?: NodeStyles['justifyContent'];
};

type CheckboxConfig = ComponentStyleConfig<CheckboxStyleProperties>;
/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Checkbox: { styles: themeStyles, tone } = { styles: {}, tone: 'neutral' } } = theme?.componentConfig;

const strokeWidth = theme.stroke.sm;
const size = theme.spacer.xxl;

const container: CheckboxConfig = {
  themeKeys: {
    color: 'color',
    borderRadius: 'borderRadius',
    border: 'border',
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
      color: theme.color.strokeInverse,
      width: strokeWidth
    }
  },
  toneModes: {
    neutral: {
      border: {
        color: theme.color.strokeNeutralSecondary,
        width: strokeWidth
      },
      color: theme.color.fillInverseSecondary
    },
    'neutral-checked': {
      border: {
        color: theme.color.strokeNeutralSecondary,
        width: strokeWidth
      },
      color: theme.color.fillNeutral
    },
    inverse: {
      border: {
        color: theme.color.strokeInverseSecondary,
        width: strokeWidth
      },
      color: theme.color.fillNeutralSecondary
    },
    'inverse-checked': {
      border: {
        color: theme.color.strokeInverseSecondary,
        width: strokeWidth
      },
      color: theme.color.fillInverse
    },
    brand: {
      border: {
        color: theme.color.strokeNeutralSecondary,
        width: strokeWidth
      },
      color: theme.color.fillNeutralSecondary
    },
    'brand-checked': {
      border: {
        color: theme.color.strokeNeutralSecondary,
        width: strokeWidth
      },
      color: theme.color.fillBrand
    },
    disabled: {
      alpha: theme.alpha.inactive
    }
  },
  themeStyles
};

const icon: IconConfig = {
  themeKeys: {
    color: 'color'
  },
  base: {
    width: theme.spacer.lg,
    height: theme.spacer.lg,
    src: theme.asset.check
  },
  toneModes: {
    neutral: {
      color: theme.color.fillInverse
    },
    inverse: {
      color: theme.color.fillNeutral
    },
    brand: {
      color: theme.color.fillInverse
    }
  },
  themeStyles
};

const Container = makeComponentStyles<CheckboxStyle['Container']>(container);
const Icon = makeComponentStyles<IconStyle['Container']>(icon);
const styles: CheckboxStyle = {
  tone: tone,
  Container,
  Icon: { Container: Icon }
};

export default styles;

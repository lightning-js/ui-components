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
import { makeComponentStyles } from '../../utils/index.js';
import type { CheckboxStyles, CheckboxConfig } from './Checkbox.types.js';

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Checkbox: { defaultTone, ...themeStyles } = { themeStyles: {} } } = theme?.componentConfig;

const strokeWidth = theme.stroke.sm;
const size = theme.spacer.xxl;

const container: CheckboxConfig = {
  themeKeys: {
    color: 'backgroundColor',
    borderRadius: 'radius',
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
  modes: {
    disabled: {
      alpha: theme.alpha.inactive
    }
  },
  tones: {
    brand: {
      borderRadius: size / 4,
      border: {
        color: theme.color.strokeNeutralSecondary,
        width: strokeWidth
      },
      color: theme.color.fillNeutralSecondary,
      checked: {
        borderRadius: size / 4,
        border: {
          color: theme.color.strokeNeutralSecondary,
          width: strokeWidth
        },
        color: theme.color.fillBrand
      }
    },
    neutral: {
      borderRadius: size / 4,
      border: {
        color: theme.color.strokeNeutralSecondary,
        width: strokeWidth
      },
      color: theme.color.fillInverseSecondary,
      checked: {
        borderRadius: size / 4,
        border: {
          color: theme.color.strokeNeutralSecondary,
          width: strokeWidth
        },
        color: theme.color.fillNeutral
      }
    },
    inverse: {
      borderRadius: size / 4,
      border: {
        color: theme.color.strokeInverseSecondary,
        width: strokeWidth
      },
      color: theme.color.fillNeutralSecondary,
      checked: {
        borderRadius: size / 4,
        border: {
          color: theme.color.strokeInverseSecondary,
          width: strokeWidth
        },
        color: theme.color.fillInverse
      }
    }
  },
  modeKeys: ['focus', 'disabled', 'checked'],
  themeStyles
};

const icon: CheckboxConfig = {
  themeKeys: {
    color: 'strokeColor',
    width: 'checkWidth',
    height: 'checkHeight'
  },
  base: {
    width: theme.spacer.lg,
    height: theme.spacer.lg,
    src: theme.asset.check
  },
  tones: {
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

const Container = makeComponentStyles<CheckboxStyles['Container']>(container);
const Icon = makeComponentStyles<CheckboxStyles['Icon']>(icon);

const styles: CheckboxStyles = {
  tone: defaultTone || 'neutral',
  Container,
  Icon
};

export default styles;

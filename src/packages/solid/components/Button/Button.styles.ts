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
import type { WithTonesModes, Tone } from 'types';
import { type TextStyles, type NodeStyles } from '@lightningjs/solid';

export interface ButtonStyle {
  tone: Tone;
  Container: (NodeStyles & { padding: number[] }) &
    WithTonesModes<NodeStyles & { padding: [number, number] }>;
  Text: TextStyles & WithTonesModes<TextStyles>;
}

const { styles: themeStyles, tone: themeTone } = theme.componentConfig.Button;

const containerBase = {
  width: 400,
  height: 100,
  display: 'flex' as const,
  padding: [theme.spacer.xxxl, theme.spacer.xl],
  color: themeStyles?.base?.backgroundColor || theme.color.interactiveNeutral,
  justifyContent: themeStyles?.base?.justifyContent || 'center',
  alignItems: themeStyles?.base?.justifyContent || 'center',
  borderRadius: themeStyles?.base?.borderRadius || theme.radius.sm
};

const containerFocus = {
  color: themeStyles?.focus?.backgroundColor || theme.color.interactiveNeutralFocus,
  justifyContent: themeStyles?.focus?.justifyContent || containerBase.justifyContent,
  borderRadius: themeStyles?.focus?.borderRadius || containerBase.borderRadius
};

const containerDisabled = {
  color: themeStyles?.disabled?.backgroundColor || theme.color.fillNeutralDisabled,
  justifyContent: themeStyles?.disabled?.justifyContent || containerBase.justifyContent,
  borderRadius: themeStyles?.disabled?.borderRadius || containerBase.borderRadius
};

const containerStyles: ButtonStyle['Container'] = {
  ...containerBase,
  /**
   * tones
   */
  inverse: {
    color: themeStyles?.inverse?.backgroundColor || theme.color.interactiveInverse,
    justifyContent: themeStyles?.inverse?.justifyContent || containerBase.justifyContent,
    borderRadius: themeStyles?.inverse?.borderRadius || containerBase.borderRadius
  },
  brand: {
    color: themeStyles?.brand?.backgroundColor || theme.color.interactiveNeutralFocusSoft,
    justifyContent: themeStyles?.brand?.justifyContent || containerBase.justifyContent,
    borderRadius: themeStyles?.brand?.borderRadius || containerBase.borderRadius
  },
  /**
   * modes
   */
  focus: containerFocus,
  disabled: containerDisabled,
  /**
   * tone modes
   */
  'neutral-focus': {
    color: themeStyles?.['neutral-focus']?.backgroundColor || containerFocus.color,
    justifyContent: themeStyles?.['neutral-focus']?.justifyContent || containerFocus.justifyContent,
    borderRadius: themeStyles?.['neutral-focus']?.borderRadius || containerFocus.borderRadius
  },
  'neutral-disabled': {
    color: themeStyles?.['neutral-disabled']?.backgroundColor || containerDisabled.color,
    justifyContent: themeStyles?.['neutral-disabled']?.justifyContent || containerDisabled.justifyContent,
    borderRadius: themeStyles?.['neutral-disabled']?.borderRadius || containerDisabled.borderRadius
  },
  'inverse-focus': {
    color: themeStyles?.['inverse-focus']?.backgroundColor || containerFocus.color,
    justifyContent: themeStyles?.['inverse-focus']?.justifyContent || containerFocus.justifyContent,
    borderRadius: themeStyles?.['inverse-focus']?.borderRadius || containerFocus.borderRadius
  },
  'inverse-disabled': {
    color: themeStyles?.['inverse-disabled']?.backgroundColor || containerDisabled.color,
    justifyContent: themeStyles?.['inverse-disabled']?.justifyContent || containerDisabled.justifyContent,
    borderRadius: themeStyles?.['inverse-disabled']?.borderRadius || containerDisabled.borderRadius
  },
  'brand-focus': {
    color: themeStyles?.['brand-focus']?.backgroundColor || containerFocus.color,
    justifyContent: themeStyles?.['brand-focus']?.justifyContent || containerBase.justifyContent,
    borderRadius: themeStyles?.['brand-focus']?.borderRadius || containerBase.borderRadius
  },
  'brand-disabled': {
    color: themeStyles?.['brand-disabled']?.backgroundColor || containerDisabled.color,
    justifyContent: themeStyles?.['brand-disabled']?.justifyContent || containerDisabled.justifyContent,
    borderRadius: themeStyles?.['brand-disabled']?.borderRadius || containerDisabled.borderRadius
  }
} as const;

const textBase = {
  textAlign: themeStyles?.base?.textAlign || 'left',
  color: themeStyles?.base?.textColor || theme.color.textNeutral,
  contentColor: themeStyles?.base?.contentColor || theme.color.fillInverse,
  ...theme.typography.button1
};

const textFocus = {
  textAlign: themeStyles?.focus?.textAlign || textBase.textAlign,
  color: themeStyles?.focus?.textColor || theme.color.textInverse,
  contentColor: themeStyles?.focus?.contentColor || theme.color.textInverse
};

const textDisabled = {
  textAlign: themeStyles?.disabled?.textAlign || textBase.textAlign,
  color: themeStyles?.disabled?.textColor || theme.color.textNeutralDisabled,
  contentColor: themeStyles?.disabled?.contentColor || theme.color.textNeutralDisabled
};

const textStyles: ButtonStyle['Text'] = {
  ...textBase,
  // tones
  inverse: {
    textAlign: themeStyles?.inverse?.textAlign || textBase.textAlign,
    color: themeStyles?.inverse?.textColor || theme.color.fillNeutral,
    contentColor: themeStyles?.inverse?.contentColor || theme.color.fillNeutral
  },
  brand: {
    textAlign: themeStyles?.brand?.textAlign || textBase.textAlign,
    color: themeStyles?.brand?.textColor || theme.color.fillBrand,
    contentColor: themeStyles?.brand?.contentColor || theme.color.fillBrand
  },
  // modes
  focus: textFocus,
  disabled: textDisabled,
  // tone modes
  'neutral-focus': {
    textAlign: themeStyles?.['neutral-focus']?.textAlign || textFocus.textAlign,
    color: themeStyles?.['neutral-focus']?.textColor || textFocus.color,
    contentColor: themeStyles?.['neutral-focus']?.contentColor || textFocus.contentColor
  },
  'neutral-disabled': {
    textAlign: themeStyles?.['neutral-disabled']?.textAlign || textDisabled.textAlign,
    color: themeStyles?.['neutral-disabled']?.textColor || textDisabled.color,
    contentColor: themeStyles?.['neutral-disabled']?.contentColor || textDisabled.contentColor
  },
  'inverse-focus': {
    textAlign: themeStyles?.['inverse-focus']?.textAlign || textFocus.textAlign,
    color: themeStyles?.['inverse-focus']?.textColor || textFocus.color,
    contentColor: themeStyles?.['inverse-focus']?.contentColor || textFocus.contentColor
  },
  'inverse-disabled': {
    textAlign: themeStyles?.['inverse-disabled']?.textAlign || textDisabled.textAlign,
    color: themeStyles?.['inverse-disabled']?.textColor || textDisabled.color,
    contentColor: themeStyles?.['inverse-disabled']?.contentColor || textDisabled.contentColor
  },
  'brand-focus': {
    textAlign: themeStyles?.['brand-focus']?.textAlign || textFocus.textAlign,
    color: themeStyles?.['brand-focus']?.textColor || theme.color.fillBrand,
    contentColor: themeStyles?.['brand-focus']?.contentColor || theme.color.fillBrand
  },
  'brand-disabled': {
    textAlign: themeStyles?.['brand-disabled']?.textAlign || textDisabled.textAlign,
    color: themeStyles?.['brand-disabled']?.textColor || theme.color.fillBrand,
    contentColor: themeStyles?.['brand-disabled']?.contentColor || theme.color.fillBrand
  }
};

const styles: ButtonStyle = {
  tone: themeTone || 'neutral',
  Container: containerStyles,
  Text: textStyles
};

export default styles;

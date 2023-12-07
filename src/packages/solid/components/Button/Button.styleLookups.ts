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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// TODO types

import theme from 'theme';
import type { WithTonesModes, Tone } from 'types';
import { type TextStyles, type NodeStyles } from '@lightningjs/solid';

export interface ButtonStyle {
  tone: Tone;
  Container: (NodeStyles & { padding: number[] }) &
    WithTonesModes<NodeStyles & { padding: [number, number] }>;
  Text: TextStyles & WithTonesModes<TextStyles>;
}

const { styles: themeStyles, tone }: { styles: WithTonesModes; tone: string } = theme.componentConfig.Button;

type LookupObject = {
  mode: {
    solidStyle: [string, styleValue];
  };
};

function getStylesFromLookupObject(lookupObject) {
  return Object.entries(lookupObject).reduce((acc, [toneMode, styleObject]) => {
    acc[toneMode] = Object.entries(styleObject).reduce((acc, [solidStyleKey, [themeStyleKey, fallback]]) => {
      acc[solidStyleKey] = themeStyles?.[toneMode]?.[themeStyleKey] || fallback;
      return acc;
    }, {});
    return acc;
  }, {});
}

const container = {
  width: 400,
  height: 100,
  display: 'flex' as const,
  padding: [theme.spacer.xxxl, theme.spacer.xl],
  color: themeStyles?.base?.backgroundColor || theme.color.interactiveNeutral,
  justifyContent: themeStyles?.base?.justifyContent || 'center',
  borderRadius: themeStyles?.base?.borderRadius || theme.radius.sm
};

const containerModes = {
  focus: {
    color: ['backgroundColor', theme.color.interactiveNeutralFocus],
    justifyContent: ['justifyContent', container.justifyContent],
    borderRadius: ['borderRadius', container.borderRadius]
  },
  disabled: {
    color: ['backgroundColor', theme.color.fillNeutralDisabled],
    justifyContent: ['justifyContent', container.justifyContent],
    borderRadius: ['borderRadius', container.borderRadius]
  },
  inverse: {
    color: ['backgroundColor', theme.color.interactiveInverse],
    justifyContent: ['justifyContent', container.justifyContent],
    borderRadius: ['borderRadius', container.borderRadius]
  },
  brand: {
    color: ['backgroundColor', theme.color.interactiveNeutralFocusSoft],
    justifyContent: ['justifyContent', container.justifyContent],
    borderRadius: ['borderRadius', container.borderRadius]
  }
};

const containerToneModes = {
  'neutral-focus': {
    color: ['backgroundColor', containerModes.focus.color[1]],
    justifyContent: ['justifyContent', containerModes.focus.justifyContent[1]],
    borderRadius: ['borderRadius', containerModes.focus.borderRadius[1]]
  },
  'neutral-disabled': {
    color: ['backgroundColor', containerModes.disabled.color[1]],
    justifyContent: ['justifyContent', containerModes.disabled.justifyContent[1]],
    borderRadius: ['borderRadius', containerModes.disabled.borderRadius[1]]
  },
  'inverse-focus': {
    color: ['backgroundColor', containerModes.focus.color[1]],
    justifyContent: ['justifyContent', containerModes.focus.justifyContent[1]],
    borderRadius: ['borderRadius', containerModes.focus.borderRadius[1]]
  },
  'inverse-disabled': {
    color: ['backgroundColor', containerModes.disabled.color[1]],
    justifyContent: ['justifyContent', containerModes.disabled.justifyContent[1]],
    borderRadius: ['borderRadius', containerModes.disabled.borderRadius[1]]
  },
  'brand-focus': {
    color: ['backgroundColor', containerModes.focus.color[1]],
    justifyContent: ['justifyContent', container.justifyContent],
    borderRadius: ['borderRadius', container.borderRadius]
  },
  'brand-disabled': {
    color: ['backgroundColor', containerModes.disabled.color[1]],
    justifyContent: ['justifyContent', containerModes.disabled.justifyContent[1]],
    borderRadius: ['borderRadius', containerModes.disabled.borderRadius[1]]
  }
};

const text = {
  textAlign: themeStyles?.base?.textAlign || 'left',
  color: themeStyles?.base?.textColor || theme.color.textNeutral,
  contentColor: themeStyles?.base?.contentColor || theme.color.fillInverse,
  ...theme.typography.button1
};

const textModes = {
  focus: {
    textAlign: ['textAlign', text.textAlign],
    color: ['textColor', theme.color.textInverse],
    contentColor: ['contentColor', theme.color.textInverse]
  },
  disabled: {
    textAlign: ['textAlign', text.textAlign],
    color: ['textColor', theme.color.textNeutralDisabled],
    contentColor: ['contentColor', theme.color.textNeutralDisabled]
  },
  inverse: {
    textAlign: ['textAlign', text.textAlign],
    color: ['textColor', theme.color.fillNeutral],
    contentColor: ['contentColor', theme.color.fillNeutral]
  },
  brand: {
    textAlign: ['textAlign', text.textAlign],
    color: ['textColor', theme.color.fillBrand],
    contentColor: ['contentColor', theme.color.fillBrand]
  }
};

const textToneModes = {
  'neutral-focus': {
    textAlign: ['textAlign', textModes.focus.textAlign[1]],
    color: ['textColor', textModes.focus.color[1]],
    contentColor: ['contentColor', textModes.focus.contentColor[1]]
  },
  'neutral-disabled': {
    textAlign: ['textAlign', textModes.disabled.textAlign[1]],
    color: ['textColor', textModes.disabled.color[1]],
    contentColor: ['contentColor', textModes.disabled.contentColor[1]]
  },
  'inverse-focus': {
    textAlign: ['textAlign', textModes.focus.textAlign[1]],
    color: ['textColor', textModes.focus.color[1]],
    contentColor: ['contentColor', textModes.focus.contentColor[1]]
  },
  'inverse-disabled': {
    textAlign: ['textAlign', textModes.disabled.textAlign[1]],
    color: ['textColor', textModes.disabled.color[1]],
    contentColor: ['contentColor', textModes.disabled.contentColor[1]]
  },
  'brand-focus': {
    textAlign: ['textAlign', textModes.focus.textAlign[1]],
    color: ['textColor', theme.color.fillBrand],
    contentColor: ['contentColor', theme.color.fillBrand]
  },
  'brand-disabled': {
    textAlign: ['textAlign', textModes.disabled.textAlign[1]],
    color: ['textColor', theme.color.fillBrand],
    contentColor: ['contentColor', theme.color.fillBrand]
  }
};

const containerStyles = {
  ...container,
  ...getStylesFromLookupObject(containerModes),
  ...getStylesFromLookupObject(containerToneModes)
};

const textStyles = {
  ...text,
  ...getStylesFromLookupObject(textModes),
  ...getStylesFromLookupObject(textToneModes)
};

const styles: ButtonStyle = {
  tone: tone || 'neutral',
  Container: containerStyles,
  Text: textStyles
};

export default styles;

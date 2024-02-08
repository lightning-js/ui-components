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
import type { Tone } from 'types';
import type { ComponentStyleConfig, NodeStyleSet, TextStyleSet } from '../../types/types.js';
import { makeComponentStyles } from '../../utils/index.js';

export interface ButtonStyles {
  tone: Tone;
  Container: NodeStyleSet<{ padding: number[] }>;
  Text: TextStyleSet;
}

type ButtonStyleProperties = {
  backgroundColor?: NodeStyles['color'];
  borderRadius?: NodeStyles['borderRadius'];
  contentColor?: NodeStyles['color'];
  justifyContent?: NodeStyles['justifyContent'];
  textAlign?: TextStyles['textAlign'];
  textColor?: TextStyles['color'];
};

type ButtonConfig = ComponentStyleConfig<ButtonStyleProperties>;

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Button: { styles: themeStyles, tone } = { styles: {}, tone: 'neutral' } } = theme?.componentConfig;

const container: ButtonConfig = {
  themeKeys: {
    textAlign: 'textAlign',
    borderRadius: 'borderRadius',
    color: 'backgroundColor',
    justifyContent: 'justifyContent'
  },
  base: {
    width: 400,
    height: 100,
    display: 'flex',
    padding: [theme.spacer.xxxl, theme.spacer.xl],
    color: theme.color.interactiveNeutral,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.radius.sm
  },
  toneModes: {
    focus: {
      color: theme.color.interactiveNeutralFocus
    },
    disabled: {
      color: theme.color.fillNeutralDisabled
    },
    inverse: {
      color: theme.color.interactiveInverse
    },
    brand: {
      color: theme.color.interactiveBrand
    },
    'brand-focus': {
      color: theme.color.fillNeutral
    }
  },
  themeStyles
};

const text: ButtonConfig = {
  themeKeys: {
    color: 'textColor',
    contentColor: 'contentColor'
  },
  base: {
    textAlign: 'left',
    color: theme.color.textNeutral,
    contentColor: theme.color.fillInverse,
    ...theme.typography.button1
  },
  toneModes: {
    focus: {
      color: theme.color.textInverse,
      contentColor: theme.color.textInverse
    },
    disabled: {
      color: theme.color.textNeutralDisabled,
      contentColor: theme.color.textNeutralDisabled
    },
    inverse: {
      color: theme.color.fillNeutral,
      contentColor: theme.color.fillNeutral
    },
    brand: {
      color: theme.color.fillBrand,
      contentColor: theme.color.fillBrand
    },
    'brand-focus': {
      color: theme.color.fillBrand,
      contentColor: theme.color.fillBrand
    }
  },
  themeStyles
};

const Container = makeComponentStyles<ButtonStyles['Container']>(container);
const Text = makeComponentStyles<ButtonStyles['Text']>(text);

const styles: ButtonStyles = {
  tone: tone,
  Container,
  Text
};

export default styles;

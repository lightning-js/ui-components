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

import { IntrinsicCommonProps } from '@lightningjs/solid';
import theme from 'theme';
import { getHexColor } from '../../../../shared/utils/getHexColor';

interface CommonStyleProps {
  display: string;
  flexDirection: string;
  justifyContent: string;
  width: number;
  height: number;
  color: Color;
  alpha: number;
  borderRadius: number;
  border: { width: number; color: Color };
  scale: number;
}

type Color = number | string;
type AnimationSettings = { duration?: number; delay?: number; timing?: string };
type TextContain = 'width' | 'height' | 'both';
type TextAlign = 'left' | 'center' | 'right';
type States = 'active' | 'focus' | 'disabled';

/**
 * allows the property to either be the supplied type,
 * or an array containing that type and an animationSettings object
 */
type Animatable<Type> = Type | [Type, AnimationSettings];

/**
 * for each key in the supplied type, make the type for that key Animatable
 */
type ComponentStyle<Type> = {
  // TODO see if we can specifically type capital keys
  [key in keyof Type]: Animatable<Type[key]>;
};

/**
 * states can contain any of the style object's properties, except other states
 */
type StateStyle<Type> = Partial<Omit<Type, States>>;

type ButtonStyle = {
  Container: ComponentStyle<{
    display: string;
    flexDirection: string;
    justifyContent: string;
    padding: number[];
    // width: number;
    // height: number;
    color: Animatable<Color>;
    alpha: Animatable<number>;
    borderRadius: number;
    focus?: StateStyle<ButtonStyle['Container']>;
    active?: StateStyle<ButtonStyle['Container']>;
    disabled?: StateStyle<ButtonStyle['Container']>;
  }>;
  Text?: ButtonTextStyle;
  Prefix?: {
    focus?: StateStyle<ButtonTextStyle>;
  };
  Suffix?: {
    mountX: number;
    focus?: StateStyle<ButtonTextStyle>;
  };
  FlexContainer?: {
    display: string;
    flexDirection: string;
    justifyContent: string;
    mountY: number;
  };
};

const styles: any = {
  height: theme.spacer.md * 10,
  // paddingX: theme.spacer.xxxl,
  // paddingXNoTitle: theme.spacer.xl,
  // titlePadding: theme.spacer.md,
  padding: [40, 10],
  backgroundColor: theme.color.fillNeutralTertiary[0],
  display: 'flex',
  justifyContent: 'center',
  borderRadius: 30
};

type ButtonTextStyle = {
  fontSize: number;
  // lineHeight: number;
  // contain: TextContain;
  // mountY: number;
  textAlign: TextAlign;
  color: Animatable<Color>;
  // height: number;
  // width: number;
  focus?: StateStyle<ButtonTextStyle>;
  active?: StateStyle<ButtonTextStyle>;
  disabled?: StateStyle<ButtonTextStyle>;
};

const Text: ButtonTextStyle = {
  fontSize: 32,
  // lineHeight: styles.Container.height,
  // contain: 'width',
  // mountY: -0.35,
  textAlign: 'center',
  color: getHexColor(...(theme.color.textNeutral as [string, number])),
  // color: '#000000',
  // height: styles.Container.height,
  // width: styles.Container.width,
  focus: {
    color: getHexColor(...(theme.color.textInverse as [string, number]))
  }
};

styles.Text = Text;
styles.FlexContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  mountY: -0.2
};

styles.Prefix = {
  color: theme.color.fillNeutral,
  focus: {
    color: getHexColor(...(theme.color.textInverse as [string, number]))
  }
};

styles.Suffix = {
  mountX: 1,
  color: theme.color.fillNeutral,
  focus: {
    color: getHexColor(...(theme.color.textInverse as [string, number]))
  }
};

export default styles;

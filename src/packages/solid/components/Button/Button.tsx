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

import { type Component } from 'solid-js';
import { View, Text, type NodeProps } from '@lightningjs/solid';
import Icon, { type IconProps } from '../Icon/Icon.jsx';
import Checkbox, { type CheckboxProps } from '../Checkbox/Checkbox.jsx';
import styles, { type Tone, type ButtonStyle } from './Button.styles.js';
import { withPadding } from '@lightningjs/solid-primitives';
withPadding;

/**
 * Primary UI component for user interaction
 */
export interface ButtonProps extends ButtonStyleProps, Omit<NodeProps, 'style'> {
  suffix?: {
    checkbox?: Partial<CheckboxProps>;
    icon?: Partial<IconProps>;
  };
  prefix?: {
    checkbox?: Partial<CheckboxProps>;
    icon?: Partial<IconProps>;
  };
  width?: number;
  height?: number;
  tone?: Tone;
  style?: ButtonStyle;
}

export interface ButtonStyleProps {
  borderRadius?: number;
}

const Button: Component<ButtonProps & { children: string | string[] }> = props => {
  return (
    <node
      use:withPadding={styles.Container?.padding}
      animate
      forwardStates
      tone={props.tone || styles.tone}
      {...{
        ...styles.Container[props.tone || styles.tone],
        ...props?.style?.Container,
        ...props
      }}
      style={styles.Container}
    >
      <View
        forwardStates
        width={props.width}
        tone={props.tone || styles.tone}
        {...{
          ...styles.FlexContainer[props.tone || styles.tone],
          ...props?.style?.FlexContainer
        }}
        style={styles.FlexContainer}
      >
        <Show when={props.prefix?.icon}>
          <Icon {...props.prefix?.icon} tone={props.tone || styles.tone} />
        </Show>

        <Show when={props.prefix?.checkbox}>
          <Checkbox {...props.prefix?.checkbox} tone={props.tone || styles.tone} />
        </Show>

        <Show when={props.children} keyed>
          {children => (
            <Text
              tone={props.tone || styles.tone}
              {...{
                ...styles.Text[props.tone || styles.tone],
                ...props?.style?.Text
              }}
              style={styles.Text}
            >
              {children}
            </Text>
          )}
        </Show>

        <Show when={props.suffix?.icon}>
          <Icon {...props.suffix?.icon} tone={props.tone || styles.tone} />
        </Show>

        <Show when={props.suffix?.checkbox}>
          <Checkbox {...props.suffix?.checkbox} tone={props.tone || styles.tone} />
        </Show>
      </View>
    </node>
  );
};

export const ButtonContainer: Component<NodeProps> = props => {
  return <View {...props} style={styles.Container} forwardStates />;
};

export default Button;
export const ButtonStyles = styles;

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

import { Show, type Component } from 'solid-js';
import { View, Text, type IntrinsicNodeProps } from '@lightningjs/solid';
import Icon, { type IconProps } from '../Icon/Icon';
import Checkbox, { type CheckboxProps } from '../Checkbox/Checkbox';
import styles from './Button.styles';
import { withPadding } from '@lightningjs/solid-primitives';
withPadding;

/**
 * Primary UI component for user interaction
 */
export interface ButtonProps extends ButtonStyleProps, IntrinsicNodeProps {
  children?: string;
  /** Testing which overrides what */
  suffix?: {
    checkbox?: Partial<CheckboxProps>;
    icon?: Partial<IconProps>;
  }; // null, icon, checkbox, combo
  prefix?: {
    checkbox?: Partial<CheckboxProps>;
    icon?: Partial<IconProps>;
  }; // null, icon, checkbox, combo
  width?: number;
  height?: number;
}

export interface ButtonStyleProps {
  color?: number;
  borderRadius?: number;
}

const Button: Component<ButtonProps> = (props) => {
  return (
    <node
      use:withPadding={styles.Container.padding}
      {...props}
      style={styles.Container}
      animate
      forwardStates
    >
      <View forwardStates style={styles.FlexContainer} width={props.width}>
        <Show when={props.prefix?.icon}>
          <Icon {...props.prefix?.icon} />
        </Show>

        <Show when={props.prefix?.checkbox}>
          <Checkbox {...props.prefix?.checkbox} />
        </Show>

        <Show when={props.children}>
          <Text style={styles.Text}>{props.children}</Text>
        </Show>

        <Show when={props.suffix?.icon}>
          <Icon {...props.suffix?.icon} />
        </Show>

        <Show when={props.suffix?.checkbox}>
          <Checkbox {...props.suffix?.checkbox} />
        </Show>
      </View>
    </node>
  );
};

export default Button;

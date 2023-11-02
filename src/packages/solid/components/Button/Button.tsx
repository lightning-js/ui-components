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
import { View, Text } from '@lightningjs/solid';
import Icon, { type IconProps } from '../Icon/Icon';
//import Checkbox, { type CheckboxProps } from '../Checkbox/Checkbox';
import styles from './Button.styles';
import { withPadding } from '@lightningjs/solid-primitives';
withPadding;

/**
 * Primary UI component for user interaction
 */
export interface ButtonProps extends ButtonStyleProps {
  title: string;
  suffix?: Partial<IconProps>; //& Partial<CheckboxProps>; // null, icon, checkbox, combo
  prefix?: Partial<IconProps>; //Component<IntrinsicCommonProps>  & Partial<CheckboxProps>; // null, icon, checkbox, combo
  width: number;
  height: number;
}

export interface ButtonStyleProps {
  color?: number;
  borderRadius?: number;
}

const Button: Component<ButtonProps> = props => {

  const prefixIcon = props.prefix?.icon ? true : false;
  //const prefixCheckbox = props.prefix?.checked? true : false;

  const suffixIcon = props.suffix?.icon ? true : false;
  //const suffixCheckbox = props.suffix?.checked? true : false;
  return (
    <node
      {...props}
      use:withPadding={styles.Container?.padding}
      style={{
        ...styles.Container,
        color: props.color || styles.Container?.color
      }}
      animate
      forwardStates
    >
      <View forwardStates style={{ ...styles.FlexContainer }} width={props.width}>
        <Show when={prefixIcon}>
          <Icon {...props.prefix} />
        </Show>
        {/* 
         <Show when={prefixCheckbox}>
            <Checkbox {...props.prefix} />
        </Show>  */}

        <Show when={props.title}>
          <Text style={{ ...styles.Text }}>{props.title}</Text>
        </Show>

        <Show when={suffixIcon}>
          <Icon {...props.suffix} />
        </Show>

        {/*          <Show when={prefixCheckbox}>
            <Checkbox {...props.suffix} />
        </Show>  */}
      </View>
    </node>
  );
};

export default Button;
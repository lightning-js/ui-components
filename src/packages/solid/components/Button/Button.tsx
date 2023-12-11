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
// import styles from './Button.styles.js';
import styles from './Button.styleLookups.js';
import type { Tone } from 'types';

export interface ButtonProps extends NodeProps {
  children: string | string[];
  tone?: Tone;
}

const Button: Component<ButtonProps> = props => {
  console.log(styles);
  return (
    <View
      {...props}
      style={styles.Container}
      tone={props.tone || styles.tone}
      {...styles.Container[props.tone || styles.tone]}
      forwardStates
    >
      <Text style={styles.Text} tone={props.tone || styles.tone} {...styles.Text[props.tone || styles.tone]}>
        {props.children}
      </Text>
    </View>
  );
};

export const ButtonContainer: Component<ButtonProps> = props => {
  return (
    <View
      {...props}
      style={styles.Container}
      tone={props.tone || styles.tone}
      {...styles.Container[props.tone || styles.tone]}
      forwardStates
    />
  );
};

export default Button;
export const ButtonStyles = styles;

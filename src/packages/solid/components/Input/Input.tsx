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

import { type Component, type Signal } from 'solid-js';
import { View, Text, type IntrinsicNodeProps } from '@lightningjs/solid';
import styles, { type InputStyles } from './Input.styles.js';
import type { KeyHandler } from '@lightningjs/solid-primitives';
import type { Tone } from '../../types.js';

export interface InputProps extends IntrinsicNodeProps {
  /**
   * actualTitle is a proxy element for title which is used to store actual value typed when password is enabled
   */
  actualTitle?: string;

  /**
   * eyebrow of input container.
   */
  eyebrow?: string;

  /**
   * help text for the input container.
   */
  helpText?: string;

  /**
   * index of the current cursor positions
   */
  position?: number;

  keySignal: Signal<string>;

  onRight?: KeyHandler;

  onLeft?: KeyHandler;

  style?: Partial<InputStyles>;

  tone?: Tone;
}

const Input: Component<InputProps> = props => {
  return (
    <View
      {...props}
      style={[
        ...[props.style].flat(), //
        styles.Container.tones[props.tone ?? styles.tone],
        styles.Container.base
      ]}
    >
      {/* eyebrow */}
      <Text
        style={[
          props.style?.Text, //
          styles.Text.tones[props.tone ?? styles.tone],
          styles.Text.base
        ]}
      >
        {props.eyebrow}
      </Text>
      <View
        style={[
          props.style?.InputContainer, //
          styles.InputContainer.tones[props.tone ?? styles.tone],
          styles.InputContainer.base
        ]}
      >
        <Text
          style={[
            props.style?.Text, //
            styles.Text.tones[props.tone ?? styles.tone],
            styles.Text.base
          ]}
        >
          {props.keySignal[0]}
        </Text>
      </View>
      {/* helptext */}
      <Text
        style={[
          props.style?.Text, //
          styles.Text.tones[props.tone ?? styles.tone],
          styles.Text.base
        ]}
      >
        {props.helpText}
      </Text>
    </View>
  );
};

export default Input;

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

import { createSignal, type Component, type Signal, createEffect, on } from 'solid-js';
import { View, Text, type IntrinsicNodeProps } from '@lightningjs/solid';
import styles, { type InputStyles } from './Input.styles.js';
import type { KeyHandler } from '@lightningjs/solid-primitives';
import type { Tone } from '../../types/types.js';

export interface InputProps extends IntrinsicNodeProps {
  /**
   * actualTitle is a proxy element for title which is used to store actual value typed when password is enabled
   */
  actualTitle?: string;

  /**
   * non-reactive index of the current cursor currentPosition
   */
  position?: number;

  /**
   * signal passed in to represent what change we want to happe in the input
   */
  keyEvent: Signal<string>;

  /**
   * signal passed in to represent the actual title within the input
   */
  titleSignal: Signal<string>;

  style?: Partial<InputStyles>;

  tone?: Tone;
}

const Input: Component<InputProps> = props => {
  const [position, setPosition] = createSignal(props.position ?? props.actualTitle?.length ?? 0);

  const formatInputText = key => {
    if (key === undefined || key === '') {
      return;
    }

    const inputText = props.titleSignal[0]();
    let currentPosition = position();
    let newTitle = '';
    switch (key.toLowerCase()) {
      case 'backspace':
      case 'delete':
        newTitle =
          currentPosition > 0
            ? inputText.slice(0, currentPosition - 1) + inputText.slice(currentPosition)
            : inputText;
        currentPosition--;
        break;
      case 'done':
        break;
      case 'space':
        newTitle =
          currentPosition > 0
            ? inputText.slice(0, currentPosition - 1) + ' ' + inputText.slice(currentPosition)
            : ' ' + inputText;
        currentPosition++;
        break;
      case 'clear':
        newTitle = '';
        currentPosition = 0;
        break;
      default:
        newTitle =
          currentPosition > 0
            ? inputText.slice(0, currentPosition) + key + inputText.slice(currentPosition)
            : key + inputText;
        currentPosition++;
        break;
    }

    props.keyEvent[1]('');
    props.titleSignal[1](newTitle);
    setPosition(currentPosition);
    return '';
  };

  createEffect(
    on(
      () => props.keyEvent?.[0](),
      keyEvent => {
        formatInputText(keyEvent);
      },
      { defer: true }
    )
  );

  function onRight() {
    setPosition(p => Math.max(p + 1, props.titleSignal[0]().length));
    return true;
  }

  function onLeft() {
    setPosition(p => Math.max(p - 1, 0));
    return true;
  }

  return (
    <View
      {...props}
      position={position()}
      onLeft={onLeft}
      onRight={onRight}
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
        {props.titleSignal[0]()}
      </Text>
    </View>
  );
};

export default Input;

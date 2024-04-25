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
import { View, Text } from '@lightningjs/solid';
import type { UIComponentProps } from '../../types/interfaces.js';
import styles from './Input.styles.js';

export interface InputProps extends UIComponentProps {
  /**
   * non-reactive index of the current cursor currentPosition
   */
  position?: number;

  /**
   * signal passed in to represent what change we want to happen in the input
   */
  keyEvent: Signal<string>;

  /**
   * signal passed in to represent the actual title within the input
   */
  titleSignal: Signal<string>;
}

const Input: Component<InputProps> = props => {
  /* eslint-disable solid/reactivity */
  const [title, setTitle] = props.titleSignal;
  const [position, setPosition] = createSignal(props.position ?? title().length);
  const [keyEvent, setKeyEvent] = props.keyEvent;

  const formatInputText = (key: string) => {
    if (key === undefined || key === '') {
      return;
    }

    const inputText = title();
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

    setKeyEvent('');
    setTitle(newTitle);
    setPosition(currentPosition);
    return '';
  };

  createEffect(
    on(
      () => keyEvent(),
      keyEvent => {
        formatInputText(keyEvent);
      },
      { defer: true }
    )
  );

  function onRight() {
    setPosition(p => Math.max(p + 1, title().length));
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
      // @ts-expect-error TODO type needs to be fixed in framework
      style={[
        props.style, //
        styles.InputContainer.tones[props.tone ?? styles.tone],
        styles.InputContainer.base
      ]}
    >
      <Text
        style={[
          styles.Text.tones[props.tone ?? styles.tone], //
          styles.Text.base
        ]}
      >
        {title()}
      </Text>
    </View>
  );
};

export default Input;

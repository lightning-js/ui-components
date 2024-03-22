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

import { createSignal, type Component, createMemo, createEffect } from 'solid-js';
import { type IntrinsicNodeProps } from '@lightningjs/solid';
// import styles, {
//   type KeyboardInputStyleProperties,
//   type KeyboardInputStyles
// } from './KeyboardInput.styles.js';
import Keyboard from '../Keyboard/Keyboard.jsx';
import Column from '../Column/Column.jsx';
import Input from '../Input/Input.jsx';
import type { KeyProps } from '../Key/Key.jsx';
import type { Tone } from '../../types/types.js';

export type KeyboardFormat = Array<Array<string | KeyProps>>;

export interface KeyboardInputProps extends IntrinsicNodeProps {
  style?: Partial<KeyboardInputStyles>;

  tone?: Tone;
}

// rows created from each array passed in
const KeyboardInput: Component<KeyboardInputProps> = (props: KeyboardInputProps) => {
  // signal representing a string of the key pressed and a boolean for if value has been added to the input yet
  const [key, setKey] = createSignal(['', false]);
  const [position, setPosition] = createSignal(0);
  const [title, setTitle] = createSignal('');
  let inputContainer;

  const formatInputText = key => {
    if (key[1]) {
      return;
    }
    const inputText = inputContainer?.actualTitle ?? '';
    let position = inputContainer?.position ?? 0;
    let title;
    switch (key[0].toLowerCase()) {
      case 'delete':
        title = position > 0 ? inputText.slice(0, position - 1) + inputText.slice(position) : inputText;
        position--;
        break;
      case 'done':
        break;
      case 'space':
        title =
          position > 0 ? inputText.slice(0, position - 1) + ' ' + inputText.slice(position) : ' ' + inputText;
        position++;
        break;
      case 'clear':
        title = '';
        position = 0;
        break;
      default:
        title =
          position > 0
            ? inputText.slice(0, position) + key[0] + inputText.slice(position)
            : key[0] + inputText;
        position++;
        break;
    }

    if (inputContainer) {
      inputContainer.actualTitle = title;
      inputContainer.position = position;
    }
    setKey(['', true]);
    setTitle(title);
    setPosition(position);
  };

  createEffect(() => {
    formatInputText(key());
  });

  return (
    <Column {...props} scroll={'none'} gap={60}>
      <Input
        eyebrow={'search'}
        helpText={'main'}
        actualTitle={title()}
        position={position()}
        ref={inputContainer}
      />
      <Keyboard keySignal={[key, setKey]} formats={props.formats} />
    </Column>
  );
};

export default KeyboardInput;

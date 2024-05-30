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

import { createMemo, type Component } from 'solid-js';
import { Text } from '@lightningtv/solid';
import { ButtonContainer } from '../Button/Button.jsx';
import styles from './Key.styles.js';
import type { KeyProps } from './Key.types.js';

const getTone = (props: KeyProps) => props.tone ?? styles.tone;
const getSize = (props: KeyProps) => props.size ?? 'sm';

const Key: Component<KeyProps> = props => {
  const tone = createMemo(() => getTone(props));
  const size = createMemo(() => getSize(props));
  return (
    <ButtonContainer
      {...props}
      // @ts-expect-error TODO type needs to be fixed in framework
      style={[
        props.style, //
        styles.Container.tones?.[tone()],
        styles.Container.base
      ]}
      forwardStates
      width={
        (styles.Container?.tones?.[tone()]?.sizes?.[size()] ?? styles.Container.base.sizes[size()]) *
          (styles.Container?.tones?.[tone()]?.baseWidth ?? styles.Container.base.baseWidth) +
        (styles.Container.tones?.[tone()]?.keySpacing ?? styles.Container.base.keySpacing) *
          (styles.Container.tones?.[tone()]?.sizes?.[size()] ?? styles.Container.base.sizes[size()] - 1)
      }
      // Keep below for more thought
      //
      // width={
      //   (props?.style?.Container?.sizes[size()] ?? styles.Container.sizes[size()]) *
      //     (props?.style?.Container?.baseWidth ?? styles.Container.baseWidth) +
      //   (props?.style?.Container?.keySpacing ?? styles.Container.keySpacing) *
      //     ((props?.style?.Container?.sizes[size()] ??
      //       styles.Container.sizes[size()]) -
      //       1)
      // }
    >
      <Text
        style={[
          styles.Text.tones[tone()], //
          styles.Text.base
        ]}
      >
        {props.title ? props.title : ''}
      </Text>
    </ButtonContainer>
    // if props onEnter, use that, else utilize toggle to see if update keyboard or add the key

    // props.setValue('props.jeyID')
    // onEnter={props.onEnter? props.onEnter : (props.toggle? toggleKeyboard: softKey, keyID/title) }
  );
};

export default Key;

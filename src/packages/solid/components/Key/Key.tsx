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

import type { Component } from 'solid-js';
import { type IntrinsicNodeProps, Text } from '@lightningjs/solid';
import { ButtonContainer } from '../Button/Button.jsx';
import styles, { type KeySize, type KeyStyles } from './Key.styles.js';
import type { Tone } from '../../types.js';

export interface KeyProps extends IntrinsicNodeProps {
  title?: string;
  /**
   * url for icon
   */
  icon?: string;
  /**
   * width of the Key
   */
  size?: KeySize;
  /**
   * path to image or inline SVG XML
   */
  src?: string;
  /**
   * The horizontal spacing between each key in a Keyboard. This value is factored into the width of the key so that it aligns with with the borders of other keys in a Keyboard.
   */
  keySpacing?: number;
  /**
   * If true, pressing the key will trigger the $toggleKeyboard event. If false, the key will trigger the $onSoftKey event.
   */
  toggle?: boolean;

  style?: Partial<KeyStyles>;

  tone?: Tone;
}

const Key: Component<KeyProps> = props => {
  const style1 = props?.style ?? styles;
  return (
    <ButtonContainer
      {...props}
      style={[
        ...[props.style].flat(), //
        styles.Container.tones[props.tone || styles.tone],
        styles.Container.base
      ]}
      forwardStates
      width={
        style1.Container.base.sizes[props.size || 'sm'] * style1.Container?.base.baseWidth +
        style1.Container.base.keySpacing * (style1.Container?.base.sizes[props.size || 'sm'] - 1)
      }
      // Keep below for more thought
      //
      // width={
      //   (props?.style?.Container?.sizes[props.size || 'sm'] ?? styles.Container.sizes[props.size || 'sm']) *
      //     (props?.style?.Container?.baseWidth ?? styles.Container.baseWidth) +
      //   (props?.style?.Container?.keySpacing ?? styles.Container.keySpacing) *
      //     ((props?.style?.Container?.sizes[props.size || 'sm'] ??
      //       styles.Container.sizes[props.size || 'sm']) -
      //       1)
      // }
    >
      <Text
        style={[
          props.style?.Text, //
          styles.Text.tones[props.tone || styles.tone],
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

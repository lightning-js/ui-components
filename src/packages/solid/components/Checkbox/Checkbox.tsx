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
import { View, type NodeProps } from '@lightningjs/solid';
import styles, { type CheckboxStyles } from './Checkbox.styles.js';
import Icon from '../Icon/Icon.jsx';
import type { Tone } from 'types';
const check = '/assets/images/check-icon.png';

export interface CheckboxProps extends NodeProps {
  /**
   * Indicates whether the checkbox is checked or unchecked.
   * Setting this to `true` will check the checkbox, and setting it to `false` will uncheck it.
   */
  checked?: boolean;
  tone?: Tone;
  style?: Partial<CheckboxStyles>;
}

const Checkbox: Component<CheckboxProps> = (props: CheckboxProps) => {
  return (
    <View
      forwardStates
      {...props}
      tone={props.tone ?? styles.tone}
      style={[
        ...[props.style].flat(),
        props.style?.Container,
        props.style?.Container?.[props.tone || styles.tone],
        styles.Container,
        styles.Container?.[props.tone || styles.tone]
      ]}
      states={[...(props.checked ? ['checked'] : []), props.tone ?? styles.tone]}
      children={
        props.checked
          ? props.children || (
              <Icon
                src={check}
                tone={props.tone ?? styles.tone}
                style={[
                  props.style?.Icon,
                  props.style?.Icon?.[props.tone || styles.tone],
                  styles.Icon,
                  styles.Icon[props.tone || styles.tone]
                ]}
              />
            )
          : ''
      }
    />
  );
};

export default Checkbox;

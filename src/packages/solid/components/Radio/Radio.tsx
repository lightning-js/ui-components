/*
 * Copyright 2024 Comcast Cable Communications Management, LLC
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
import type { Tone } from '../../types/types.js';
import styles, { type RadioStyles } from './Radio.styles.js';

export interface RadioProps extends NodeProps {
  /**
   * Indicates whether the Radio is checked or unchecked.
   * Setting this to `true` will fill the Radio, and setting it to `false` will empty it.
   */
  checked?: boolean;
  tone?: Tone;
  style?: Partial<RadioStyles> | Partial<RadioStyles>[];
}

const Radio: Component<RadioProps> = (props: RadioProps) => {
  return (
    <View
      {...props}
      style={[
        ...[props.style].flat(),
        styles.Container.tones?.[props.tone ?? styles.tone],
        styles.Container.base
      ]}
      states={{ checked: props.checked }}
      children={
        props.checked
          ? props.children || (
              <View
                style={[styles.Knob.tones?.[props.tone ?? styles.tone], styles.Knob.base]}
                color={
                  props.checked
                    ? styles.Knob.tones?.[props.tone ?? styles.tone]?.colorChecked ??
                      styles.Knob.base.colorChecked
                    : styles.Knob.tones?.[props.tone ?? styles.tone]?.color ?? styles.Knob.base.color
                }
                mount={0.5}
                x={
                  (styles.Container.tones[props.tone ?? styles.tone]?.width ??
                    styles.Container.base.width ??
                    0) / 2
                }
                y={
                  (styles.Container.tones[props.tone ?? styles.tone]?.height ??
                    styles.Container.base.height ??
                    0) / 2
                }
                zIndex={2}
                width={styles.Knob.tones[props.tone ?? styles.tone]?.width ?? styles.Knob.base.width ?? 2}
                height={styles.Knob.tones[props.tone ?? styles.tone]?.height ?? styles.Knob.base.height ?? 2}
                borderRadius={
                  styles.Knob.tones[props.tone ?? styles.tone]?.borderRadius ??
                  styles.Knob.base.borderRadius ??
                  2
                }
              />
            )
          : ''
      }
    />
  );
};

export default Radio;

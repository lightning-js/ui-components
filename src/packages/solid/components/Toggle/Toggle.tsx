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
import { View, type NodeProps } from '@lightningjs/solid';
import styles, { type ToggleStyles } from './Toggle.styles.js';
import type { Tone } from 'types';

export interface ToggleProps extends NodeProps {
  /**
   * Indicates whether the Toggle is checked or unchecked.
   * Setting this to `true` will check the toggle, and setting it to `false` will uncheck it.
   */
  checked?: boolean;
  tone?: Tone;
  style?: Partial<ToggleStyles>;
}

const Toggle: Component<ToggleProps> = (props: ToggleProps) => {
  let Container;
  const positionToggle = (checked: boolean) => {
    return checked
      ? Container?.style.width -
          Container?.style.strokeWidth -
          Container?.style.knobPadding -
          Container?.style.knobWidth || 0
      : Container?.style.strokeWidth + Container?.style.knobPadding || 0;
  };
  const toggleX = createMemo(() => positionToggle(props.checked));
  return (
    <View
      forwardStates
      {...props}
      tone={props.tone ?? styles.tone}
      style={[
        ...[props.style].Container.flat(),
        props.style?.Container,
        props.style?.Container?.[props.tone || styles.tone],
        styles.Container,
        styles.Container?.[props.tone || styles.tone]
      ]}
      states={[...(props.checked ? ['checked'] : []), props.tone ?? styles.tone]}
      ref={Container}
      children={
        props.checked
          ? props.children || (
              <View
                style={[
                  ...[props.style].Knob.flat(),
                  props.style?.Container,
                  props.style?.Container?.[props.tone || styles.tone],
                  styles.Container,
                  styles.Container?.[props.tone || styles.tone]
                ]}
                y={
                  (([props.style].flat().Knob.height || props.style?.Knob.height || styles.Knob.height || 0) -
                    ([props.style].flat().Knob.knobHeight ||
                      props.style?.Knob.knobHeight ||
                      styles.Knob.knobHeight ||
                      0)) /
                  2
                }
                x={toggleX}
                zIndex={2}
                width={
                  ([props.style].flat().Knob.knobWidth ||
                    props.style?.Knob.knobWidth ||
                    styles.Knob.knobWidth ||
                    0) - 2
                }
                height={
                  ([props.style].flat().Knob?.height ||
                    props.style?.Knob?.height ||
                    styles.Knob.height ||
                    0) - 2
                }
                borderRadius={
                  [props.style].flat().Knob?.borderRadius ||
                  props.style?.Knob?.borderRadius ||
                  styles.Knob.borderRadius ||
                  0
                }
              />
            )
          : ''
      }
    />
  );
};

export default Toggle;

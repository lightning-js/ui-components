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
  const positionToggle = (checked: boolean, props: ToggleProps) => {
    return checked
      ? // width
        ([props.style].flat()?.width ??
          styles.Container.tones?.[props.tone ?? styles.tone].width ??
          styles.Container.base.width) -
          // strokeWidth
          ([props.style].flat()?.borderWidth ??
            styles.Container.tones?.[props.tone ?? styles.tone].borderWidth ??
            styles.Container.base.borderWidth) -
          // knobPadding
          ([props.style?.Knob].flat()?.padding ??
            styles.Knob.tones?.[props.tone ?? styles.tone].padding ??
            styles.Knob.base.padding) -
          // knobWidth
          ([props.style?.Knob].flat()?.width ??
            styles.Knob.tones?.[props.tone ?? styles.tone].width ??
            styles.Knob.base.width) || 0
      : // strokeWidth
        ([props.style].flat()?.borderWidth ??
          styles.Container.tones?.[props.tone ?? styles.tone].borderWidth ??
          styles.Container.base.borderWidth) +
          // knobPadding
          ([props.style?.Knob].flat()?.padding ??
            styles.Knob.tones?.[props.tone ?? styles.tone].padding ??
            styles.Knob.base.padding) || 0;
  };
  const toggleX = createMemo(() => positionToggle(props.checked, props));

  return (
    <View
      {...props}
      // tone={props.tone ?? styles.tone}
      style={[
        ...[props.style].flat(),
        styles.Container.tones?.[props.tone ?? styles.tone],
        styles.Container.base
      ]}
      color={
        props.checked
          ? [props.style].flat()?.colorChecked ??
            styles.Container.tones?.[props.tone ?? styles.tone].colorChecked ??
            styles.Container.base.colorChecked
          : [props.style].flat()?.color ??
            styles.Container.tones?.[props.tone ?? styles.tone].color ??
            styles.Container.base.color
      }
    >
      <View
        style={[styles.Knob.tones?.[props.tone ?? styles.tone], styles.Knob.base]}
        color={
          props.checked
            ? [props.style?.Knob].flat()?.colorChecked ??
              styles.Knob.tones?.[props.tone ?? styles.tone].colorChecked ??
              styles.Knob.base.colorChecked
            : [props.style?.Knob].flat()?.color ??
              styles.Knob.tones?.[props.tone ?? styles.tone].color ??
              styles.Knob.base.color
        }
        y={
          (([props.style].flat()?.height ??
            styles.Container.tones[props.tone ?? styles.tone]?.height ??
            styles.Container.base.height ??
            0) -
            ([props.style?.Knob].flat()?.height ??
              styles.Knob.tones[props.tone ?? styles.tone]?.height ??
              styles.Knob.base.height ??
              0)) /
          2
        }
        x={toggleX()}
        zIndex={2}
        width={
          (([props.style?.Knob].flat()?.width ?? styles.Knob.tones[props.tone ?? styles.tone]?.width) ??
            styles.Knob.base.width ??
            2) - 2
        }
        height={([props.style?.Knob].flat()?.height ?? styles.Knob.tones[props.tone ?? styles.tone]?.height ?? styles.Knob.base.height ?? 2) - 2}
        borderRadius={
          [props.style?.Knob].flat()?.borderRadius ?? styles.Knob.tones[props.tone ?? styles.tone]?.borderRadius ?? styles.Knob.base.borderRadius ?? 2
        }
      />
    </View>
  );
};

export default Toggle;

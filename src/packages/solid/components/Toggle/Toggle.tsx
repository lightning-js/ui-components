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
import { View } from '@lightningjs/solid';
import type { UIComponentProps } from '../../types/interfaces.js';
import styles from './Toggle.styles.js';

export interface ToggleProps extends UIComponentProps {
  /**
   * Indicates whether the Toggle is checked or unchecked.
   * Setting this to `true` will check the toggle, and setting it to `false` will uncheck it.
   */
  checked?: boolean;
}

const Toggle: Component<ToggleProps> = (props: ToggleProps) => {
  const positionToggle = (checked: boolean | undefined, props: ToggleProps) => {
    return checked != undefined && props.checked
      ? // width
        (styles.Container.tones?.[props.tone ?? styles.tone]?.width ?? styles.Container.base.width) -
          // strokeWidth
          (styles.Container.tones?.[props.tone ?? styles.tone]?.border?.width ??
            styles.Container.base.border.width) -
          // knobPadding
          (styles.Knob.tones?.[props.tone ?? styles.tone]?.padding ?? styles.Knob.base.padding) -
          // knobWidth
          (styles.Knob.tones?.[props.tone ?? styles.tone]?.width ?? styles.Knob.base.width) || 0
      : // strokeWidth

        (styles.Container.tones?.[props.tone ?? styles.tone]?.border?.width ??
          styles.Container.base.border.width) +
          // knobPadding
          (styles.Knob.tones?.[props.tone ?? styles.tone]?.padding ?? styles.Knob.base.padding) || 0;
  };
  const toggleX = createMemo(() => positionToggle(props.checked, props));

  return (
    <View
      {...props}
      style={[
        props.style, //
        styles.Container.tones?.[props.tone ?? styles.tone],
        styles.Container.base
      ]}
      color={
        props.checked
          ? styles.Container.tones?.[props.tone ?? styles.tone]?.colorChecked ??
            styles.Container.base.colorChecked
          : styles.Container.tones?.[props.tone ?? styles.tone]?.color ?? styles.Container.base.color
      }
    >
      <View
        style={[styles.Knob.tones?.[props.tone ?? styles.tone], styles.Knob.base]}
        color={
          props.checked
            ? styles.Knob.tones?.[props.tone ?? styles.tone]?.colorChecked ?? styles.Knob.base.colorChecked
            : styles.Knob.tones?.[props.tone ?? styles.tone]?.color ?? styles.Knob.base.color
        }
        y={
          ((styles.Container.tones[props.tone ?? styles.tone]?.height ?? styles.Container.base.height ?? 0) -
            (styles.Knob.tones[props.tone ?? styles.tone]?.height ?? styles.Knob.base.height ?? 0)) /
          2
        }
        x={toggleX()}
        zIndex={2}
        width={(styles.Knob.tones[props.tone ?? styles.tone]?.width ?? styles.Knob.base.width ?? 2) - 2}
        height={(styles.Knob.tones[props.tone ?? styles.tone]?.height ?? styles.Knob.base.height ?? 2) - 2}
        borderRadius={
          styles.Knob.tones[props.tone ?? styles.tone]?.borderRadius ?? styles.Knob.base.borderRadius ?? 2
        }
      />
    </View>
  );
};

export default Toggle;

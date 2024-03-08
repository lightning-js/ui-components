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
  console.log(styles);
  return (
    <View
      {...props}
      // tone={props.tone ?? styles.tone}
      style={[
        ...[props.style].flat(),
        styles.Container.tones?.[props.tone ?? styles.tone],
        styles.Container.base
      ]}
      // states={[...(props.checked ? ['checked'] : []), props.tone ?? styles.tone]}
      // ref={Container}
      color={
        props.checked
          ? [props.style].flat()?.Container?.colorChecked ??
            styles.Container.tones?.[props.tone ?? styles.tone].colorChecked ??
            styles.Container.base.colorChecked
          : [props.style].flat()?.Container?.color ??
            styles.Container.tones?.[props.tone ?? styles.tone].color ??
            styles.Container.base.color
      }
      // color={
      //   props.checked
      //     ? styles.Container.tones?.[props.tone ?? styles.tone].backgroundColorChecked ??
      //       styles.Container.base.backgroundColorChecked
      //     : styles.Container.tones?.[props.tone ?? styles.tone].backgroundColor ??
      //       styles.Container.base.backgroundColor
      // }
    >
      <View
        style={[styles.Knob.tones?.[props.tone ?? styles.tone], styles.Knob.base]}
        // y={
        //   (([props.style].flat()?.Knob?.height || props.style?.Knob.height || styles.Knob.height || 0) -
        //     ([props.style].flat()?.Knob?.knobHeight ||
        //       props.style?.Knob?.knobHeight ||
        //       styles.Knob.knobHeight ||
        //       0)) /
        //   2
        // }
        color={
          props.checked
            ? [props.style].flat()?.Knob?.colorChecked ??
              styles.Knob.tones?.[props.tone ?? styles.tone].colorChecked ??
              styles.Knob.base.colorChecked
            : [props.style].flat()?.Knob?.color ??
              styles.Knob.tones?.[props.tone ?? styles.tone].color ??
              styles.Knob.base.color
        }
        y={
          ((styles.Container.tones[props.tone ?? styles.tone]?.height ?? styles.Container.base.height ?? 2) -
            (styles.Knob.tones[props.tone ?? styles.tone]?.height ?? styles.Knob.base.height ?? 0)) /
          2
        }
        // x={toggleX}
        zIndex={2}
        // width={
        //   ([props.style].flat()?.Knob?.knobWidth ||
        //     props.style?.Knob.knobWidth ||
        //     styles.Knob.knobWidth ||
        //     0) - 2
        // }
        width={(styles.Knob.tones[props.tone ?? styles.tone]?.width ?? styles.Knob.base.width ?? 2) - 2}
        // height={
        //   ([props.style].flat()?.Knob?.knobHeight ||
        //     props.style?.Knob?.knobHeight ||
        //     styles.Knob.knobHeight ||
        //     0) - 2
        // }
        height={(styles.Knob.tones[props.tone ?? styles.tone]?.height ?? styles.Knob.base.height ?? 2) - 2}
        // borderRadius={
        //   [props.style].flat()?.Knob?.knobRadius ||
        //   props.style?.Knob?.knobRadius ||
        //   styles.Knob?.knobRadius ||
        //   0
        // }
        borderRadius={
          styles.Knob.tones[props.tone ?? styles.tone]?.borderRadius ?? styles.Knob.base.borderRadius ?? 2
        }
      />
    </View>
  );
};

export default Toggle;

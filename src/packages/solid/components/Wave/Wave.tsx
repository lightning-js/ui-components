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

import { createEffect, createMemo, type Component } from 'solid-js';
import { View } from '@lightningjs/solid';
import styles from './Wave.styles.js';
import type { ElementNode } from '@lightningjs/solid';
import type { WaveProps } from './Wave.types.js';

const Wave: Component<WaveProps> = (props: WaveProps) => {
  let right: ElementNode,
    left: ElementNode,
    center: ElementNode,
    rightCenter: ElementNode,
    leftCenter: ElementNode;

  const maxHeight = createMemo(
    () =>
      props.height ??
      styles.Container.tones[props.tone ?? styles.tone]?.height ??
      styles.Container.base.height
  );

  const isAnimating = createMemo(() => props.toggleAnimation);

  function startAnimation() {
    if (isAnimating() && left && leftCenter && center && rightCenter && right) {
      // left animation
      left
        .chain({ height: maxHeight() / 3 }, { duration: 300 })
        .chain({ height: maxHeight() / 3 }, { duration: 50 })
        .chain({ height: maxHeight() / 2 }, { duration: 300 })
        .chain({ height: maxHeight() / 2 }, { duration: 50 })
        .chain({ height: maxHeight() }, { duration: 300 })
        .chain({ height: maxHeight() / 4 }, { duration: 300 })
        .chain({ height: maxHeight() / 4 }, { duration: 50 })
        .start();

      // center left animation
      leftCenter
        .chain({ height: maxHeight() / 2 }, { duration: 300 })
        .chain({ height: maxHeight() / 2 }, { duration: 50 })
        .chain({ height: maxHeight() / 3 }, { duration: 300 })
        .chain({ height: maxHeight() / 3 }, { duration: 50 })
        .chain({ height: maxHeight() / 4 }, { duration: 300 })
        .chain({ height: maxHeight() }, { duration: 300 })
        .chain({ height: maxHeight() }, { duration: 50 })
        .start();

      // center animation
      center
        .chain({ height: maxHeight() }, { duration: 300 })
        .chain({ height: maxHeight() }, { duration: 50 })
        .chain({ height: maxHeight() / 4 }, { duration: 300 })
        .chain({ height: maxHeight() / 4 }, { duration: 50 })
        .chain({ height: maxHeight() }, { duration: 300 })
        .chain({ height: maxHeight() }, { duration: 50 })
        .chain({ height: maxHeight() / 4 }, { duration: 300 })
        .start();

      // center right animation
      rightCenter
        .chain({ height: maxHeight() / 2 }, { duration: 300 })
        .chain({ height: maxHeight() / 2 }, { duration: 50 })
        .chain({ height: maxHeight() / 3 }, { duration: 300 })
        .chain({ height: maxHeight() / 3 }, { duration: 50 })
        .chain({ height: maxHeight() / 4 }, { duration: 300 })
        .chain({ height: maxHeight() }, { duration: 300 })
        .chain({ height: maxHeight() }, { duration: 50 })
        .start();

      // right animation
      right
        .chain({ height: maxHeight() / 3 }, { duration: 300 })
        .chain({ height: maxHeight() / 3 }, { duration: 50 })
        .chain({ height: maxHeight() / 2 }, { duration: 300 })
        .chain({ height: maxHeight() / 2 }, { duration: 50 })
        .chain({ height: maxHeight() }, { duration: 300 })
        .chain({ height: maxHeight() / 4 }, { duration: 300 })
        .chain({ height: maxHeight() / 4 }, { duration: 50 })
        .start();
    }
  }

  createEffect(() => {
    // currently hardcoded to 1450ms to match the animation duration + 75 ms for buffer
    setInterval(() => startAnimation(), 1425);
  });

  return (
    <View
      {...props}
      // @ts-expect-error TODO type needs to be fixed in framework
      style={[props.style, styles.Container.tones?.[props.tone ?? styles.tone], styles.Container.base]}
    >
      {/* Left */}
      <View
        // @ts-expect-error TODO type needs to be fixed in framework
        style={[props.style, styles.Rectangles.tones?.[props.tone ?? styles.tone], styles.Rectangles.base]}
        ref={left}
        y={maxHeight()}
        height={maxHeight() / 4}
      />
      {/* Left Center */}
      <View
        // @ts-expect-error TODO type needs to be fixed in framework
        style={[props.style, styles.Rectangles.tones?.[props.tone ?? styles.tone], styles.Rectangles.base]}
        ref={leftCenter}
        y={maxHeight()}
        height={maxHeight() / 1.5}
      />
      {/* Center */}
      <View
        // @ts-expect-error TODO type needs to be fixed in framework
        style={[props.style, styles.Rectangles.tones?.[props.tone ?? styles.tone], styles.Rectangles.base]}
        ref={center}
        y={maxHeight()}
        height={maxHeight()}
      />
      {/* Right Center */}
      <View
        // @ts-expect-error TODO type needs to be fixed in framework
        style={[props.style, styles.Rectangles.tones?.[props.tone ?? styles.tone], styles.Rectangles.base]}
        ref={rightCenter}
        y={maxHeight()}
        height={maxHeight() / 1.5}
      />
      {/* Right */}
      <View
        // @ts-expect-error TODO type needs to be fixed in framework
        style={[props.style, styles.Rectangles.tones?.[props.tone ?? styles.tone], styles.Rectangles.base]}
        ref={right}
        y={maxHeight()}
        height={maxHeight() / 4}
      />
    </View>
  );
};

export default Wave;

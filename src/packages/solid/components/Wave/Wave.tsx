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
import styles from './Wave.styles.js';

export interface WaveProps extends UIComponentProps {}

const Wave: Component<WaveProps> = (props: WaveProps) => {

  let right, left, center, rightCenter, leftCenter;
  
  // @ts-expect-error
  const height = createMemo(() => props.height ?? styles.Container.tones[props.tone ?? styles.tone].height ?? styles.Container.base.height);

  
  const isAnimating = createMemo(() => props.toggleAnimation);
  
  function startAnimations() {

    // left animation
    left.chain({ height: height()}, { duration: 100 })
    .chain({ height: (height()*2.5)}, { duration: 100 })
    .chain({ height: (height()*2)}, { duration: 100 })
    .chain({ height: height()}, { duration: 100 }).start();

    // center left animation
    leftCenter.chain({ height: height()/2}, { duration: 100 })
    .chain({ height: (height()/8/2)}, { duration: 100 })
    .chain({ height: (height()*1.5/2)}, { duration: 100 })
    .chain({ height: height()/2}, { duration: 100 }).start();

    // center animation
    center.chain({ height: height()*3}, { duration: 100 })
    .chain({ height: (height()/2*3)}, { duration: 100 })
    .chain({ height: (height()*1.25*3)}, { duration: 100 })
    .chain({ height: height()*3}, { duration: 100 }).start();

    // center right animation
    rightCenter.chain({ height: height()/2}, { duration: 100 })
    .chain({ height: (height()/8/2)}, { duration: 100 })
    .chain({ height: (height()*1.5/2)}, { duration: 100 })
    .chain({ height: height()/2}, { duration: 100 }).start();

    // right animation
    right.chain({ height: height()}, { duration: 100 })
    .chain({ height: (height()*3)}, { duration: 100 })
    .chain({ height: (height()*1.5)}, { duration: 100 })
    .chain({ height: height()}, { duration: 100 }).start();
   }

  //  this.h = this.w * this.style.lockedRatio;
  //  this._padding = this.w * this.style.lockedPaddingRatio;
  //  this._left2H = this._right1H = this.h * 2;
  //  this._middleH = this.h * 3;

  setTimeout(() => 
    setInterval(() =>
    startAnimations(), 400), 1000
  );

  return (
    <View {...props} style={[props.style, styles.Container.tones?.[props.tone ?? styles.tone], styles.Container.base]}
    onEnter={startAnimations}>
      {/* Left */}
      <View
        style={[props.style, styles.Rectangles.tones?.[props.tone ?? styles.tone], styles.Rectangles.base]}
        ref={left}
      ></View>
      {/* Left Center */}
      <View
        style={[props.style, styles.Rectangles.tones?.[props.tone ?? styles.tone], styles.Rectangles.base]}
        ref={leftCenter}
      ></View>
      {/* Center */}
      <View

        style={[props.style, styles.Rectangles.tones?.[props.tone ?? styles.tone], styles.Rectangles.base]}
        ref={center}
      ></View>
      {/* Right Center */}
      <View
        style={[props.style, styles.Rectangles.tones?.[props.tone ?? styles.tone], styles.Rectangles.base]}
        ref={rightCenter}
      ></View>
      {/* Right */}
      <View

        style={[props.style, styles.Rectangles.tones?.[props.tone ?? styles.tone], styles.Rectangles.base]}
        ref={right}
      ></View>
    </View>
  );
};

export default Wave;

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
import { View } from '@lightningjs/solid';
import type { UIComponentProps } from '../../types/interfaces.js';
import styles from './ProgressBar.styles.js';

export interface ProgressBarProps extends UIComponentProps {
  /**
   * a numeric value of the current progress represented as a decimal between 0 and 1
   */
  progress: number;

  /**
   * color of the overlay portion of the progress bar
   */
  progressColor: string | number;
  /**
   * total width of the component
   */
  width: number;
  /**
   * total height of the component
   */
  height?: number;
}

const ProgressBar: Component<ProgressBarProps> = (props: ProgressBarProps) => {
  return (
    <View
      {...props}
      forwardStates
      // @ts-expect-error TODO type needs to be fixed in framework
      style={[
        props.style, //
        styles.Container.tones[props.tone || styles.tone],
        styles.Container.base
      ]}
    >
      <View
        forwardStates
        animationSettings={props.animationSettings}
        width={props.width * props.progress}
        color={props.progressColor}
        style={[
          styles.ProgressBar.tones[props.tone || styles.tone], //
          styles.ProgressBar.base
        ]}
      />
    </View>
  );
};

export default ProgressBar;

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
import styles from './ProgressBar.styles.js';

export interface ProgressBarProps extends ProgressBarStyleProps, NodeProps {
  /**
   * a numeric value of the current progress represented as a decimal between 0 and 1
   */
  progress: number;
  /**
   * total width of the component
   */
  width: number;
  /**
   * total height of the component
   */
  height: number;
}

export interface ProgressBarStyleProps {
  progressColor?: number;
  borderRadius?: number;
}

const ProgressBar: Component<ProgressBarProps> = (props: ProgressBarProps) => {
  return (
    <View {...props} style={styles.container}>
      <View
        style={styles.progressBar}
        animate
        animationSettings={props.animationSettings}
        width={props.width * props.progress}
        borderRadius={props.borderRadius}
        color={props.progressColor}
      />
    </View>
  );
};

export default ProgressBar;

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
import { View, type NodeProps, type NodeStyles } from '@lightningjs/solid';
import styles from './ProgressBar.styles.slim.js';
import type { Tone } from 'types';

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
  tone: Tone;
  style?: {
    Container?: NodeStyles;
    ProgressBar?: NodeStyles;
  };
}

export interface ProgressBarStyleProps {
  progressColor?: number;
  borderRadius?: number;
}

const ProgressBar: Component<ProgressBarProps> = (props: ProgressBarProps) => {
  return (
    <View
      {...props}
      style={styles.Container}
      tone={props.tone || styles.tone}
      {...{
        ...styles.Container[props.tone || styles.tone],
        ...props?.style?.Container
      }}
    >
      <View
        style={styles.ProgressBar}
        animate
        tone={props.tone || styles.tone}
        {...{
          ...styles.ProgressBar[props.tone || styles.tone],
          ...props?.style?.ProgressBar
        }}
        animationSettings={props.animationSettings}
        width={props.width * props.progress}
        borderRadius={props.borderRadius}
        color={props.progressColor}
      />
    </View>
  );
};

export default ProgressBar;

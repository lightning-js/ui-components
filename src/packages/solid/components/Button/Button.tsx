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

import { Show, createEffect } from 'solid-js';
import type { Component } from 'solid-js';
import { View, Text, IntrinsicCommonProps } from '@lightningjs/solid';
import styles from './Button.styles';
import { withPadding } from '@lightningjs/solid-primitives';
withPadding;

/**
 * Primary UI component for user interaction
 */
type ButtonProps = IntrinsicCommonProps & {
  title?: string;
  suffix?: Component;
  prefix?: Component;
  width: number;
  height: number;
};

const Button: Component<ButtonProps> = (props) => {
  let SuffixRef, PrefixRef;

  return (
    <node
      use:withPadding={styles.Container.padding}
      {...props}
      style={styles.Container}
      animate
      forwardStates
    >
      <View forwardStates style={styles.FlexContainer}>
        <Show when={!!props.prefix}>
          <View ref={PrefixRef} x={props.prefix.width} style={styles.Prefix}>
            {props.prefix}
          </View>
        </Show>
        <View forwardStates width={props.width} style={styles.FlexContainer}>
          <Show when={!!props.children}>{props.children}</Show>
          <Show when={!props.children}>
            <Text style={styles.Text}>{props.title}</Text>
          </Show>
        </View>
        <Show when={!!props.suffix}>
          <View ref={SuffixRef} x={props.width - props.suffix.width} style={styles.Suffix}>
            {props.suffix}
          </View>
        </Show>
      </View>
    </node>
  );
};

export default Button;

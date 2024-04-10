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
import { type Component } from 'solid-js';
import { Text, type TextProps } from '@lightningjs/solid';
import { withPadding } from '@lightningjs/solid-primitives';
import type { UIComponentProps } from '../../types/interfaces.js';
import styles from './Badge.styles.js';
withPadding; // Preserve the import.

interface BadgeProps extends UIComponentProps {
  /**
   * Badge text
   */
  title: TextProps['children'];

  padding?: number[];
}

interface BadgeContainerProps extends UIComponentProps {
  padding?: number[];
}

const BadgeContainer: Component<BadgeContainerProps> = props => {
  return (
    <node
      use:withPadding={
        props.padding ??
        styles.Container?.tones[props.tone ?? styles.tone]?.padding ??
        styles.Container.base.padding
      }
      {...props}
      style={[
        props.style, //
        styles.Container.tones[props.tone || styles.tone],
        styles.Container.base
      ]}
      forwardStates
    />
  );
};

const Badge: Component<BadgeProps> = (props: BadgeProps) => {
  return (
    <BadgeContainer padding={props.padding} tone={props.tone} style={props.style}>
      <Text
        style={[styles.Text.tones[props.tone ?? styles.tone], styles.Text.base]}
        tone={props.tone || styles.tone}
      >
        {props.title}
      </Text>
    </BadgeContainer>
  );
};

export { Badge as default, BadgeContainer, type BadgeProps, type BadgeContainerProps };

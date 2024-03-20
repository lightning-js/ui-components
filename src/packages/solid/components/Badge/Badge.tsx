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
import { Text, Show } from '@lightningjs/solid';
import { withPadding } from '@lightningjs/solid-primitives';
import Icon, { type IconProps } from '../Icon/Icon.jsx';
import styles, { type BadgeStyleProperties } from './Badge.styles.js';
import type { Tone } from '../../types/types.js';
withPadding; // Preserve the import.

export type BadgeProps = BadgeStyleProperties & {
  // Functional Properties

  /**
   * Badge text
   */
  title: string;

  // TODO better handling for default prop values
  /**
   * side of the text where icon will appear on
   * defaults to left if value is either undefined or invalid
   */
  iconAlign?: string;

  /**
   * Object containing all properties supported in the [Icon component](?path=/docs/components-icon--icon)
   */
  icon?: Partial<IconProps>;

  /**
   * sets the component's color palette
   */
  tone?: Tone;
};

const Badge: Component<BadgeProps> = (props: BadgeProps) => {
  return (
    <node
      use:withPadding={
        props.padding ??
        styles.Container?.tones[props.tone ?? styles.tone]?.padding ??
        styles.Container.base.padding
      }
      {...props}
      color={props.backgroundColor}
      style={[
        styles.Container.tones[props.tone || styles.tone], //
        styles.Container.base
      ]}
      forwardStates
    >
      <Show when={Boolean(props.icon && props.iconAlign !== 'right')}>
        <Icon
          {...props.icon}
          color={props.iconColor}
          style={[
            styles.Icon.tones[props.tone ?? styles.tone], //
            styles.Icon.base
          ]}
        />
      </Show>
      <Text
        color={props.textColor}
        style={[styles.Text.tones[props.tone ?? styles.tone], styles.Text.base]}
        tone={props.tone || styles.tone}
      >
        {props.title}
      </Text>
      <Show when={Boolean(props.icon && props.iconAlign === 'right')}>
        <Icon
          {...props.icon}
          color={props.iconColor}
          style={[
            styles.Icon.tones?.[props.tone ?? styles.tone], //
            styles.Icon.base
          ]}
        />
      </Show>
    </node>
  );
};

export default Badge;

/*
 * Copyright 2024 Comcast Cable Communications Management, LLC
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
import { createSignal, type Component } from 'solid-js';
import { Text, Show, type NodeProps, View } from '@lightningjs/solid';
import { withPadding } from '@lightningjs/solid-primitives';
import styles, { type CardContentStyles } from './CardContent.styles.js';
import type { Tone } from '../../types/types.js';
import Artwork, { type ArtworkProps } from '../Artwork/Artwork.jsx';
import type { ProgressBarProps } from '../ProgressBar/ProgressBar.jsx';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';
withPadding; // Preserve the import.

export type CardContentProps = {
  /**
   * prop object passed to the child Artwork component
   */
  artwork?: ArtworkProps;

  /**
   * When in unfocused or disabled mode, if this flag is true metadata will collapse (when focused, it will always be expanded)
   */
  shouldCollapse?: boolean;

  /**
   * Controls how slotted components will be rendered. By default all slotted
   * components will be hidden until the focus state is applied, where they will
   * then be shown. If `persistentMetadata` is set to `true`, all slotted components
   * will be rendered regardless of focus.
   *
   * "slotted components" refers to any component passed to the following properties:
   * - topLeft
   * - topRight
   * - bottom
   * - inset
   */
  persistentMetadata?: boolean;

  /**
   * component rendered to the upper left corner of the CardContent
   *
   * component will be shown/hidden on focus unless persistentMetadata is true
   *
   * states are not forwarded to this component. if it should react to states
   * applied to the CardContent, they must also be set on this component
   */
  topLeft?: NodeProps['children'];

  /**
   * component rendered to the upper right corner of the CardContent
   *
   * component will be shown/hidden on focus unless persistentMetadata is true
   *
   * states are not forwarded to this component. if it should react to states
   * applied to the CardContent, they must also be set on this component
   */
  topRight?: NodeProps['children'];

  /**
   * component rendered to center of the CardContent, flex-aligned to the bottom border
   *
   * component will be shown/hidden on focus unless persistentMetadata is true
   *
   * states are not forwarded to this component. if it should react to states
   * applied to the CardContent, they must also be set on this component
   */
  inset?: NodeProps['children'];

  /**
   * component rendered below the CardContent
   *
   * component will be shown/hidden on focus unless persistentMetadata is true
   *
   * states are not forwarded to this component. if it should react to states
   * applied to the CardContent, they must also be set on this component
   */
  bottom?: NodeProps['children'];

  /**
   * props passed to the child ProgressBar, rendered at the bottom of the component.
   * ProgressBar will not appear if progressBar.progress is 0/falsy
   */
  progressBar?: Partial<ProgressBarProps> | undefined;
  /**
   * sets the component's color palette
   */
  tone?: Tone;

  padding?: number[];

  style?: Partial<CardContentStyles>;
};

const CardContent: Component<CardContentProps> = props => {
  const [isFocused, setIsFocused] = createSignal(false);
  return (
    <node
      use:withPadding={
        props.padding ??
        styles.Container.tones[props.tone ?? styles.tone]?.padding ??
        styles.Container.base.padding
      }
      {...props}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={[
        ...[props.style].flat(),
        styles.Container.tones[props.tone ?? styles.tone],
        styles.Container.base
      ]}
      borderRadius={props.persistentMetadata || isFocused()}
    >
      <Artwork
        {...props.artwork}
        tone={props.tone ?? styles.tone}
        width={
          props.width ??
          styles.Container.tones[props.tone ?? styles.tone]?.width ??
          styles.Container.base.width
        }
        height={
          props.height ??
          styles.Container.tones[props.tone ?? styles.tone]?.height ??
          styles.Container.base.height
        }
      />

      <Show when={props.persistentMetadata || isFocused()}>
        <View
          x={
            props.padding?.[0] ??
            styles.Container.tones[props.tone ?? styles.tone]?.padding?.[0] ??
            styles.Container.base.padding[0]
          }
          y={
            props.padding?.[1] ??
            styles.Container.tones[props.tone ?? styles.tone]?.padding?.[1] ??
            styles.Container.base.padding[1]
          }
        >
          {props.topLeft}
        </View>

        <View
          x={
            (props?.width ??
              styles.Container.tones[props.tone ?? styles.tone]?.width ??
              styles.Container.base.width) -
            (props.padding?.[0] ??
              styles.Container.tones[props.tone ?? styles.tone]?.[0] ??
              styles.Container.base.padding[0])
          }
          y={
            props.padding?.[1] ??
            styles.Container.tones[props.tone ?? styles.tone]?.padding?.[1] ??
            styles.Container.base.padding[1]
          }
          mountX={1}
        >
          {props.topRight}
        </View>
      </Show>

      <Show when={props.progressBar?.progress ? props.progressBar.progress > 0 : 0}>
        <ProgressBar
          {...props.progressBar}
          width={
            (props.width ??
              styles.Container.tones[props.tone ?? styles.tone]?.width ??
              styles.Container.base.width) -
            (props.padding?.[0] ??
              styles.Container.tones[props.tone ?? styles.tone]?.padding?.[0] ??
              styles.Container.base.padding[0]) *
              2
          }
          x={
            props.padding?.[0] ??
            styles.Container.tones[props.tone ?? styles.tone]?.padding?.[0] ??
            styles.Container.base.padding[0]
          }
          y={
            (props.height ??
              props.height ??
              styles.Container.tones[props.tone ?? styles.tone]?.height ??
              styles.Container.base.height) -
            (props.paddingYProgress ??
              styles.Container.tones[props.tone ?? styles.tone]?.paddingYProgress ??
              styles.Container.base.paddingYProgress) -
            (props?.progressBar?.height || 0)
          }
        />
      </Show>
      <Artwork
        {...props.artwork}
        width={400}
        height={400}
        x={
          props.width ??
          styles.Container.tones[props.tone ?? styles.tone]?.width ??
          styles.Container.base.width
        }
      />
    </node>
  );
};

export default CardContent;

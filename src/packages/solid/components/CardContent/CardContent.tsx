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
import { Show, type NodeProps, View } from '@lightningjs/solid';
import { withPadding } from '@lightningjs/solid-primitives';
import styles, { type CardContentStyles } from './CardContent.styles.js';
import type { Tone } from '../../types/types.js';
import Artwork, { type ArtworkProps } from '../Artwork/Artwork.jsx';
import type { ProgressBarProps } from '../ProgressBar/ProgressBar.jsx';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';
import Tile from '../Tile/Tile.jsx';
withPadding; // Preserve the import.

export interface CardContentProps extends NodeProps {
  /**
   * prop object passed to the child Artwork component
   */
  artwork?: ArtworkProps;

  /**
   * When in unfocused or disabled mode, if this flag is true metadata will collapse (when focused, it will always be expanded)
   */
  shouldCollapse?: boolean;

  /**
   * component rendered to the upper left corner of the CardContent
   *
   * component will be shown/hidden on focus unless shouldCollapse is false
   *
   * states are not forwarded to this component. if it should react to states
   * applied to the CardContent, they must also be set on this component
   */
  topLeft?: NodeProps['children'];

  /**
   * component rendered to the upper right corner of the CardContent
   *
   * component will be shown/hidden on focus unless  is false
   *
   * states are not forwarded to this component. if it should react to states
   * applied to the CardContent, they must also be set on this component
   */
  topRight?: NodeProps['children'];

  /**
   * component rendered to center of the CardContent, flex-aligned to the bottom border
   *
   * component will be shown/hidden on focus unless  is false
   *
   * states are not forwarded to this component. if it should react to states
   * applied to the CardContent, they must also be set on this component
   */
  inset?: NodeProps['children'];

  /**
   * component rendered below the CardContent
   *
   * component will be shown/hidden on focus unless shouldCollapse is false
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
   * component rendered in right section of the CardContent on the top
   *
   * component will be shown/hidden on focus if shouldCollapse is true
   *
   * states are not forwarded to this component. if it should react to states
   * applied to the CardContent, they must also be set on this component
   */
  metadataTop?: NodeProps['children'];

  /**
   * component rendered in right section of the CardContent on the bottom
   *
   * component will be shown/hidden on focus if shouldCollapse is true
   *
   * states are not forwarded to this component. if it should react to states
   * applied to the CardContent, they must also be set on this component
   */
  metadataBottom?: NodeProps['children'];
  /**
   * sets the component's color palette
   */
  tone?: Tone;

  padding?: number[];

  style?: Partial<CardContentStyles>;
}

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
      forwardFocus={1}
    >
      {/* Left side of component- where Tile is */}
      <Tile
        {...props}
        borderRadius={[
          styles.Container.base.borderRadius,
          !props.shouldCollapse || isFocused() ? 0 : styles.Container.base.borderRadius,
          !props.shouldCollapse || isFocused() ? 0 : styles.Container.base.borderRadius,
          styles.Container.base.borderRadius
        ]}
        style={[styles.TileContainer.tones[props.tone ?? styles.tone], styles.TileContainer.base]}
        width={
          props.width ??
          styles.TileContainer.tones[props.tone ?? styles.tone]?.width ??
          styles.TileContainer.base.width
        }
        height={
          props.height ??
          styles.TileContainer.tones[props.tone ?? styles.tone]?.height ??
          styles.TileContainer.base.height
        }
        persistentMetadata={props.shouldCollapse ? false : true}
      />

      {/* Right side of component- where metadata is  */}
      <Show when={!props.shouldCollapse || isFocused()}>
        <View
          style={[styles.MetadataContainer.tones[props.tone ?? styles.tone], styles.MetadataContainer.base]}
          borderRadius={[
            !props.shouldCollapse || isFocused() ? 0 : styles.Container.base.borderRadius,
            styles.Container.base.borderRadius,
            styles.Container.base.borderRadius,
            !props.shouldCollapse || isFocused() ? 0 : styles.Container.base.borderRadius
          ]}
        >
          <View x={styles.MetadataContainer.base.padding[0]} y={styles.MetadataContainer.base.padding[0]}>
            {props.metadataTop}
          </View>
          <View
            x={styles.MetadataContainer.base.padding[0]}
            y={styles.MetadataContainer.base.height - styles.MetadataContainer.base.padding[0]}
            mountY={1}
          >
            {props.metadataBottom}
          </View>
        </View>
      </Show>
    </node>
  );
};

export default CardContent;

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

import { type Component, createSignal } from 'solid-js';
import { Show, type NodeProps, View } from '@lightningjs/solid';
import { withPadding } from '@lightningjs/solid-primitives';
import type { UIComponentProps } from '../../types/interfaces.js';
import Artwork, { type ArtworkProps } from '../Artwork/Artwork.jsx';
import ProgressBar, { type ProgressBarProps } from '../ProgressBar/ProgressBar.jsx';
import styles, { type TileStyleProperties } from './Tile.styles.js';
withPadding;

export interface TileProps extends UIComponentProps {
  /**
   * prop object passed to the child Artwork component
   */
  artwork?: ArtworkProps;

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
   * component rendered to the upper left corner of the Tile
   *
   * component will be shown/hidden on focus unless persistentMetadata is true
   *
   * states are not forwarded to this component. if it should react to states
   * applied to the Tile, they must also be set on this component
   */
  topLeft?: NodeProps['children'];

  /**
   * component rendered to the upper right corner of the Tile
   *
   * component will be shown/hidden on focus unless persistentMetadata is true
   *
   * states are not forwarded to this component. if it should react to states
   * applied to the Tile, they must also be set on this component
   */
  topRight?: NodeProps['children'];

  /**
   * component rendered to center of the Tile, flex-aligned to the bottom border
   *
   * component will be shown/hidden on focus unless persistentMetadata is true
   *
   * states are not forwarded to this component. if it should react to states
   * applied to the Tile, they must also be set on this component
   */
  inset?: NodeProps['children'];

  /**
   * component rendered below the Tile
   *
   * component will be shown/hidden on focus unless persistentMetadata is true
   *
   * states are not forwarded to this component. if it should react to states
   * applied to the Tile, they must also be set on this component
   */
  bottom?: NodeProps['children'];

  /**
   * props passed to the child ProgressBar, rendered at the bottom of the component.
   * ProgressBar will not appear if progressBar.progress is 0/falsy
   */
  progressBar?: Partial<ProgressBarProps> | undefined;

  paddingYProgress?: TileStyleProperties['paddingYProgress'];

  padding?: number[];
}

const Tile: Component<TileProps> = (props: TileProps) => {
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
      // @ts-expect-error TODO type needs to be fixed in framework
      style={[
        props.style, //
        styles.Container.tones[props.tone ?? styles.tone],
        styles.Container.base
      ]}
    >
      <Artwork
        {...props.artwork}
        width={props.width}
        height={props.height}
        states={props.states}
        style={props.style}
        tone={props.tone ?? styles.tone}
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
            (props.width ??
              styles.Container.tones[props.tone ?? styles.tone]?.width ??
              styles.Container.base.width) -
            (props.padding?.[0] ??
              styles.Container.tones[props.tone ?? styles.tone]?.padding?.[0] ??
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

        <View
          style={[
            styles.InsetBottom.tones[props.tone ?? styles.tone], //
            styles.InsetBottom.base
          ]}
          width={
            (props.width ??
              styles.Container.tones[props.tone ?? styles.tone]?.width ??
              styles.Container.base.width) -
            styles.Container.base.padding[0] * 2
          }
          x={
            props.padding?.[0] ??
            styles.Container.tones[props.tone ?? styles.tone]?.padding?.[0] ??
            styles.Container.base.padding[0]
          }
          y={
            (props.height ??
              styles.Container.tones[props.tone ?? styles.tone]?.height ??
              styles.Container.base.height) -
            (props.padding?.[1] ??
              styles.Container.tones[props.tone ?? styles.tone]?.padding?.[1] ??
              styles.Container.base.padding[1]) -
            (props.progressBar?.progress > 0
              ? props.paddingYProgress ??
                styles.Container.tones[props.tone ?? styles.tone]?.paddingYProgress ??
                styles.Container.base.paddingYProgress
              : 0)
          }
        >
          {props.inset}
        </View>

        <View
          style={[
            styles.StandardBottom.tones[props.tone ?? styles.tone], //
            styles.StandardBottom.base
          ]}
          x={
            props.padding?.[0] ??
            styles.Container.tones[props.tone ?? styles.tone]?.padding?.[0] ??
            styles.Container.base.padding[0]
          }
          y={
            Number(
              props.height ??
                styles.Container.tones[props.tone ?? styles.tone]?.height ??
                styles.Container.base.height
            ) +
            (props.padding?.[1] ??
              styles.Container.tones[props.tone ?? styles.tone]?.padding?.[1] ??
              styles.Container.base.padding[1])
          }
          width={
            (props.width ??
              styles.Container.tones[props.tone ?? styles.tone]?.width ??
              styles.Container.base.width) -
            (props.padding?.[1] ??
              styles.Container.tones[props.tone ?? styles.tone]?.padding?.[1] ??
              styles.Container.base.padding[1]) *
              2
          }
        >
          {props.bottom}
        </View>
      </Show>
      {/* TODO why was this a ternary? */}
      <Show when={props.progressBar.progress > 0}>
        {/* @ts-expect-error doesn't get rendered if progress is falsy */}
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
    </node>
  );
};

export default Tile;

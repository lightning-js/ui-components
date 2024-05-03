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

import { type Component, createSignal, createMemo } from 'solid-js';
import { Dynamic, Show, type NodeProps, View } from '@lightningjs/solid';
import { withPadding } from '@lightningjs/solid-primitives';
import type { UIComponentProps } from '../../types/interfaces.js';
import Artwork from '../Artwork/Artwork.jsx';
import type { ArtworkProps } from '../Artwork/Artwork.types.js';
import ProgressBar, { type ProgressBarProps } from '../ProgressBar/ProgressBar.jsx';
import styles, { type TileStyleProperties } from './Tile.styles.js';
import type { Tone } from 'types/types.js';
withPadding;

type SlottedComponent = (props: unknown) => JSX.Element;

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
  topLeft?: SlottedComponent;

  /**
   * component rendered to the upper right corner of the Tile
   *
   * component will be shown/hidden on focus unless persistentMetadata is true
   *
   * states are not forwarded to this component. if it should react to states
   * applied to the Tile, they must also be set on this component
   */
  topRight?: SlottedComponent;

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

const getTone = (tone: Tone) => tone ?? styles.tone;

const getPaddingX = (padding: number[] | undefined, tone: Tone) =>
  padding?.[0] ?? styles.Container.tones[tone]?.padding?.[0] ?? styles.Container.base.padding[0];

const getPaddingY = (padding: number[], tone: Tone) =>
  padding?.[1] ?? styles.Container.tones[tone]?.padding?.[1] ?? styles.Container.base.padding[1];

const getWidth = (width: number | undefined, tone: Tone) =>
  width ?? styles.Container.tones[tone]?.width ?? styles.Container.base.width;

const getHeight = (height: number | undefined, tone: Tone) =>
  height ?? styles.Container.tones[tone]?.height ?? styles.Container.base.height;

// TODO finish creating this memo
const getPaddingYProgress = (progressBarProps, paddingYProgress, tone: Tone) =>
  progressBarProps.progress > 0
    ? paddingYProgress ??
      styles.Container.tones[tone]?.paddingYProgress ??
      styles.Container.base.paddingYProgress
    : 0;

const Tile: Component<TileProps> = (props: TileProps) => {
  const [isFocused, setIsFocused] = createSignal(false);

  const tone = createMemo(() => getTone(props.tone));
  const paddingX = createMemo(() => getPaddingX(props.padding, tone()));
  const paddingY = createMemo(() => getPaddingY(props.padding, tone()));
  const paddingYProgress = createMemo(() =>
    getPaddingYProgress(props.progressBar, props.paddingYProgress, tone())
  );
  const height = createMemo(() => getHeight(props.height, tone()));
  const width = createMemo(() => getWidth(props.width, tone()));

  return (
    <node
      use:withPadding={[paddingX(), paddingY()]}
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
        {/* @ts-expect-error return type needs to be updated in solid */}
        <Dynamic component={props.topLeft} x={paddingX()} y={paddingY()} />

        {/* @ts-expect-error return type needs to be updated in solid */}
        <Dynamic component={props.topRight} x={width() - paddingX()} y={paddingY()} mountX={1} />

        <View
          style={[
            styles.InsetBottom.tones[props.tone ?? styles.tone], //
            styles.InsetBottom.base
          ]}
          width={width() - paddingX() * 2}
          x={paddingX()}
          y={height() - paddingY() - paddingYProgress()}
        >
          {props.inset}
        </View>

        <View
          style={[
            styles.StandardBottom.tones[props.tone ?? styles.tone], //
            styles.StandardBottom.base
          ]}
          x={paddingX()}
          y={height() + paddingY()}
          width={width() - paddingY() * 2}
        >
          {props.bottom}
        </View>
      </Show>
      <Show when={props.progressBar?.progress > 0}>
        {/* @ts-expect-error doesn't get rendered if progress is falsy */}
        <ProgressBar
          {...props.progressBar}
          width={width() - paddingX() * 2}
          x={paddingX()}
          y={height() - paddingYProgress() - (props?.progressBar?.height ?? 0)}
        />
      </Show>
    </node>
  );
};

export default Tile;

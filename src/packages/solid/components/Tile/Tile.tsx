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
import { Show, View } from '@lightningjs/solid';
import { withPadding } from '../../utils/index.js';
import Artwork from '../Artwork/Artwork.jsx';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';
import type { TileProps } from './Tile.types.js';
import styles from './Tile.styles.js';
withPadding;

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
      borderRadius={props.radius}
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
        borderRadius={props.radius}
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
            Number(
              props.width ??
                styles.Container.tones[props.tone ?? styles.tone]?.width ??
                styles.Container.base.width
            ) -
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
            Number(
              props.width ??
                styles.Container.tones[props.tone ?? styles.tone]?.width ??
                styles.Container.base.width
            ) -
            styles.Container.base.padding[0] * 2
          }
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
            ) -
            Number(
              props.paddingYBetweenContent ??
                styles.Container.tones[props.tone ?? styles.tone]?.paddingYBetweenContent ??
                styles.Container.base.paddingYBetweenContent
            ) -
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
            Number(
              props.contentSpacingY ??
                styles.Container.tones[props.tone ?? styles.tone]?.contentSpacingY ??
                styles.Container.base.contentSpacingY
            )
          }
          width={
            Number(
              props.width ??
                styles.Container.tones[props.tone ?? styles.tone]?.width ??
                styles.Container.base.width
            ) -
            (props.padding?.[1] ??
              styles.Container.tones[props.tone ?? styles.tone]?.padding?.[1] ??
              styles.Container.base.padding[1]) *
              2
          }
        >
          {props.bottom}
        </View>
      </Show>
      <Show when={props.progressBar?.progress > 0}>
        {/* @ts-expect-error doesn't get rendered if progress is falsy */}
        <ProgressBar
          {...props.progressBar}
          width={
            Number(
              props.width ??
                styles.Container.tones[props.tone ?? styles.tone]?.width ??
                styles.Container.base.width
            ) -
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
            Number(
              props.height ??
                props.height ??
                styles.Container.tones[props.tone ?? styles.tone]?.height ??
                styles.Container.base.height
            ) -
            (props.paddingYProgress ??
              styles.Container.tones[props.tone ?? styles.tone]?.paddingYProgress ??
              styles.Container.base.paddingYProgress) -
            Number(props?.progressBar?.height ?? 0)
          }
        />
      </Show>
    </node>
  );
};

export default Tile;

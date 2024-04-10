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

import type { NodeStyles } from '@lightningjs/solid';
import theme from 'theme';
import type { ComponentStyleConfig, NodeStyleSet, Tone } from '../../types/types.js';
import { makeComponentStyles } from '../../utils/index.js';

export interface ArtworkStyles {
  tone: Tone;
  Container: NodeStyleSet<{ fillColor: NodeStyles['color']; gradientColor: NodeStyles['color'] }>;
}

type ArtworkStyleProperties = Partial<{
  fallbackSrc: NodeStyles['src'];
  fillColor: NodeStyles['color'];
  gradientColor: NodeStyles['color'];
  imageScale: NodeStyles['scale'];
  imageScalePivotX: NodeStyles['pivotX'];
  imageScalePivotY: NodeStyles['pivotY'];
}>;

type ArtworkConfig = ComponentStyleConfig<ArtworkStyleProperties>;

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Artwork: { defaultTone, ...themeStyles } = { styles: {} } } = theme?.componentConfig;

const container: ArtworkConfig = {
  themeKeys: {
    fillColor: 'fillColor',
    scale: 'imageScale',
    pivotX: 'imageScalePivotX',
    pivotY: 'imageScalePivotY'
  },
  base: {
    fallbackSrc: undefined,
    fillColor: theme.color.overlay,
    gradientColor: theme.color.material,
    pivotX: 0.5,
    pivotY: 0.5,
    scale: undefined,
    borderRadius: theme.radius.md,
  },
  themeStyles
};

const Container = makeComponentStyles<ArtworkStyles['Container']>(container);

const styles: ArtworkStyles = {
  tone: defaultTone || 'neutral',
  Container
};

export default styles;

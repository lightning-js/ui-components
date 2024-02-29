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
import type { Tone } from '../../types/types.js';
import type { ComponentStyleConfig, NodeStyleSet } from '../../types/types.js';
import { makeComponentStyles } from '../../utils/index.js';

export interface RowStyles {
  tone: Tone;
  Container: NodeStyleSet;
}

type RowStyleProperties = {
  itemSpacing?: NodeStyles['itemSpacing'];
  itemTransition?: NodeStyles['itemTransition'];
  scrollIndex?: NodeStyles['scrollIndex'];
};

type RowConfig = ComponentStyleConfig<RowStyleProperties>;

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Row: { defaultTone, ...themeStyles } = { styles: {} } } = theme?.componentConfig;

const container: RowConfig = {
  themeKeys: {
    gap: 'itemSpacing',
    scrollIndex: 'scrollIndex',
    itemTransition: 'itemTransition'
  },
  base: {
    display: 'flex',
    justifyContent: 'flexStart',
    flexDirection: 'row',
    gap: theme.layout.gutterX,
    width: theme.layout.screenW,
    itemTransition: {
      ...theme.animation.standardEntrance,
      duration: theme.animation.duration.fast
    }
  },
  themeStyles
};

const Container = makeComponentStyles<RowStyles['Container']>(container);

const styles: RowStyles = {
  tone: defaultTone,
  Container
};

export default styles;

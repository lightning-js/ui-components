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

import type { NodeStyles } from '@lightningjs/solid';
import theme from 'theme';
import type { Tone } from '../../types/types.js';
import type { ComponentStyleConfig, NodeStyleSet } from '../../types/types.js';
import { makeComponentStyles } from '../../utils/index.js';

export interface TileStyles {
  tone: Tone;
  Container: NodeStyleSet<{ padding: number[] }>;
  InsetBottom: NodeStyleSet;
  StandardBottom: NodeStyleSet;
  LogoContainer: NodeStyleSet;
}

type TileStyleProperties = Partial<{
  alpha: NodeStyles['alpha'];
  radius: NodeStyles['borderRadius'];
}>;

type TileConfig = ComponentStyleConfig<TileStyleProperties>;
/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Tile: { defaultTone, ...tileThemeStyles } = { styles: {} } } = theme?.componentConfig;
/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Surface: { defaultSurfaceTone, ...surfaceThemeStyles } = { styles: {} } } = theme?.componentConfig;

const container: TileConfig = {
  themeKeys: {
    alpha: 'alpha'
  },
  base: {
    width: 400,
    height: 240,
    padding: [40, 10], // TODO support separate paddingX and paddingY values from theme, possibly formatter
    paddingYProgress: theme.spacer.xl,
    paddingYBetweenContent: theme.spacer.md,
    borderRadius: theme.radius.md,
    alpha: theme.alpha.primary
  },
  modes: {
    disabled: {
      alpha: theme.alpha.inactive
    }
  },
  themeStyles: {
    ...surfaceThemeStyles,
    ...tileThemeStyles
  }
};

const insetBottom: TileConfig = {
  themeKeys: {},
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flexStart',
    mountY: 1
  },
  themeStyles: tileThemeStyles
};

const standardBottom: TileConfig = {
  themeKeys: {},
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flexStart'
  },
  themeStyles: tileThemeStyles
};

const logoContainer: TileConfig = {
  themeKeys: {},
  base: {
    width: theme.spacer.lg * 5,
    height: theme.spacer.xxl + theme.spacer.md
  },
  themeStyles: tileThemeStyles
};

// generates the style object
const Container = makeComponentStyles<TileStyles['Container']>(container);
const InsetBottom = makeComponentStyles<TileStyles['InsetBottom']>(insetBottom);
const StandardBottom = makeComponentStyles<TileStyles['StandardBottom']>(standardBottom);
const LogoContainer = makeComponentStyles<TileStyles['LogoContainer']>(logoContainer);

const styles: TileStyles = {
  tone: defaultTone || defaultSurfaceTone || 'neutral',
  Container,
  InsetBottom,
  StandardBottom,
  LogoContainer
};

export default styles;

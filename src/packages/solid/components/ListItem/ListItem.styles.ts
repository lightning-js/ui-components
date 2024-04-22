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
import type { ComponentStyleConfig, NodeStyleSet, TextStyleSet, Tone } from '../../types/types.js';
import { getWidthByColumnSpan, makeComponentStyles } from '../../utils/index.js';

export interface ListItemStyles {
  tone: Tone;
  Container: NodeStyleSet<{ columnSpan: number; paddingX: number }>;
  Title: TextStyleSet;
  Description: TextStyleSet;
}

export type ListItemStyleProperties = {
  alpha?: NodeStyles['alpha'];
  contentSpacing?: NodeStyles['gap'];
  paddingX?: number;
  width?: NodeStyles['width'];
  textColor?: NodeStyles['color'];
};

type ListItemConfig = ComponentStyleConfig<ListItemStyleProperties>;

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { ListItem: { tone: defaultTone, ...themeStyles } = { themeStyles: {} } } = theme?.componentConfig;
/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Button: { tone: buttonDefaultTone, ...buttonThemeStyles } = { buttonThemeStyles: {} } } =
  theme?.componentConfig;
/* @ts-expect-error next-line see above */
const { Surface: { tone: surfaceDefaultTone, ...surfaceThemeStyles } = { surfaceThemeStyles: {} } } =
  theme?.componentConfig;

const container: ListItemConfig = {
  themeKeys: {
    alpha: 'alpha',
    paddingX: 'paddingX',
    gap: 'contentSpacing',
    width: 'width'
  },
  base: {
    alpha: theme.alpha.primary,
    borderRadius: theme.radius.sm,
    color: theme.color.interactiveNeutral,
    contentColor: theme.color.fillNeutral,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // TODO we should come up with a more uniform way to calculate item heights
    height: theme.typography.headline3.lineHeight + theme.typography.body3.lineHeight + theme.spacer.xl * 2,
    paddingX: theme.spacer.xl,
    width: getWidthByColumnSpan(3)
  },
  modes: {
    focus: {
      color: theme.color.interactiveNeutralFocus,
      contentColor: theme.color.fillInverse
    },
    disabled: {
      alpha: theme.alpha.inactive,
      color: theme.color.fillNeutralDisabled
    }
  },
  tones: {
    inverse: {
      color: theme.color.interactiveInverse
    },
    brand: {
      color: theme.color.interactiveBrand,
      focus: {
        color: theme.color.fillNeutral
      }
    }
  },
  themeStyles: {
    ...surfaceThemeStyles,
    ...buttonThemeStyles,
    ...themeStyles
  }
};

const title: ListItemConfig = {
  themeKeys: {
    x: 'paddingX'
  },
  base: {
    color: theme.color.textNeutral,
    x: theme.spacer.xl,
    ...theme.typography.headline3
  },
  modes: {
    focus: {
      color: theme.color.textInverse
    },
    disabled: {
      color: theme.color.textNeutralDisabled
    }
  },
  tones: {
    inverse: {
      color: theme.color.fillNeutral
    },
    brand: {
      color: theme.color.fillBrand,
      focus: {
        color: theme.color.fillBrand
      }
    }
  },
  themeStyles: {
    ...surfaceThemeStyles,
    ...buttonThemeStyles,
    ...themeStyles
  }
};

const description: ListItemConfig = {
  themeKeys: {
    color: 'textColor',
    x: 'paddingX'
  },
  base: {
    color: theme.color.textNeutral,
    x: theme.spacer.xl,
    ...theme.typography.body3
  },
  modes: {
    focus: {
      color: theme.color.textInverse
    },
    disabled: {
      color: theme.color.textNeutralDisabled
    }
  },
  tones: {
    inverse: {
      color: theme.color.fillNeutral
    },
    brand: {
      color: theme.color.fillBrand,
      focus: {
        color: theme.color.fillBrand
      }
    }
  },
  themeStyles: {
    ...surfaceThemeStyles,
    ...buttonThemeStyles,
    ...themeStyles
  }
};

const Container = makeComponentStyles<ListItemStyles['Container']>(container);
const Title = makeComponentStyles<ListItemStyles['Title']>(title);
const Description = makeComponentStyles<ListItemStyles['Description']>(description);

const styles: ListItemStyles = {
  tone: defaultTone || buttonDefaultTone || surfaceDefaultTone || 'neutral',
  Container,
  Title,
  Description
};

export default styles;

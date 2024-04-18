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
import { makeComponentStyles } from '../../utils/index.js';

export interface ListItemStyles {
  tone: Tone;
  Container: NodeStyleSet<{ columnSpan: number; padding: [number, number] }>;
  Title: TextStyleSet;
  Description: TextStyleSet;
}

export type ListItemStyleProperties = {
  alpha?: NodeStyles['alpha'];
  paddingX?: number;
  paddingY?: number;
  contentSpacing?: number;
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
    paddingY: 'paddingY',
    gap: 'contentSpacing'
  },
  base: {
    borderRadius: theme.radius.sm,
    color: theme.color.interactiveNeutral,
    contentColor: theme.color.fillNeutral,
    columnSpan: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
    // padding: theme.spacer * 2, // TODO don't need to use padding and height
    // padding: [theme.spacer.xl, theme.spacer.xl]
    // height: theme.typography.headline3.lineHeight + theme.typography.body3.lineHeight + theme.spacer.xl * 2,
    // paddingY: theme.spacer.xl,
    // paddingX: theme.spacer.xl
  },
  modes: {
    focus: {
      color: theme.color.interactiveNeutralFocus,
      contentColor: theme.color.fillInverse
    },
    disabled: {
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
  themeKeys: {},
  base: {
    color: theme.color.textNeutral,
    textAlign: 'left',
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
    color: 'textColor'
  },
  base: {
    color: theme.color.textNeutral,
    // textAlign: 'left',
    // x: container.base.paddingX,
    // y: title.base.lineHeight + title.base.y,
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

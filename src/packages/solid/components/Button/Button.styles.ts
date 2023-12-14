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

import type { TextStyles, NodeStyles } from '@lightningjs/solid';
import theme from 'theme';
import type { WithTonesModes, Tone, ComponentConfig } from 'types';
import { makeComponentStyles, type LookupObject } from '../../utils/index.js';

export interface ButtonStyle {
  tone: Tone;
  Container: (NodeStyles & { padding: number[] }) &
    WithTonesModes<NodeStyles & { padding: [number, number] }>;
  Text: TextStyles & WithTonesModes<TextStyles>;
}

type ButtonConfig = ComponentConfig<ButtonStyleProperties>;

type ButtonStyleProperties = {
  backgroundColor?: NodeStyles['color'];
  borderRadius?: NodeStyles['borderRadius'];
  contentColor?: NodeStyles['color'];
  justifyContent?: NodeStyles['justifyContent'];
  textAlign?: TextStyles['textAlign'];
  textColor?: TextStyles['color'];
};

const { Button: { styles: themeStyles, tone } = { styles: {}, tone: 'neutral' } } = theme?.componentConfig;

const containerDefaults: NodeStyles & { padding: [number, number] } = {
  width: 400,
  height: 100,
  display: 'flex',
  padding: [theme.spacer.xxxl, theme.spacer.xl],
  color: themeStyles?.base?.backgroundColor || theme.color.interactiveNeutral,
  justifyContent: themeStyles?.base?.justifyContent || 'center',
  borderRadius: themeStyles?.base?.borderRadius || theme.radius.sm
};

const containerModes: LookupObject<ButtonStyleProperties> = {
  focus: {
    color: {
      themeKey: 'backgroundColor',
      fallback: theme.color.interactiveNeutralFocus
    },
    justifyContent: {
      themeKey: 'justifyContent',
      fallback: containerDefaults.justifyContent
    },
    borderRadius: {
      themeKey: 'borderRadius',
      fallback: containerDefaults.borderRadius
    }
  },
  disabled: {
    color: {
      themeKey: 'backgroundColor',
      fallback: theme.color.fillNeutralDisabled
    },
    justifyContent: {
      themeKey: 'justifyContent',
      fallback: containerDefaults.justifyContent
    },
    borderRadius: {
      themeKey: 'borderRadius',
      fallback: containerDefaults.borderRadius
    }
  },
  inverse: {
    color: {
      themeKey: 'backgroundColor',
      fallback: theme.color.interactiveInverse
    },
    justifyContent: {
      themeKey: 'justifyContent',
      fallback: containerDefaults.justifyContent
    },
    borderRadius: {
      themeKey: 'borderRadius',
      fallback: containerDefaults.borderRadius
    }
  },
  brand: {
    color: {
      themeKey: 'backgroundColor',
      fallback: theme.color.interactiveBrand
    },
    justifyContent: {
      themeKey: 'justifyContent',
      fallback: containerDefaults.justifyContent
    },
    borderRadius: {
      themeKey: 'borderRadius',
      fallback: containerDefaults.borderRadius
    }
  },
  'neutral-focus': {
    color: {
      themeKey: 'backgroundColor',
      fallback: theme.color.interactiveNeutralFocus
    },
    justifyContent: {
      themeKey: 'justifyContent',
      fallback: containerDefaults.justifyContent
    },
    borderRadius: {
      themeKey: 'borderRadius',
      fallback: containerDefaults.borderRadius
    }
  },
  'neutral-disabled': {
    color: {
      themeKey: 'backgroundColor',
      fallback: theme.color.fillNeutralDisabled
    },
    justifyContent: {
      themeKey: 'justifyContent',
      fallback: containerDefaults.justifyContent
    },
    borderRadius: {
      themeKey: 'borderRadius',
      fallback: containerDefaults.borderRadius
    }
  },
  'inverse-focus': {
    color: {
      themeKey: 'backgroundColor',
      fallback: theme.color.interactiveNeutralFocus
    },
    justifyContent: {
      themeKey: 'justifyContent',
      fallback: containerDefaults.justifyContent
    },
    borderRadius: {
      themeKey: 'borderRadius',
      fallback: containerDefaults.borderRadius
    }
  },
  'inverse-disabled': {
    color: {
      themeKey: 'backgroundColor',
      fallback: theme.color.fillNeutralDisabled
    },
    justifyContent: {
      themeKey: 'justifyContent',
      fallback: containerDefaults.justifyContent
    },
    borderRadius: {
      themeKey: 'borderRadius',
      fallback: containerDefaults.borderRadius
    }
  },
  'brand-focus': {
    color: {
      themeKey: 'backgroundColor',
      fallback: theme.color.interactiveNeutralFocus
    },
    justifyContent: {
      themeKey: 'justifyContent',
      fallback: containerDefaults.justifyContent
    },
    borderRadius: {
      themeKey: 'borderRadius',
      fallback: containerDefaults.borderRadius
    }
  },
  'brand-disabled': {
    color: {
      themeKey: 'backgroundColor',
      fallback: theme.color.fillNeutralDisabled
    },
    justifyContent: {
      themeKey: 'justifyContent',
      fallback: containerDefaults.justifyContent
    },
    borderRadius: {
      themeKey: 'borderRadius',
      fallback: containerDefaults.borderRadius
    }
  }
};

const textDefaults = {
  textAlign: themeStyles?.base?.textAlign || 'left',
  color: themeStyles?.base?.textColor || theme.color.textNeutral,
  contentColor: themeStyles?.base?.contentColor || theme.color.fillInverse,
  ...theme.typography.button1
};

const textModes = {
  focus: {
    textAlign: {
      themeKey: 'textAlign',
      fallback: textDefaults.textAlign
    },
    color: {
      themeKey: 'textColor',
      fallback: theme.color.textInverse
    },
    contentColor: {
      themeKey: 'contentColor',
      fallback: theme.color.textInverse
    }
  },
  disabled: {
    textAlign: {
      themeKey: 'textAlign',
      fallback: textDefaults.textAlign
    },
    color: {
      themeKey: 'textColor',
      fallback: theme.color.textNeutralDisabled
    },
    contentColor: {
      themeKey: 'contentColor',
      fallback: theme.color.textNeutralDisabled
    }
  },
  inverse: {
    textAlign: {
      themeKey: 'textAlign',
      fallback: textDefaults.textAlign
    },
    color: {
      themeKey: 'textColor',
      fallback: theme.color.fillNeutral
    },
    contentColor: {
      themeKey: 'contentColor',
      fallback: theme.color.fillNeutral
    }
  },
  brand: {
    textAlign: {
      themeKey: 'textAlign',
      fallback: textDefaults.textAlign
    },
    color: {
      themeKey: 'textColor',
      fallback: theme.color.fillBrand
    },
    contentColor: {
      themeKey: 'contentColor',
      fallback: theme.color.fillBrand
    }
  },
  'neutral-focus': {
    textAlign: {
      themeKey: 'textAlign',
      fallback: textDefaults.textAlign
    },
    color: {
      themeKey: 'textColor',
      fallback: theme.color.textInverse
    },
    contentColor: {
      themeKey: 'contentColor',
      fallback: theme.color.textInverse
    }
  },
  'neutral-disabled': {
    textAlign: {
      themeKey: 'textAlign',
      fallback: textDefaults.textAlign
    },
    color: {
      themeKey: 'textColor',
      fallback: theme.color.textNeutralDisabled
    },
    contentColor: {
      themeKey: 'contentColor',
      fallback: theme.color.textNeutralDisabled
    }
  },
  'inverse-focus': {
    textAlign: {
      themeKey: 'textAlign',
      fallback: textDefaults.textAlign
    },
    color: {
      themeKey: 'textColor',
      fallback: theme.color.textInverse
    },
    contentColor: {
      themeKey: 'contentColor',
      fallback: theme.color.textInverse
    }
  },
  'inverse-disabled': {
    textAlign: {
      themeKey: 'textAlign',
      fallback: textDefaults.textAlign
    },
    color: {
      themeKey: 'textColor',
      fallback: theme.color.textNeutralDisabled
    },
    contentColor: {
      themeKey: 'contentColor',
      fallback: theme.color.textNeutralDisabled
    }
  },
  'brand-focus': {
    textAlign: {
      themeKey: 'textAlign',
      fallback: textDefaults.textAlign
    },
    color: {
      themeKey: 'textColor',
      fallback: theme.color.fillBrand
    },
    contentColor: {
      themeKey: 'contentColor',
      fallback: theme.color.fillBrand
    }
  }
};

const styles: ButtonStyle = {
  tone: tone || 'neutral',
  Container: {
    ...makeComponentStyles(containerDefaults, containerModes, themeStyles)
  },
  Text: {
    ...makeComponentStyles(textDefaults, textModes, themeStyles)
  }
};

export default styles;

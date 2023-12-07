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

import theme from 'theme';
import type { WithTonesModes, Tone } from 'types';
import { type TextStyles, type NodeStyles } from '@lightningjs/solid';
import { makeComponentStyles, type LookupObject } from '../../utils.js';

export interface ButtonStyle {
  tone: Tone;
  Container: (NodeStyles & { padding: number[] }) &
    WithTonesModes<NodeStyles & { padding: [number, number] }>;
  Text: TextStyles & WithTonesModes<TextStyles>;
}

const { styles: themeStyles, tone }: { styles: WithTonesModes; tone: string } = theme.componentConfig.Button;

const containerDefaults: Partial<NodeStyles> = {
  width: 400,
  height: 100,
  display: 'flex' as const,
  padding: [theme.spacer.xxxl, theme.spacer.xl],
  color: themeStyles?.base?.backgroundColor || theme.color.interactiveNeutral,
  justifyContent: themeStyles?.base?.justifyContent || 'center',
  borderRadius: themeStyles?.base?.borderRadius || theme.radius.sm
};

const containerModes: LookupObject = {
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
      fallback: theme.color.interactiveNeutralFocusSoft
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

const containerToneModes: LookupObject = {
  'neutral-focus': {
    color: {
      themeKey: 'backgroundColor',
      fallback: containerModes.focus.color.fallback
    },
    justifyContent: {
      themeKey: 'justifyContent',
      fallback: containerModes.focus.justifyContent.fallback
    },
    borderRadius: {
      themeKey: 'borderRadius',
      fallback: containerModes.focus.borderRadius.fallback
    }
  },
  'neutral-disabled': {
    color: {
      themeKey: 'backgroundColor',
      fallback: containerModes.disabled.color.fallback
    },
    justifyContent: {
      themeKey: 'justifyContent',
      fallback: containerModes.disabled.justifyContent.fallback
    },
    borderRadius: {
      themeKey: 'borderRadius',
      fallback: containerModes.disabled.borderRadius.fallback
    }
  },
  'inverse-focus': {
    color: {
      themeKey: 'backgroundColor',
      fallback: containerModes.focus.color.fallback
    },
    justifyContent: {
      themeKey: 'justifyContent',
      fallback: containerModes.focus.justifyContent.fallback
    },
    borderRadius: {
      themeKey: 'borderRadius',
      fallback: containerModes.focus.borderRadius.fallback
    }
  },
  'inverse-disabled': {
    color: {
      themeKey: 'backgroundColor',
      fallback: containerModes.disabled.color.fallback
    },
    justifyContent: {
      themeKey: 'justifyContent',
      fallback: containerModes.disabled.justifyContent.fallback
    },
    borderRadius: {
      themeKey: 'borderRadius',
      fallback: containerModes.disabled.borderRadius.fallback
    }
  },
  'brand-focus': {
    color: {
      themeKey: 'backgroundColor',
      fallback: containerModes.focus.color.fallback
    },
    justifyContent: {
      themeKey: 'justifyContent',
      fallback: containerModes.focus.justifyContent.fallback
    },
    borderRadius: {
      themeKey: 'borderRadius',
      fallback: containerModes.focus.borderRadius.fallback
    }
  },
  'brand-disabled': {
    color: {
      themeKey: 'backgroundColor',
      fallback: containerModes.disabled.color.fallback
    },
    justifyContent: {
      themeKey: 'justifyContent',
      fallback: containerModes.disabled.justifyContent.fallback
    },
    borderRadius: {
      themeKey: 'borderRadius',
      fallback: containerModes.disabled.borderRadius.fallback
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
  }
};

const textToneModes = {
  'neutral-focus': {
    textAlign: {
      themeKey: 'textAlign',
      fallback: textModes.focus.textAlign.fallback
    },
    color: {
      themeKey: 'textColor',
      fallback: textModes.focus.color.fallback
    },
    contentColor: {
      themeKey: 'contentColor',
      fallback: textModes.focus.contentColor.fallback
    }
  },
  'neutral-disabled': {
    textAlign: {
      themeKey: 'textAlign',
      fallback: textModes.disabled.textAlign.fallback
    },
    color: {
      themeKey: 'textColor',
      fallback: textModes.disabled.color.fallback
    },
    contentColor: {
      themeKey: 'contentColor',
      fallback: textModes.disabled.contentColor.fallback
    }
  },
  'inverse-focus': {
    textAlign: {
      themeKey: 'textAlign',
      fallback: textModes.focus.textAlign.fallback
    },
    color: {
      themeKey: 'textColor',
      fallback: textModes.focus.color.fallback
    },
    contentColor: {
      themeKey: 'contentColor',
      fallback: textModes.focus.contentColor.fallback
    }
  },
  'inverse-disabled': {
    textAlign: {
      themeKey: 'textAlign',
      fallback: textModes.disabled.textAlign.fallback
    },
    color: {
      themeKey: 'textColor',
      fallback: textModes.disabled.color.fallback
    },
    contentColor: {
      themeKey: 'contentColor',
      fallback: textModes.disabled.contentColor.fallback
    }
  },
  'brand-focus': {
    textAlign: {
      themeKey: 'textAlign',
      fallback: textModes.focus.textAlign.fallback
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
  'brand-disabled': {
    textAlign: {
      themeKey: 'textAlign',
      fallback: textModes.disabled.textAlign.fallback
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
    ...containerDefaults,
    ...makeComponentStyles(containerModes, themeStyles),
    ...makeComponentStyles(containerToneModes, themeStyles)
  },
  Text: {
    ...textDefaults,
    ...makeComponentStyles(textModes, themeStyles),
    ...makeComponentStyles(textToneModes, themeStyles)
  }
};

export default styles;

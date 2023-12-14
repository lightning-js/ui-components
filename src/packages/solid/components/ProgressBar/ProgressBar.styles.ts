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

import { type NodeStyles } from '@lightningjs/solid';
import theme from 'theme';
import type { Color, Animatable, Tone } from 'types';
import { makeComponentStyles, type LookupObject } from '../../utils/index.js';

export interface ProgressBarStyle {
  tone: Tone;
  Container: NodeStyles;
  ProgressBar: NodeStyles;
}

export type ProgressBarStyleProperties = {
  height: number;
  color: Animatable<Color>;
  borderRadius: number;
};

const { ProgressBar: { styles: themeStyles, tone } = { styles: {}, tone: 'neutral' } } =
  theme?.componentConfig;

const containerDefaults: NodeStyles = {
  height: theme.spacer.md,
  color: themeStyles?.base?.barColor || theme.color.fillNeutralTertiary,
  borderRadius: theme.radius.xs
};

const containerTonesModes: LookupObject<ProgressBarStyleProperties> = {
  inverse: {
    color: {
      themeKey: 'barColor',
      fallback: theme.color.fillInverseTertiary
    },
    height: {
      themeKey: 'height',
      fallback: containerDefaults.height
    },
    borderRadius: {
      themeKey: 'radius',
      fallback: containerDefaults.borderRadius
    }
  },
  brand: {
    color: {
      themeKey: 'barColor',
      fallback: containerDefaults.color
    },
    height: {
      themeKey: 'height',
      fallback: containerDefaults.height
    },
    borderRadius: {
      themeKey: 'radius',
      fallback: containerDefaults.borderRadius
    }
  },
  focus: {
    color: {
      themeKey: 'barColor',
      fallback: containerDefaults.color
    },
    height: {
      themeKey: 'height',
      fallback: containerDefaults.height
    },
    borderRadius: {
      themeKey: 'radius',
      fallback: containerDefaults.borderRadius
    }
  },
  disabled: {
    color: {
      themeKey: 'barColor',
      fallback: containerDefaults.color
    },
    height: {
      themeKey: 'height',
      fallback: containerDefaults.height
    },
    borderRadius: {
      themeKey: 'radius',
      fallback: containerDefaults.borderRadius
    }
  },
  'neutral-focus': {
    // ...containerModes.focus
    color: {
      themeKey: 'barColor',
      fallback: containerDefaults.color
    },
    height: {
      themeKey: 'height',
      fallback: containerDefaults.height
    },
    borderRadius: {
      themeKey: 'radius',
      fallback: containerDefaults.borderRadius
    }
  },
  'neutral-disabled': {
    // ...containerModes.disabled
    color: {
      themeKey: 'barColor',
      fallback: containerDefaults.color
    },
    height: {
      themeKey: 'height',
      fallback: containerDefaults.height
    },
    borderRadius: {
      themeKey: 'radius',
      fallback: containerDefaults.borderRadius
    }
  },
  'inverse-focus': {
    // ...containerModes.focus
    color: {
      themeKey: 'barColor',
      fallback: theme.color.fillInverseTertiary
    },
    height: {
      themeKey: 'height',
      fallback: containerDefaults.height
    },
    borderRadius: {
      themeKey: 'radius',
      fallback: containerDefaults.borderRadius
    }
  },
  'inverse-disabled': {
    // ...containerModes.disabled
    color: {
      themeKey: 'barColor',
      fallback: theme.color.fillInverseTertiary
    },
    height: {
      themeKey: 'height',
      fallback: containerDefaults.height
    },
    borderRadius: {
      themeKey: 'radius',
      fallback: containerDefaults.borderRadius
    }
  },
  'brand-focus': {
    // ...containerModes.focus
    color: {
      themeKey: 'barColor',
      fallback: containerDefaults.color
    },
    height: {
      themeKey: 'height',
      fallback: containerDefaults.height
    },
    borderRadius: {
      themeKey: 'radius',
      fallback: containerDefaults.borderRadius
    }
  },
  'brand-disabled': {
    // ...containerModes.disabled
    color: {
      themeKey: 'barColor',
      fallback: containerDefaults.color
    },
    height: {
      themeKey: 'height',
      fallback: containerDefaults.height
    },
    borderRadius: {
      themeKey: 'radius',
      fallback: containerDefaults.borderRadius
    }
  }
};

const progressDefaults: NodeStyles = {
  borderRadius: themeStyles?.base?.borderRadius || theme.radius.xs,
  color: themeStyles?.base?.progressColor || theme.color.fillNeutral
};

const progressBarTonesModes: LookupObject<ProgressBarStyleProperties> = {
  inverse: {
    borderRadius: {
      themeKey: 'radius',
      fallback: progressDefaults.borderRadius
    },
    color: {
      themeKey: 'progressColor',
      fallback: theme.color.fillInverse
    }
  },
  brand: {
    borderRadius: {
      themeKey: 'radius',
      fallback: progressDefaults.borderRadius
    },
    color: {
      themeKey: 'progressColor',
      fallback: theme.color.fillBrand
    }
  },
  focus: {
    borderRadius: {
      themeKey: 'radius',
      fallback: progressDefaults.borderRadius
    },
    color: {
      themeKey: 'progressColor',
      fallback: progressDefaults.color
    }
  },
  disabled: {
    borderRadius: {
      themeKey: 'radius',
      fallback: progressDefaults.borderRadius
    },
    color: {
      themeKey: 'progressColor',
      fallback: progressDefaults.color
    }
  },
  'neutral-focus': {
    borderRadius: {
      themeKey: 'radius',
      fallback: progressDefaults.borderRadius
    },
    color: {
      themeKey: 'progressColor',
      fallback: progressDefaults.color
    }
  },
  'neutral-disabled': {
    borderRadius: {
      themeKey: 'radius',
      fallback: progressDefaults.borderRadius
    },
    color: {
      themeKey: 'progressColor',
      fallback: progressDefaults.color
    }
  },
  'inverse-focus': {
    borderRadius: {
      themeKey: 'radius',
      fallback: progressDefaults.borderRadius
    },
    color: {
      themeKey: 'progressColor',
      fallback: progressDefaults.color
    }
  },
  'inverse-disabled': {
    borderRadius: {
      themeKey: 'radius',
      fallback: progressDefaults.borderRadius
    },
    color: {
      themeKey: 'progressColor',
      fallback: progressDefaults.color
    }
  }
  // 'brand-focus': {
  //   borderRadius: {
  //     themeKey: 'radius',
  //     fallback: progressDefaults.borderRadius
  //   },
  //   color: {
  //     themeKey: 'progressColor',
  //     fallback: progressDefaults.color
  //   }
  // },
  // 'brand-disabled': {
  //   borderRadius: {
  //     themeKey: 'radius',
  //     fallback: progressDefaults.borderRadius
  //   },
  //   color: {
  //     themeKey: 'progressColor',
  //     fallback: progressDefaults.color
  //   }
  // }
};

const styles: ProgressBarStyle = {
  tone: tone || 'neutral',
  Container: {
    ...makeComponentStyles(containerDefaults, containerTonesModes, themeStyles)
  },
  ProgressBar: {
    ...makeComponentStyles(progressDefaults, progressBarTonesModes, themeStyles)
  }
} as const;

export default styles;

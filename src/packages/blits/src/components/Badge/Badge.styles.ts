/*
 * Copyright 2023 Comcast Cable Communications Management, LLC
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Tone } from '../../types/types.js';

type Style = {
  Container: {
    base: {
      [_prop: string]: unknown;
    };
    tones: {
      [tone in Tone]: {
        [_prop: string]: unknown;
      };
    };
  };
  Icon: {
    base: {
      [_prop: string]: unknown;
    };
    tones: {
      [tone in Tone]: {
        [_prop: string]: unknown;
      };
    };
  };
  Text: {
    base: {
      [_prop: string]: unknown;
    };
    tones: {
      [tone in Tone]: {
        [_prop: string]: unknown;
      };
    };
  };
};

const styles: Style = {
  Container: {
    base: {
      padding: [6, 12, 8, 12],
      gap: 4,
      borderRadius: 4
    },
    tones: {
      brand: {
        color: '0x93a9fdff',
        border: {
          color: 0x181819b3,
          width: 2
        }
      },
      inverse: {
        color: '0xf8f7fab3',
        border: {
          color: '0x181819b3',
          width: 2
        }
      },
      neutral: {
        color: '0x181819b3',
        border: {
          color: '0x181819ff',
          width: 2
        }
      }
    }
  },
  Icon: {
    base: {},
    tones: {
      brand: {
        color: '0xf8f7faff'
      },
      inverse: {
        color: '0x181819ff'
      },
      neutral: {
        color: '0xf8f7faff'
      }
    }
  },
  Text: {
    base: {
      fontFamily: 'Arial',
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 24,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    tones: {
      brand: {
        color: '0xf8f7faff'
      },
      inverse: {
        color: '0x181819ff'
      },
      neutral: {
        color: '0xf8f7faff'
      }
    }
  }
};

export default styles;

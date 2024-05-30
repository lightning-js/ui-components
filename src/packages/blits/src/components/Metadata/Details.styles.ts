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

import { ComponentStyle } from '../../utils/styleUtils.js';

type Style = {
  Container: {
    base: {
      contentSpacing: number;
      badgeContentSpacing: number;
      ratingContentSpacing: number;
    };
  };
  Text: {
    base: {
      fontFamily: string;
      fontSize: number;
      fontWeight: number;
      lineHeight: number;
      marginRight: number;
      color: string;
      disabled: {
        color: string;
      };
    };
    tones: {
      inverse: {
        color: string;
      };
    };
  };
};

const styles: Style = {
  Container: {
    base: {
      contentSpacing: 20,
      badgeContentSpacing: 8,
      ratingContentSpacing: 20
    }
  },
  Text: {
    base: {
      fontFamily: 'Arial',
      fontSize: 22,
      fontWeight: 300,
      lineHeight: 32,
      marginRight: 20,
      color: '0xf8f7faff',
      disabled: {
        color: '0xf8f7fa80'
      }
    },
    tones: {
      inverse: {
        color: '0x181819ff'
      }
    }
  }
};

export default styles satisfies ComponentStyle;

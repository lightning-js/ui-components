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

import type { Tone } from '../../types/types.js';
import { ComponentStyle } from '../../utils/styleUtils.js';

type Style = {
  Container: {
    base: {
      width: number;
      height: number;
      color: string;
    };
    tones: {
      [tone in Tone]?: {
        color: string;
      };
    };
  };
};

const styles: Style = {
  Container: {
    base: {
      width: 100,
      height: 100,
      color: '0x181819ff'
    },
    tones: {
      brand: {
        color: '0x93a9fdff'
      }
    }
  }
};

export default styles satisfies ComponentStyle;

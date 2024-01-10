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
import { getHexColor } from 'utils';

type States = 'active' | 'focus' | 'disabled';
/**
 * states can contain any of the style object's properties, except other states
 */
type StateStyle<Type> = Partial<Omit<Type, States>>;

type IconStyle = {
  container?: {
    width: number;
    height: number;
    color: number;
    focus?: StateStyle<IconStyle['container']>;
    disabled?: StateStyle<IconStyle['container']>;
    //fixed: boolean
  };
};

const styles: IconStyle = {
  container: {
    width: 100,
    height: 100,
    color: getHexColor(...(theme.color.fillNeutral as [string, number])),
    focus: {
      color: getHexColor(...(theme.color.fillInverse as [string, number])),
      tone: {
        inverse: {
          color: getHexColor(...(theme.color.fillNeutral as [string, number]))
        },
        brand: {
          color: getHexColor(...(theme.color.fillBrand as [string, number]))
        }
      }
    },
    disabled: {
      color: getHexColor(...(theme.color.fillNeutralDisabled as [string, number]))
    }
    //fixed: true
  }
};

export default styles;

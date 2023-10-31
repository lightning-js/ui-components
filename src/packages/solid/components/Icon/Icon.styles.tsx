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

type States = 'active' | 'focus' | 'disabled';
/**
 * states can contain any of the style object's properties, except other states
 */
type StateStyle<Type> = Partial<Omit<Type, States>>;

type IconStyle = {
  Container?: {
    width: number;
    height: number;
    color: number;
    focus?: StateStyle<IconStyle['Container']>;
    disabled?: StateStyle<IconStyle['Container']>;
    //fixed: boolean
  };
};

const styles: IconStyle = {
  Container: {
    width: 100,
    height: 100,
    color: theme.color.textInverse,
    focus: {
      color: theme.color.fillNeutral,
      tone: {
        inverse: {
          color: theme.color.fillInverse
        },
        brand: {
          color: theme.color.fillBrand
        }
      }
    },
    disabled: {
      color: theme.color.fillNeutralDisabled
    }
    //fixed: true
  }
};

export default styles;

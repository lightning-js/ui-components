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

const styles = {
  Container: {
    height: 100,
    width: 400,
    padding: [40, 10],
    color: getHexColor(...(theme.color.interactiveNeutralFocusSoft as [string, number])), //interactiveNeutralFocus undefined
    contentColor: getHexColor(...(theme.color.fillInverse as [string, number])),
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 30,
    focus: {
      color: getHexColor(...(theme.color.interactiveNeutralFocus as [string, number])),
      contentColor: getHexColor(...(theme.color.fillNeutral as [string, number]))
      /*       tone: {
        inverse: {
          color: getHexColor(...(theme.color.interactiveNeutralFocus as [string, number])),
          contentColor: getHexColor(...(theme.color.fillNeutral as [string, number]))
        },
        brand: {
          contentColor: getHexColor(...(theme.color.fillNeutral as [string, number]))
        }
      } */
    },
    disabled: {
      color: getHexColor(...(theme.color.fillNeutralDisabled as [string, number])),
      contentColor: getHexColor(...(theme.color.fillNeutralDisabled as [string, number]))
    }
  },
  FlexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Text: {
    textAlign: 'center',
    color: getHexColor(...(theme.color.textNeutral as [string, number])),
    ...theme.typography.button1,
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
  }
} as const;

export default styles;
